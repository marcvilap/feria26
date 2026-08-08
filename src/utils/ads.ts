/**
 * Un hueco publicitario del sitio.
 *
 * `spot` es el número que identifica el hueco de cara al cliente: se numeran
 * en el orden de lectura de la revista y se pintan en pantalla mientras
 * `showAds` esté a `false` (ver `$utils/config`). Así el comercial puede
 * decir "esta creatividad va en el 33".
 *
 * Los huecos con `video` abren la pieza del patrocinador en un popup al
 * hacer clic sobre la imagen; el resto son una imagen enlazada a `url`.
 *
 * El listado completo está en PUBLICIDAD.md, en la raíz del repo.
 */
export interface Ad {
	spot: number
	image: ImageMetadata
	url?: string
	video?: string
	/**
	 * Solo para `modalAd`: cuántos huecos consecutivos reserva la página, uno por
	 * cada pop-up. Cada vídeo abre su propio hueco, numerado `spot`, `spot + 1`…
	 */
	count?: number
	/**
	 * Solo para `modalAd`: huecos de pop-up uno a uno, en el orden de la parrilla.
	 * Alternativa a `count` para las secciones cuya numeración dejó de ser correlativa
	 * al congelarla (ver PUBLICIDAD.md). Se pasa a `<VideoGrid adSpot={...} />`.
	 */
	spots?: number[]
}
