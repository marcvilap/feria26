/**
 * Publicidad de la edición 2026.
 *
 * A `false` TODOS los huecos se pintan como "espacio disponible" con su número,
 * que es como se le enseña la maqueta al comercial para que reparta anunciantes.
 *
 * A `true` cada hueco decide por su cuenta: los que tienen anunciante en
 * `$utils/data-ads` muestran su creatividad y los que siguen sin vender dependen
 * de `showEmptyAds`.
 */
export const showAds = true

/**
 * Los huecos sin vender se pintaban como recuadro de «espacio disponible» con su
 * número, para que el comercial los localizara abriendo la web y para poder publicar
 * sin esperar a venderlos todos.
 *
 * A `false` desaparecen del todo: el hueco no ocupa sitio ni deja el rótulo
 * «Publicidad» encima. Apagado el 14/08/2026 porque Marc dio por cerrada la venta de
 * esta edición, así que ya no hay nada que enseñar. Solo quedan sin vender los tres
 * laterales de Revistas anteriores (17-19) y el pop-up 110 de Te lo cuenta.
 *
 * Se mira junto con `showAds`: con `showAds` a `false` se sigue enseñando la maqueta
 * entera al comercial, con recuadros en todos los huecos, sin tocar esta.
 */
export const showEmptyAds = false

/**
 * Chapa de revisión con el número de hueco y el nombre del anunciante encima de cada
 * creatividad ya montada. Sirve para cotejar contra el Excel del comercial que cada
 * anuncio ha caído donde tocaba, sin ir abriendo el código.
 *
 * **Es temporal: hay que ponerlo a `false` antes de publicar.** No afecta a los huecos
 * sin vender, que llevan su número de serie (ver `AdSlot`).
 *
 * Apagado el 14/08/2026 a petición de Marc, ya con el reparto cotejado. Para volver a
 * revisar contra el Excel basta con ponerlo a `true` en local.
 */
export const showAdNumbers = false
