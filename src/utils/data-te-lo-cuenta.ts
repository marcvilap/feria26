// Sección "Te lo cuenta COPE Málaga": reportajes de los periodistas de la emisora.
// Los nombres de los reporteros salen del rótulo en pantalla. Los títulos son
// provisionales, deducidos del contenido de cada pieza: pendientes de confirmar
// con el cliente (ver listado de incidencias).
import image01 from '$assets/images/posters-video/te-lo-cuenta/flamenco.webp'
import image02 from '$assets/images/posters-video/te-lo-cuenta/emilio-fuegos.webp'
import image03 from '$assets/images/posters-video/te-lo-cuenta/javier-bautista.webp'
import image04 from '$assets/images/posters-video/te-lo-cuenta/carmen-peinados.webp'
import image05 from '$assets/images/posters-video/te-lo-cuenta/juan-de-dios-barba.webp'
import video01 from '$assets/videos/te-lo-cuenta/flamenco.mp4'
import video02 from '$assets/videos/te-lo-cuenta/emilio-fuegos.mp4'
import video03 from '$assets/videos/te-lo-cuenta/javier-bautista.mp4'
import video04 from '$assets/videos/te-lo-cuenta/carmen-peinados.mp4'
import video05 from '$assets/videos/te-lo-cuenta/juan-de-dios-barba.mp4'

export default [
	{ image: image01, video: video01, name: 'El flamenco y la Feria de Málaga' },
	{ image: image02, video: video02, name: 'Los fuegos artificiales', description: 'EMILIO GUERRERO' },
	{ image: image03, video: video03, name: 'El transporte público', description: 'JAVIER BAUTISTA' },
	{ image: image04, video: video04, name: 'Los peinados de Feria' },
	{ image: image05, video: video05, name: 'Juan de Dios Barba', description: 'ANDRÉS G. ATIENZA' },
]
