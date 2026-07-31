/**
 * Reencoda los masters de vídeo entregados por el cliente a un tamaño apto para web
 * y extrae un fotograma de portada para cada uno.
 *
 * Uso:
 *   npm run videos              reencoda lo que haga falta + genera portadas
 *   npm run videos -- --posters solo genera las portadas que falten
 *   npm run videos -- --force   reencoda todo, ignorando la caché
 *
 * Requiere ffmpeg en el PATH (`winget install Gyan.FFmpeg` / `brew install ffmpeg`).
 * Los masters originales están en los ZIP de `nuevo/`, así que el reencode es
 * destructivo pero recuperable.
 */
import { execFileSync, spawnSync } from 'node:child_process'
import { readdirSync, statSync, existsSync, mkdirSync, renameSync, rmSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const videosDir = join(root, 'src/assets/videos')
const postersDir = join(root, 'src/assets/images/posters-video')
const cacheFile = join(root, 'scripts/.videos-cache.json')

const onlyPosters = process.argv.includes('--posters')
const force = process.argv.includes('--force')

// Los anuncios los entrega la agencia ya optimizados: no los tocamos.
const skipDirs = ['ads']
// Por debajo de este tamaño el vídeo ya es apto para web; reencodarlo solo
// degradaría la imagen sin ahorrar apenas nada.
const skipUnderBytes = 25 * 1024 * 1024

if (spawnSync('ffmpeg', ['-version'], { stdio: 'ignore' }).status !== 0) {
	console.error('\n  ffmpeg no está instalado o no está en el PATH.')
	console.error('  Windows:  winget install Gyan.FFmpeg   (y reinicia la terminal)')
	console.error('  macOS:    brew install ffmpeg\n')
	process.exit(1)
}

const walk = dir =>
	readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
		const path = join(dir, entry.name)
		if (entry.isDirectory()) return skipDirs.includes(entry.name) ? [] : walk(path)
		return extname(entry.name).toLowerCase() === '.mp4' ? [path] : []
	})

/** Reemplaza `dest` por `tmp` reintentando ante bloqueos de fichero (EPERM/EBUSY en Windows). */
const replace = (tmp, dest) => {
	for (let attempt = 0; attempt < 5; attempt++) {
		try {
			rmSync(dest, { force: true })
			renameSync(tmp, dest)
			return true
		} catch (error) {
			if (error.code !== 'EPERM' && error.code !== 'EBUSY') throw error
			// espera activa corta: el bloqueo suele ser de un proceso que está cerrando
			const until = Date.now() + 400
			while (Date.now() < until);
		}
	}
	return false
}

const cache = existsSync(cacheFile) && !force ? JSON.parse(readFileSync(cacheFile, 'utf8')) : {}
const mb = bytes => (bytes / 1024 / 1024).toFixed(1).padStart(7)
const gb = bytes => (bytes / 1024 / 1024 / 1024).toFixed(2)

const all = walk(videosDir).sort()

// Restos de una ejecución anterior interrumpida
for (const stale of all.filter(f => f.endsWith('.tmp.mp4'))) rmSync(stale, { force: true })
const files = all.filter(f => !f.endsWith('.tmp.mp4'))

console.log(`\n${files.length} vídeos en src/assets/videos`)
console.log('Cierra `astro dev` antes de continuar: bloquea los ficheros en Windows.\n')

let saved = 0
let posters = 0

for (const file of files) {
	const rel = relative(videosDir, file).replaceAll('\\', '/')
	const before = statSync(file).size

	// --- portada -----------------------------------------------------------
	const poster = join(postersDir, rel.replace(/\.mp4$/i, '.webp'))
	if (!existsSync(poster) || force) {
		mkdirSync(dirname(poster), { recursive: true })
		try {
			// `thumbnail` elige el fotograma más representativo del tramo analizado,
			// así evitamos fundidos a negro y rótulos de entrada.
			execFileSync('ffmpeg', [
				'-y',
				'-loglevel',
				'error',
				'-ss',
				'00:00:03',
				'-i',
				file,
				'-vf',
				'thumbnail=100,scale=1280:-2',
				'-frames:v',
				'1',
				'-quality',
				'82',
				poster,
			])
			posters++
		} catch {
			console.warn(`  ! no se pudo extraer portada de ${rel}`)
		}
	}
	if (onlyPosters) continue

	// --- reencode ----------------------------------------------------------
	if (cache[rel] === before) {
		console.log(`  ${mb(before)} MB  ${rel}  (sin cambios)`)
		continue
	}
	if (before < skipUnderBytes) {
		cache[rel] = before
		console.log(`  ${mb(before)} MB  ${rel}  (ya ligero, se deja)`)
		continue
	}

	const tmp = file.replace(/\.mp4$/i, '.tmp.mp4')
	process.stdout.write(`  ${mb(before)} MB  ${rel}  … `)
	try {
		execFileSync('ffmpeg', [
			'-y',
			'-loglevel',
			'error',
			'-i',
			file,
			// máximo 1080p, alto par (requisito de H.264)
			'-vf',
			"scale='min(1920,iw)':-2",
			'-c:v',
			'libx264',
			'-preset',
			'medium',
			'-crf',
			'23',
			'-profile:v',
			'high',
			'-pix_fmt',
			'yuv420p',
			'-c:a',
			'aac',
			'-b:a',
			'128k',
			'-ac',
			'2',
			'-movflags',
			'+faststart',
			tmp,
		])
	} catch (error) {
		rmSync(tmp, { force: true })
		console.log(`ERROR: ${error.message}`)
		continue
	}

	const after = statSync(tmp).size
	if (after >= before) {
		rmSync(tmp, { force: true })
		cache[rel] = before
		console.log('el master ya estaba optimizado, se deja')
		continue
	}

	// En Windows el reemplazo falla con EPERM si algo tiene el fichero abierto
	// (típicamente `astro dev`). Reintentamos antes de rendirnos.
	if (!replace(tmp, file)) {
		rmSync(tmp, { force: true })
		console.log('BLOQUEADO — cierra `astro dev` / el reproductor y vuelve a lanzarlo')
		continue
	}

	cache[rel] = after
	saved += before - after
	console.log(`→ ${mb(after)} MB`)
	writeFileSync(cacheFile, JSON.stringify(cache, null, '\t'))
}

writeFileSync(cacheFile, JSON.stringify(cache, null, '\t'))
console.log(`\n${posters} portadas generadas en src/assets/images/posters-video/`)
if (!onlyPosters) {
	console.log(`Ahorro total: ${gb(saved)} GB`)
	console.log('\nRecuerda quitar de .gitignore los vídeos que ya bajen de 100MB.')
}
console.log('')
