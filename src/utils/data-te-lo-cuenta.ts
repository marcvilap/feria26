// Sección "Te lo cuenta COPE Málaga": reportajes de los periodistas de la emisora.
// Los nombres de los reporteros salen del rótulo en pantalla. Los títulos de las piezas
// de 2026 son provisionales, deducidos del contenido: pendientes de confirmar.
//
// Primero las cinco de 2026 y después las tres recuperadas de 2025, por indicación del
// cliente ("falta recuperar todos los vídeos del año pasado, excepto el de Mónica
// García, que no debe incluirse"). En la web de 2025 estas piezas solo llevaban el
// nombre del reportero, sin título de tema, así que se mantienen igual y se marcan con
// el año para distinguirlas: Javier Bautista aparece en las dos ediciones con dos
// reportajes distintos.
//
// PENDIENTE: faltan dos piezas nuevas de 2026 que el cliente enviará más adelante.
// Van detrás de `juan-de-dios-barba` y les tocan los huecos 94 y 95 (ver la lista
// `spots` en te-lo-cuenta.astro).
import image01 from '$assets/images/posters-video/te-lo-cuenta/flamenco.webp'
import image02 from '$assets/images/posters-video/te-lo-cuenta/emilio-fuegos.webp'
import image03 from '$assets/images/posters-video/te-lo-cuenta/javier-bautista.webp'
import image04 from '$assets/images/posters-video/te-lo-cuenta/carmen-peinados.webp'
import image05 from '$assets/images/posters-video/te-lo-cuenta/juan-de-dios-barba.webp'
import image06 from '$assets/images/posters-video/te-lo-cuenta/carmen-cerban.webp'
import image07 from '$assets/images/posters-video/te-lo-cuenta/javier-bautista-2025.webp'
import image08 from '$assets/images/posters-video/te-lo-cuenta/pedro-gonzalez.webp'
import video01 from '$assets/videos/te-lo-cuenta/flamenco.mp4'
import video02 from '$assets/videos/te-lo-cuenta/emilio-fuegos.mp4'
import video03 from '$assets/videos/te-lo-cuenta/javier-bautista.mp4'
import video04 from '$assets/videos/te-lo-cuenta/carmen-peinados.mp4'
import video05 from '$assets/videos/te-lo-cuenta/juan-de-dios-barba.mp4'
import video06 from '$assets/videos/te-lo-cuenta/carmen-cerban.mp4'
import video07 from '$assets/videos/te-lo-cuenta/javier-bautista-2025.mp4'
import video08 from '$assets/videos/te-lo-cuenta/pedro-gonzalez.mp4'

export default [
	{ image: image01, video: video01, name: 'El flamenco y la Feria de Málaga' },
	{ image: image02, video: video02, name: 'Los fuegos artificiales', description: 'EMILIO GUERRERO' },
	{ image: image03, video: video03, name: 'El transporte público', description: 'JAVIER BAUTISTA' },
	{ image: image04, video: video04, name: 'Los peinados de Feria' },
	{ image: image05, video: video05, name: 'Juan de Dios Barba', description: 'ANDRÉS G. ATIENZA' },
	{ image: image06, video: video06, name: 'Carmen Cerbán', description: 'FERIA DE MÁLAGA 2025' },
	{ image: image07, video: video07, name: 'Javier Bautista', description: 'FERIA DE MÁLAGA 2025' },
	{ image: image08, video: video08, name: 'Pedro González', description: 'FERIA DE MÁLAGA 2025' },
]
