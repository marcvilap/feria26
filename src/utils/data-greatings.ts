// Los tres primeros repiten de la edición anterior y reutilizan sus retratos. Van en
// ese orden y no se tocan: los pop-ups de esta sección están vendidos por posición
// (26, 27 y 28), así que insertar a alguien en medio le cambiaría el anunciante a los
// tres. Las altas van siempre al final.
//
// Los retratos de 2026 salen de un fotograma del propio vídeo, recortado a 600x600 como
// los antiguos. El de Juanfran Funes sale de su pieza del Test, que sí está grabada.
//
// PENDIENTE: falta el vídeo del pregonero. Su ficha ya está publicada y se pinta como
// «vídeo pendiente» para que el cliente vea el hueco al abrir la web (ver saludos.astro).
import image01 from '$assets/images/greetings/greeting-01.webp'
import image02 from '$assets/images/greetings/greeting-02.webp'
import image03 from '$assets/images/greetings/greeting-03.webp'
import imageBarranco from '$assets/images/greetings/maria-barranco.webp'
import imageFunes from '$assets/images/greetings/juanfran-funes.webp'
import video01 from '$assets/videos/saludos/alcalde.mp4'
import video02 from '$assets/videos/saludos/teresa.mp4'
import video03 from '$assets/videos/saludos/justo.mp4'
import videoBarranco from '$assets/videos/saludos/maria-barranco.mp4'

interface Greeting {
	image: ImageMetadata
	/** Sin vídeo la ficha se publica igual, marcada como pendiente de entrega. */
	video?: string
	name: string
	description: string
}

export default [
	{ image: image03, video: video03, name: 'Justo Fuentes', description: 'Director de COPE Málaga' },
	{ image: image01, video: video01, name: 'Francisco de la Torre', description: 'Alcalde de Málaga' },
	{ image: image02, video: video02, name: 'Teresa Porras', description: 'Concejala de Fiestas' },
	// El cargo sale del rótulo de su vídeo, como en el resto del sitio.
	{ image: imageBarranco, video: videoBarranco, name: 'María Barranco', description: 'Abanderada de la Feria 2026' },
	{ image: imageFunes, name: 'Juanfran Funes', description: 'Pregonero de la Feria 2026' },
] satisfies Greeting[]
