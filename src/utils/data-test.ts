// Sección "Test de la Feria": rostros conocidos de Málaga responden a un test sobre la feria.
// PENDIENTE: confirmar el cargo de David Larrubia, Diego Murillo y Juanfran Funes.
// Los tres primeros se grabaron en La Rosaleda y visten equipación del Málaga C.F.,
// pero solo el rótulo de Adrián Niño aparece en el fotograma capturado.
import image01 from '$assets/images/posters-video/test/adrian-nino.webp'
import image02 from '$assets/images/posters-video/test/david-larrubia.webp'
import image03 from '$assets/images/posters-video/test/diego-murillo.webp'
import image04 from '$assets/images/posters-video/test/juanfran-funes.webp'
import video01 from '$assets/videos/test/adrian-nino.mp4'
import video02 from '$assets/videos/test/david-larrubia.mp4'
import video03 from '$assets/videos/test/diego-murillo.mp4'
import video04 from '$assets/videos/test/juanfran-funes.mp4'

export default [
	{ image: image01, video: video01, name: 'Adrián Niño', description: 'JUGADOR MÁLAGA C.F.' },
	{ image: image02, video: video02, name: 'David Larrubia', description: 'MÁLAGA C.F.' },
	{ image: image03, video: video03, name: 'Diego Murillo', description: 'MÁLAGA C.F.' },
	{ image: image04, video: video04, name: 'Juanfran Funes' },
]
