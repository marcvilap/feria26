"""Prepara las creatividades de publicidad de 2026 para el sitio.

Lee la entrega del anunciante tal cual sale del WeTransfer
(`nuevo/publi-nuevo/PUBLICIDAD REVISTA FERIA 26/`, una carpeta por cliente) y deja
las piezas listas en `src/assets/images/ads/2026/` y `src/assets/videos/ads/2026/`.

Tres cosas que hace el script y conviene no perder si se repite a mano:

- **Los ficheros se localizan por glob, nunca por nombre escrito.** El zip viene de
  un Mac y guarda los acentos en NFD (`A` + tilde combinante), así que un
  `"Metro MÁLAGA 20S.mp4"` tecleado en NFC no encuentra el fichero.
- **Tres diseños llegaron en PDF** (Abasthosur, Cash Sierra Nevada y Cormosa). Son
  vectoriales y de una sola página, así que se rasterizan a 1600 px de lado.
- **Los vídeos vienen en bruto**: dos en 4K a 50-61 Mbps y 606 MB entre los ocho. Se
  limitan a 1080p por el lado largo y CRF 24; los de 50 fps bajan a 25.

Uso: `python scripts/publicidad-2026.py` (idempotente: no rehace lo ya generado).
Requiere `ffmpeg` en el PATH y, solo para los PDF, `pypdfium2` y `pillow`.
"""

import os
import shutil
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'nuevo', 'publi-nuevo', 'PUBLICIDAD REVISTA FERIA 26')
IMG_DEST = os.path.join(ROOT, 'src', 'assets', 'images', 'ads', '2026')
VID_DEST = os.path.join(ROOT, 'src', 'assets', 'videos', 'ads', '2026')

# Carpeta del cliente en la entrega -> nombre de fichero en el proyecto.
# El nombre del Excel y el de la carpeta no siempre coinciden: «LA NONNA PEPPA» llega
# en `PEPA REVUELO`, «MAEX CUEVAS QUEIPO» en `MAEX` y «CITROEM SAMA» está mal escrito.
# Ojo con los dos Rincón de la Victoria: son dos anunciantes distintos, el
# ayuntamiento y el centro comercial.
SLUGS = {
	'ABASTHOSUR': 'abasthosur',
	'ACOSOL': 'acosol',
	'ALHAURIN DE LA TORRE': 'alhaurin-de-la-torre',
	'ALUMINIOS MATA': 'aluminios-mata',
	'AQUAVELIS': 'aquavelis',
	'ARABOKA RESTAURANTE': 'araboka',
	'AUTOMOVILES RUEDA': 'automoviles-rueda',
	'AYTO ANTEQUERA': 'antequera',
	'AYTO ESTEPONA': 'estepona',
	'AYTO RINCON VICTORIA': 'rincon-de-la-victoria',
	'AYTO TORREMOLINOS': 'torremolinos',
	'AYUNTAMIENTO MALAGA': 'ayuntamiento-malaga',
	'CARPE DIEM': 'carpe-diem',
	'CASH SIERRA NEVADA': 'cash-sierra-nevada',
	'CC RINCON VICTORIA': 'cc-rincon-de-la-victoria',
	'CITROEN SAMA': 'citroen-sama',
	'CORMOSA': 'cormosa',
	'DETECPRO': 'detecpro',
	'DIPUTACION DE MALAGA': 'diputacion-malaga',
	'EADE': 'eade',
	'EIG': 'eig',
	'EMT': 'emt',
	'ER PICHI DE CAI': 'er-pichi-de-cai',
	'FAMADESA': 'famadesa',
	'HIPERMUEBLE': 'hipermueble',
	'HLA EL ANGEL': 'hla-el-angel',
	'LARIOS CENTRO': 'larios-centro',
	'MAEX': 'maex',
	'MASKOM': 'maskom',
	'METRO MALAGA': 'metro-malaga',
	'MOLINA CABALLERO': 'molina-caballero',
	'MUEBLES LA FABRICA': 'muebles-la-fabrica',
	'MUELLE UNO': 'muelle-uno',
	'NARBONA': 'narbona',
	'NISSAN SAFA': 'nissan-safa',
	'OAM PLUS': 'oam-plus',
	'OLIN': 'olin',
	'PEPA REVUELO': 'nonna-peppa',
	'REACTIVA': 'reactiva',
	'SICILIA HERMANOS': 'sicilia-hermanos',
	'SYRLUZ': 'syrluz',
	'TESESA': 'tesesa',
	'TIENDAS JUAN LUCAS': 'tiendas-juan-lucas',
	'UNICAJA BANCO': 'unicaja',
}

# El banner de Maskom no es un spot: son 5 s a 500x500 y 1 MB. Recodificarlo solo
# lo empeora, así que se copia tal cual.
COPY_VIDEO = {'maskom'}

IMAGE_EXT = ('.jpg', '.jpeg', '.png', '.gif')


def find(folder, extensions):
	names = sorted(n for n in os.listdir(folder) if n.lower().endswith(extensions))
	return os.path.join(folder, names[0]) if names else None


def build_image(source, slug):
	from PIL import Image

	extension = os.path.splitext(source)[1].lower()

	if extension == '.pdf':
		import pypdfium2 as pdfium

		page = pdfium.PdfDocument(source)[0]
		width, height = page.get_size()
		image = page.render(scale=1600 / max(width, height)).to_pil().convert('RGB')
		target = os.path.join(IMG_DEST, slug + '.png')
		image.save(target)
		return target, f'PDF rasterizado a {image.size[0]}x{image.size[1]}'

	if extension == '.gif':
		image = Image.open(source)
		# Solo el GIF de Diputación está realmente animado; el resto son estáticos y se
		# pasan a PNG porque el optimizador de Astro no trata bien el formato.
		if getattr(image, 'n_frames', 1) == 1:
			target = os.path.join(IMG_DEST, slug + '.png')
			image.convert('RGBA').save(target)
			return target, 'GIF estático convertido a PNG'

	target = os.path.join(IMG_DEST, slug + extension)
	shutil.copy2(source, target)
	return target, 'copiado'


def build_video(source, slug):
	target = os.path.join(VID_DEST, slug + '.mp4')
	if os.path.exists(target):
		return target, 'ya estaba'

	if slug in COPY_VIDEO:
		shutil.copy2(source, target)
		return target, 'copiado sin recodificar'

	rate = subprocess.run(
		['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=r_frame_rate', '-of', 'csv=p=0', source],
		capture_output=True,
		text=True,
	).stdout.strip()
	fps = ',fps=25' if rate.startswith('50/') else ''

	subprocess.run(
		# fmt: off
		[
			'ffmpeg', '-y', '-v', 'error', '-i', source,
			'-vf', 'scale=w=1920:h=1080:force_original_aspect_ratio=decrease:force_divisible_by=2' + fps,
			'-c:v', 'libx264', '-crf', '24', '-preset', 'medium', '-pix_fmt', 'yuv420p',
			'-c:a', 'aac', '-b:a', '128k', '-ac', '2', '-movflags', '+faststart',
			target,
		],
		# fmt: on
		check=True,
	)
	return target, 'recodificado'


def main():
	if not os.path.isdir(SRC):
		sys.exit(f'No encuentro la entrega en {SRC}')

	os.makedirs(IMG_DEST, exist_ok=True)
	os.makedirs(VID_DEST, exist_ok=True)

	missing = sorted(set(SLUGS) - set(os.listdir(SRC)))
	if missing:
		print('Carpetas del listado que no están en la entrega:', ', '.join(missing), '\n')

	for folder in sorted(os.listdir(SRC)):
		path = os.path.join(SRC, folder)
		if not os.path.isdir(path):
			continue
		slug = SLUGS.get(folder)
		if not slug:
			print(f'!! {folder}: sin slug asignado, se ignora')
			continue

		source = find(path, IMAGE_EXT) or find(path, ('.pdf',))
		if source:
			target, note = build_image(source, slug)
			print(f'{slug:24s} imagen  {os.path.basename(target):32s} ({note})')
		else:
			print(f'!! {folder}: sin diseño')

		video = find(path, ('.mp4', '.mov'))
		if video:
			target, note = build_video(video, slug)
			size = os.path.getsize(target) / 1048576
			print(f'{slug:24s} vídeo   {os.path.basename(target):32s} ({note}, {size:.0f} MB)')


if __name__ == '__main__':
	main()
