/**
 * Publicidad de la edición 2026.
 *
 * A `false` TODOS los huecos se pintan como "espacio disponible" con su número,
 * que es como se le enseña la maqueta al comercial para que reparta anunciantes.
 *
 * A `true` cada hueco decide por su cuenta: los que tienen anunciante en
 * `$utils/data-ads` muestran su creatividad y **los que siguen sin vender se
 * siguen pintando como espacio disponible**. Por eso se puede publicar sin
 * esperar a llenar los 107.
 */
export const showAds = true

/**
 * Chapa de revisión con el número de hueco y el nombre del anunciante encima de cada
 * creatividad ya montada. Sirve para cotejar contra el Excel del comercial que cada
 * anuncio ha caído donde tocaba, sin ir abriendo el código.
 *
 * **Es temporal: hay que ponerlo a `false` antes de publicar.** No afecta a los huecos
 * sin vender, que llevan su número de serie (ver `AdSlot`).
 */
export const showAdNumbers = true
