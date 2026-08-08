// Sección "Test de la Feria": rostros conocidos de Málaga responden a un test sobre la feria.
// Diecinueve piezas: primero las siete de 2026 y después las doce de 2025, que el cliente
// reenvía en la carpeta "EL TEST DEL AÑO PASADO" y pide dejar tal cual.
//
// Nombres y cargos salen del rótulo de cada vídeo, que solo aparece durante los primeros
// segundos y no siempre cae en el fotograma de portada: para leerlos hay que mirar el
// tercio inferior en torno al segundo 2. Ojo con dos que no coinciden con el nombre del
// fichero de origen: "EFECTO MARIPOSA" se rotula como Susana y Frasco, y González de Lara
// lleva nombre de pila, Javier.
//
// Juanfran Funes se escribe así, no «Juan Francisco Fúnez» como decía el correo con las
// correcciones: lo confirman su rótulo y `BIZNAGA DE PLATA 2026.docx`, donde además
// figura como pregonero de 2026 (ver data-biznaga.ts).
import image01 from '$assets/images/posters-video/test/adrian-nino.webp'
import image02 from '$assets/images/posters-video/test/david-larrubia.webp'
import image03 from '$assets/images/posters-video/test/diego-murillo.webp'
import image04 from '$assets/images/posters-video/test/juanfran-funes.webp'
import image05 from '$assets/images/posters-video/test/pedrita-parker.webp'
import image06 from '$assets/images/posters-video/test/shooter.webp'
import image07 from '$assets/images/posters-video/test/malasmadres.webp'
import image08 from '$assets/images/posters-video/test/jose-luis-puche.webp'
import image09 from '$assets/images/posters-video/test/diana-navarro.webp'
import image10 from '$assets/images/posters-video/test/efecto-mariposa.webp'
import image11 from '$assets/images/posters-video/test/alfonso-herrero.webp'
import image12 from '$assets/images/posters-video/test/cesar-ramirez.webp'
import image13 from '$assets/images/posters-video/test/jesus-segado.webp'
import image14 from '$assets/images/posters-video/test/manolo-medina.webp'
import image15 from '$assets/images/posters-video/test/antonio-montiel.webp'
import image16 from '$assets/images/posters-video/test/jose-antonio-trujillo.webp'
import image17 from '$assets/images/posters-video/test/gonzalez-de-lara.webp'
import image18 from '$assets/images/posters-video/test/javier-ojeda.webp'
import image19 from '$assets/images/posters-video/test/rocio-madrid.webp'
import video01 from '$assets/videos/test/adrian-nino.mp4'
import video02 from '$assets/videos/test/david-larrubia.mp4'
import video03 from '$assets/videos/test/diego-murillo.mp4'
import video04 from '$assets/videos/test/juanfran-funes.mp4'
import video05 from '$assets/videos/test/pedrita-parker.mp4'
import video06 from '$assets/videos/test/shooter.mp4'
import video07 from '$assets/videos/test/malasmadres.mp4'
import video08 from '$assets/videos/test/jose-luis-puche.mp4'
import video09 from '$assets/videos/test/diana-navarro.mp4'
import video10 from '$assets/videos/test/efecto-mariposa.mp4'
import video11 from '$assets/videos/test/alfonso-herrero.mp4'
import video12 from '$assets/videos/test/cesar-ramirez.mp4'
import video13 from '$assets/videos/test/jesus-segado.mp4'
import video14 from '$assets/videos/test/manolo-medina.mp4'
import video15 from '$assets/videos/test/antonio-montiel.mp4'
import video16 from '$assets/videos/test/jose-antonio-trujillo.mp4'
import video17 from '$assets/videos/test/gonzalez-de-lara.mp4'
import video18 from '$assets/videos/test/javier-ojeda.mp4'
import video19 from '$assets/videos/test/rocio-madrid.mp4'

export default [
	// 2026
	{ image: image01, video: video01, name: 'Adrián Niño', description: 'JUGADOR MÁLAGA C.F.' },
	{ image: image02, video: video02, name: 'David Larrubia', description: 'JUGADOR MÁLAGA C.F.' },
	{ image: image03, video: video03, name: 'Diego Murillo', description: 'JUGADOR MÁLAGA C.F.' },
	{ image: image04, video: video04, name: 'Juanfran Funes', description: 'ENTRENADOR MÁLAGA C.F.' },
	{ image: image05, video: video05, name: 'Estefanía Martínez', description: 'PEDRITA PARKER' },
	{ image: image06, video: video06, name: "Sergio 'The Shooter'", description: 'YOUTUBER' },
	{ image: image07, video: video07, name: 'Laura Baena', description: 'FUNDADORA DE MALASMADRES' },
	// 2025
	{ image: image08, video: video08, name: 'José Luis Puche', description: 'ARTISTA CONTEMPORÁNEO' },
	{ image: image09, video: video09, name: 'Diana Navarro', description: 'CANTANTE Y ACTRIZ' },
	{ image: image10, video: video10, name: 'Susana y Frasco', description: 'EFECTO MARIPOSA' },
	{ image: image11, video: video11, name: 'Alfonso Herrero', description: 'PORTERO MÁLAGA C.F.' },
	{ image: image12, video: video12, name: 'César Ramírez', description: 'MÉDICO CIRUJANO' },
	{ image: image13, video: video13, name: 'Jesús Segado', description: 'DISEÑADOR DE ALTA COSTURA' },
	{ image: image14, video: video14, name: 'Manolo Medina', description: 'ACTOR Y HUMORISTA' },
	{ image: image15, video: video15, name: 'Antonio Montiel', description: 'PINTOR' },
	{ image: image16, video: video16, name: 'José Antonio Trujillo', description: 'MÉDICO Y ESCRITOR' },
	{ image: image17, video: video17, name: 'Javier González de Lara', description: 'PRESIDENTE CEM' },
	{ image: image18, video: video18, name: 'Javier Ojeda', description: 'CANTANTE' },
	{ image: image19, video: video19, name: 'Rocío Madrid', description: 'ACTRIZ Y PRESENTADORA' },
]
