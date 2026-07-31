// Sección "Revista de Feria" (en 2024 era "Feria y Sociedad").
// Los vídeos entregados por el cliente vienen nombrados "... FERIA 2025".
// Los cargos están tomados del rótulo que aparece en pantalla en cada vídeo.
// Las portadas las genera `npm run videos` a partir de un fotograma.
import image01 from '$assets/images/posters-video/revista/alfonso-herrero.webp'
import image02 from '$assets/images/posters-video/revista/antonio-montiel.webp'
import image03 from '$assets/images/posters-video/revista/cesar-ramirez.webp'
import image04 from '$assets/images/posters-video/revista/diana-navarro.webp'
import image05 from '$assets/images/posters-video/revista/efecto-mariposa.webp'
import image06 from '$assets/images/posters-video/revista/gonzalez-de-lara.webp'
import image07 from '$assets/images/posters-video/revista/javier-ojeda.webp'
import image08 from '$assets/images/posters-video/revista/jesus-segado.webp'
import image09 from '$assets/images/posters-video/revista/jose-antonio-trujillo.webp'
import image10 from '$assets/images/posters-video/revista/jose-luis-puche.webp'
import image11 from '$assets/images/posters-video/revista/manolo-medina.webp'
import image12 from '$assets/images/posters-video/revista/rocio-madrid.webp'
import video01 from '$assets/videos/revista/alfonso-herrero.mp4'
import video02 from '$assets/videos/revista/antonio-montiel.mp4'
import video03 from '$assets/videos/revista/cesar-ramirez.mp4'
import video04 from '$assets/videos/revista/diana-navarro.mp4'
import video05 from '$assets/videos/revista/efecto-mariposa.mp4'
import video06 from '$assets/videos/revista/gonzalez-de-lara.mp4'
import video07 from '$assets/videos/revista/javier-ojeda.mp4'
import video08 from '$assets/videos/revista/jesus-segado.mp4'
import video09 from '$assets/videos/revista/jose-antonio-trujillo.mp4'
import video10 from '$assets/videos/revista/jose-luis-puche.mp4'
import video11 from '$assets/videos/revista/manolo-medina.mp4'
import video12 from '$assets/videos/revista/rocio-madrid.mp4'

export default [
	{ image: image04, video: video04, name: 'Diana Navarro', description: 'CANTANTE Y ACTRIZ' },
	{ image: image05, video: video05, name: 'Susana y Frasco', description: 'EFECTO MARIPOSA' },
	{ image: image07, video: video07, name: 'Javier Ojeda', description: 'CANTANTE' },
	{ image: image12, video: video12, name: 'Rocío Madrid', description: 'ACTRIZ Y PRESENTADORA' },
	{ image: image11, video: video11, name: 'Manolo Medina', description: 'ACTOR Y HUMORISTA' },
	{ image: image10, video: video10, name: 'José Luis Puche', description: 'ARTISTA CONTEMPORÁNEO' },
	{ image: image02, video: video02, name: 'Antonio Montiel', description: 'PINTOR' },
	{ image: image08, video: video08, name: 'Jesús Segado', description: 'DISEÑADOR DE ALTA COSTURA' },
	{ image: image06, video: video06, name: 'Javier González de Lara', description: 'PRESIDENTE CEM' },
	{ image: image09, video: video09, name: 'José Antonio Trujillo', description: 'MÉDICO Y ESCRITOR' },
	{ image: image03, video: video03, name: 'César Ramírez', description: 'MÉDICO — CIRUJANO' },
	{ image: image01, video: video01, name: 'Alfonso Herrero', description: 'PORTERO MÁLAGA C.F.' },
]
