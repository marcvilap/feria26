// Sección "Te lo cuenta COPE Málaga": reportajes de los periodistas de la emisora.
// Los nombres de los reporteros salen del rótulo en pantalla.
//
// Primero las cinco de 2026 y después las tres recuperadas de 2025, por indicación del
// cliente. Las de 2025 llevan el año en la descripción para que se vean como lo que
// son: Javier Bautista aparece en las dos ediciones con dos reportajes distintos.
//
// Los cuatro últimos títulos los fijó el cliente el 10 de agosto de 2026; antes eran el
// nombre del protagonista o del reportero. Ojo con dos cosas de ese correo:
//   - Llamaba «Carmen Cervantes» a la reportera, pero su propio rótulo dice CARMEN
//     CERBÁN, que es lo que se usa aquí y da nombre a sus ficheros.
//   - Decía «el de Javier Bautista» sin más, y hay dos. El título nuevo es el de 2025:
//     esa pieza está grabada en el Real de Cortijo de Torres, mientras que la de 2026
//     va del transporte público y ya tenía título propio.
//
// Las tres piezas nuevas de 2026 van detrás de `juan-de-dios-barba`. Como los huecos
// reservados eran solo dos (94 y 95), la tercera estrena el 110. Al insertarlas ahí, las
// tres de 2025 conservan sus huecos 84, 85 y 90, que es lo que importa porque ya están
// vendidos (ver la lista `modalSpots` en te-lo-cuenta.astro).
//
// PENDIENTE: de esas tres solo ha llegado la de Mónica García. Las de Enrique Ortiz y
// Alejandro se publican sin vídeo, marcadas en la propia parrilla como pendientes de
// entrega, y llevan por título el nombre del reportero porque el cliente todavía no ha
// dicho de qué van. El hueco 95 no se podrá vender a EMT hasta que llegue el de Enrique:
// su creatividad está esperando justo a esa pieza.
import image01 from '$assets/images/posters-video/te-lo-cuenta/flamenco.webp'
import image02 from '$assets/images/posters-video/te-lo-cuenta/emilio-fuegos.webp'
import image03 from '$assets/images/posters-video/te-lo-cuenta/javier-bautista.webp'
import image04 from '$assets/images/posters-video/te-lo-cuenta/carmen-peinados.webp'
import image05 from '$assets/images/posters-video/te-lo-cuenta/juan-de-dios-barba.webp'
import image06 from '$assets/images/posters-video/te-lo-cuenta/carmen-cerban.webp'
import image07 from '$assets/images/posters-video/te-lo-cuenta/javier-bautista-2025.webp'
import image08 from '$assets/images/posters-video/te-lo-cuenta/pedro-gonzalez.webp'
import imageMonica from '$assets/images/posters-video/te-lo-cuenta/monica-garcia.webp'
import video01 from '$assets/videos/te-lo-cuenta/flamenco.mp4'
import video02 from '$assets/videos/te-lo-cuenta/emilio-fuegos.mp4'
import video03 from '$assets/videos/te-lo-cuenta/javier-bautista.mp4'
import video04 from '$assets/videos/te-lo-cuenta/carmen-peinados.mp4'
import video05 from '$assets/videos/te-lo-cuenta/juan-de-dios-barba.mp4'
import video06 from '$assets/videos/te-lo-cuenta/carmen-cerban.mp4'
import video07 from '$assets/videos/te-lo-cuenta/javier-bautista-2025.mp4'
import video08 from '$assets/videos/te-lo-cuenta/pedro-gonzalez.mp4'
import videoMonica from '$assets/videos/te-lo-cuenta/monica-garcia.mp4'

export default [
	{ image: image01, video: video01, name: 'El flamenco y la Feria de Málaga' },
	{ image: image02, video: video02, name: 'Los fuegos artificiales', description: 'EMILIO GUERRERO' },
	{ image: image03, video: video03, name: 'El transporte público', description: 'JAVIER BAUTISTA' },
	{ image: image04, video: video04, name: 'Los peinados de Feria' },
	{ image: image05, video: video05, name: 'Comercios históricos que viven la feria', description: 'ANDRÉS G. ATIENZA' },
	// El título sale del nombre del fichero que subió al Drive el 10 de agosto de 2026.
	{ image: imageMonica, video: videoMonica, name: 'La feria de Málaga es mucho más que fiesta', description: 'MÓNICA GARCÍA' },
	{ name: 'Enrique Ortiz' },
	{ name: 'Alejandro' },
	{ image: image06, video: video06, name: 'Tendencias de la moda flamenca', description: 'CARMEN CERBÁN · FERIA DE MÁLAGA 2025' },
	{ image: image07, video: video07, name: 'Conoce el recinto ferial: Real de Cortijo de Torres', description: 'JAVIER BAUTISTA · FERIA DE MÁLAGA 2025' },
	{ image: image08, video: video08, name: 'Romería al Santuario de la Victoria', description: 'PEDRO GONZÁLEZ · FERIA DE MÁLAGA 2025' },
]
