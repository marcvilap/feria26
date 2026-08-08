// Sección "Curiosidades de la Feria de Málaga", con el historiador Salvador Jiménez.
// Diez piezas: las tres nuevas de 2026 y las siete de 2025, tal y como pide el cliente
// en `REVISTA FERIA 2026 CURIOSIDADES.docx` ("se mantienen los siete vídeos del año
// pasado a los que se le suman estos tres nuevos"). Las nuevas van primero porque la
// introducción de la sección abre justo con esas tres preguntas, en este mismo orden.
//
// OJO con `ubicaciones`: en el material del cliente ese fichero y el de "hacía sol o
// llovía" son el mismo MP4 duplicado (mismo MD5), así que la web servía dos veces el
// vídeo de los Reyes Católicos. Sigue duplicado en la reentrega del 8 de agosto, así
// que la pieza buena se recupera del proyecto de 2025. Si vuelve a entregarse ese
// material, comprobar que no se pisa otra vez.
//
// `fechas-clave` también viene de 2025: es el séptimo del año pasado y no estaba en
// ninguna de las entregas de 2026.
import image01 from '$assets/images/posters-video/curiosidades/cartel.webp'
import image02 from '$assets/images/posters-video/curiosidades/portada-larios.webp'
import image03 from '$assets/images/posters-video/curiosidades/pregonero.webp'
import image04 from '$assets/images/posters-video/curiosidades/precursor.webp'
import image05 from '$assets/images/posters-video/curiosidades/desde-cuando.webp'
import image06 from '$assets/images/posters-video/curiosidades/ubicaciones.webp'
import image07 from '$assets/images/posters-video/curiosidades/19-de-agosto.webp'
import image08 from '$assets/images/posters-video/curiosidades/asesinada.webp'
import image09 from '$assets/images/posters-video/curiosidades/tiempo-reyes-catolicos.webp'
import image10 from '$assets/images/posters-video/curiosidades/fechas-clave.webp'
import video01 from '$assets/videos/curiosidades/cartel.mp4'
import video02 from '$assets/videos/curiosidades/portada-larios.mp4'
import video03 from '$assets/videos/curiosidades/pregonero.mp4'
import video04 from '$assets/videos/curiosidades/precursor.mp4'
import video05 from '$assets/videos/curiosidades/desde-cuando.mp4'
import video06 from '$assets/videos/curiosidades/ubicaciones.mp4'
import video07 from '$assets/videos/curiosidades/19-de-agosto.mp4'
import video08 from '$assets/videos/curiosidades/asesinada.mp4'
import video09 from '$assets/videos/curiosidades/tiempo-reyes-catolicos.mp4'
import video10 from '$assets/videos/curiosidades/fechas-clave.mp4'

export default [
	{ image: image01, video: video01, name: '¿Cómo era el primer cartel de la Feria de Málaga?' },
	{ image: image02, video: video02, name: '¿Por qué se monta una portada en la calle Larios?' },
	{ image: image03, video: video03, name: '¿Quién fue el primer pregonero de la Feria de Málaga?' },
	{ image: image04, video: video04, name: '¿Sabes quién fue el precursor de la actual Feria de Agosto?' },
	{ image: image05, video: video05, name: '¿Desde qué año se celebran los festejos de agosto en la ciudad de Málaga?' },
	{ image: image06, video: video06, name: '¿Conoces todas las ubicaciones que ha tenido la Feria de Málaga?' },
	{ image: image07, video: video07, name: '¿Por qué es festivo en Málaga el 19 de agosto?' },
	{ image: image08, video: video08, name: '¿Quién estuvo a punto de ser asesinada tras la toma de Málaga por los Reyes Católicos?' },
	{ image: image09, video: video09, name: '¿Hacía sol o llovía el día que los Reyes Católicos entraron en Málaga?' },
	{ image: image10, video: video10, name: '¿Tienes claras las dos fechas clave de la Feria de Agosto?' },
]
