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
 * **Sin `image` el hueco sigue existiendo pero se pinta como "espacio
 * disponible" con su número**, aunque `showAds` esté a `true`. Es lo que pasa
 * con los huecos que todavía no se han vendido: la web se puede publicar con la
 * publicidad cerrada sin esperar a llenarlos todos. Los huecos se construyen con
 * el ayudante `ad()` de `$utils/data-ads`, que ya devuelve esa forma.
 *
 * El listado completo está en PUBLICIDAD.md, en la raíz del repo.
 */
export interface Ad {
	spot: number
	/** Nombre del anunciante. Solo informativo, para localizarlo en el código. */
	name?: string
	image?: ImageMetadata
	url?: string
	video?: string
}
