# Huecos publicitarios — Feria de Málaga 2026

110 espacios repartidos por la revista. **55 están vendidos y montados**; los otros
55 se siguen pintando en pantalla con su número, así que basta con abrir la web para
localizar cualquiera de ellos y la publicación no depende de venderlos todos. Con
`showAds` a `false` en `src/utils/config.ts` se pintan así los 110 de golpe, que es
como se le enseña la maqueta al comercial.
>
> **13/08/2026 (SOL-20260813-01):** Justo Fuentes pidió reposicionar 17 anunciantes.
> Por corrección de Marc, son duplicaciones, no traslados: cada uno se queda en su
> hueco de siempre y además entra en el nuevo (marcado abajo con «· dup.»). 15
> duplicados + Citroën Sama de alta en el 92. Ayto. Antequera (85→31) se ha dejado sin
> aplicar por conflicto con CC Rincón de la Victoria (ver nota en el listado, hueco
> 31). El bloque de duplicaciones «70/año AAAA» del mismo Excel no se ha aplicado: no
> hay una zona de huecos por año en el código. Detalle en
> `proyectos\cope-malaga-web\desarrollo\CAMBIOS.md` (equipo de Marc).

El reparto de anunciantes vive en `src/utils/data-ads.ts` (una línea por hueco) y sale
del Excel `RELACION URL REVISTA DE FERIA 26.xlsx` de la entrega del 10 de agosto de 2026. Las creatividades las prepara `scripts/publicidad-2026.py`.

> **Los números están congelados.** Al reordenar las secciones a petición del
> cliente, cada hueco conserva el número que ya tenía para no mover nada de lo
> que el comercial haya podido dar por cerrado. Eso significa que **la
> numeración ya no es correlativa al recorrer la web**: se navega 01 → 23…28 →
> 31…42 → 43…51 → 52…58 → 86…89 → 73…77 → 02…22 → 59…64 → 65…70 → 81…83 →
> 78…80. El listado de abajo sigue ordenado por número, que es como se busca un
> hueco; la columna «Sección» dice en qué parte de la web cae.
>
> Los seis huecos de formato «Página completa» (29, 30, 71, 72, 84 y 85) dejaron de
> existir al eliminar, a petición del cliente, las tres páginas intersticiales que
> solo contenían publicidad. Cuatro de esos números —**29, 30, 71 y 72**— se han
> reutilizado como pop-ups de Curiosidades › Vídeos, que pasó de 6 a 10 piezas, y los
> otros dos —**84 y 85**— como pop-ups de Te lo cuenta COPE Málaga, que pasó de 5 a 8.
> Agotados los reciclados, los huecos nuevos siguen a partir del **90**.
>
> **95, 109 y 110 esperan un vídeo que el cliente aún no ha entregado**: los reportajes de
> Enrique Ortiz y Alejandro en Te lo cuenta COPE Málaga y el saludo del pregonero Juanfran
> Funes. Las tres fichas ya están publicadas y marcadas como pendientes en la propia web,
> así que el hueco se ve al abrir la sección. Se pueden vender desde ya: el anunciante
> entra en cuanto llegue la pieza, como pasó el 10 de agosto con Muelle Uno.

## Pendiente de la entrega del 10 de agosto de 2026

Lo que sigue sin poderse montar, a la espera de respuesta del comercial:

- **El hueco 62 está asignado dos veces**, a Larios Centro y a Syrluz. Se ha montado
  Larios Centro y Syrluz espera destino.
- **Tres anunciantes tienen creatividad pero no número.** En la columna «NUMERO MHOU»
  del Excel llevan una nota en vez de una cifra: EMT («VIDEO ENRIQUE»), Diputación de
  Málaga («Plaza toros») y Olin (interrogantes). Sus ficheros ya están en
  `src/assets/images/ads/2026/`: para montarlos solo hay que añadir la línea en
  `data-ads.ts`.

  Otros dos de ese grupo ya están colocados, porque llegó el vídeo al que iban pegados:
  **Muelle Uno** en el 108, con el saludo de María Barranco, y **Tiendas Juan Lucas** en
  el 94, con el reportaje de Mónica García. EMT entrará igual en cuanto llegue el vídeo
  de Enrique Ortiz. **Citroën Sama** también estaba en este grupo (nota «video funes» en
  el Excel) pero se ha montado el 13/08/2026 en el hueco **92**: ese hueco ya estaba
  activo con el vídeo de Sergio "The Shooter" en Test de la Feria, así que no dependía
  del vídeo de Funes — el hueco del Test con la pieza real de Funes es el **58**, vendido
  a Narbona Solís.

- **Tres anunciantes no han entregado nada**: Ayto. de Benalmádena, Ayto. de Benahavís y
  Tejeros.
- **Cartojal no ocupa un hueco numerado.** Lo que el Excel llamaba «MAPA FERIA» es el
  patrocinio del **fondo entero del Mapa Interactivo**: su fucsia `#E71F77`, su cenefa y
  su logotipo, como en 2025. Ya está montado, pero con el arte del año pasado —
  recuperado de la web de 2025— a la espera de que entreguen el de 2026.

## Formatos

| Formato                     | Qué se entrega                                                | Cómo se comporta                                            |
| --------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------- |
| **Solo imagen**             | 1 creatividad cuadrada (mínimo 1152×1152 px) + URL de destino | Enlaza al anunciante en una pestaña nueva                   |
| **Imagen + vídeo en popup** | 1 creatividad cuadrada + 1 vídeo MP4                          | Al hacer clic, el vídeo se abre en un popup sobre la página |

## Posiciones

- **Lateral** — columna derecha en pantallas grandes; no se ve en móvil.
- **Móvil** — barra fija inferior, de dos en dos; solo en móvil y tableta.

## Listado

| Spot | Sección                                | Posición               | Formato        | Anunciante                     |
| ---: | -------------------------------------- | ---------------------- | -------------- | ------------------------------ |
|   01 | Home                                   | Pop-up                 | Imagen + vídeo | —                              |
|   02 | Revista de Feria                       | Lateral                | Solo imagen    | Ayuntamiento de Málaga         |
|   03 | Revista de Feria                       | Móvil                  | Solo imagen    | —                              |
|   04 | Revista de Feria                       | Móvil                  | Solo imagen    | —                              |
|   05 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   06 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   07 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   08 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   09 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   10 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   11 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   12 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   13 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   14 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   15 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   16 | Revista de Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   17 | Revista de Feria › Revistas anteriores | Lateral                | Solo imagen    | —                              |
|   18 | Revista de Feria › Revistas anteriores | Lateral                | Imagen + vídeo | —                              |
|   19 | Revista de Feria › Revistas anteriores | Lateral                | Imagen + vídeo | —                              |
|   20 | Revista de Feria › Revistas anteriores | Móvil                  | Imagen + vídeo | —                              |
|   21 | Revista de Feria › Revistas anteriores | Móvil                  | Imagen + vídeo | —                              |
|   22 | Revista de Feria › Revistas anteriores | Pop-up                 | Imagen + vídeo | —                              |
|   23 | Saludos                                | Lateral                | Imagen + vídeo | Unicaja Banco ▶               |
|   24 | Saludos                                | Móvil                  | Imagen + vídeo | —                              |
|   25 | Saludos                                | Móvil                  | Solo imagen    | —                              |
|   26 | Saludos                                | Pop-up (uno por vídeo) | Solo imagen    | Tesesa                         |
|   27 | Saludos                                | Pop-up (uno por vídeo) | Solo imagen    | Automóviles Rueda              |
|   28 | Saludos                                | Pop-up (uno por vídeo) | Solo imagen    | Er Pichi de Cai                |
|   29 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   30 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo) | Imagen + vídeo | Detecpro                       |
|   31 | Curiosidades                           | Lateral                | Solo imagen    | CC Rincón de la Victoria · **conflicto**: el Excel de Justo pedía Ayto. Antequera aquí (85→31), pero Rincón de la Victoria se queda (se duplica a 93) — sin aplicar, pendiente de Marc |
|   32 | Curiosidades                           | Móvil                  | Imagen + vídeo | —                              |
|   33 | Curiosidades                           | Móvil                  | Solo imagen    | —                              |
|   34 | Curiosidades › Vídeos                  | Lateral                | Imagen + vídeo | Cash Sierra Nevada             |
|   35 | Curiosidades › Vídeos                  | Móvil                  | Imagen + vídeo | —                              |
|   36 | Curiosidades › Vídeos                  | Móvil                  | Imagen + vídeo | —                              |
|   37 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo) | Imagen + vídeo | HLA Hospital El Ángel          |
|   38 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo) | Imagen + vídeo | Molina Caballero               |
|   39 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo) | Imagen + vídeo | Da Nonna Peppa                 |
|   40 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo) | Imagen + vídeo | Maskom ▶                      |
|   41 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   42 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo) | Imagen + vídeo | Ayto. Rincón de la Victoria · dup. de 91 |
|   43 | Te lo cuenta COPE Málaga               | Lateral                | Solo imagen    | Abasthosur                     |
|   44 | Te lo cuenta COPE Málaga               | Lateral                | Imagen + vídeo | Acosol                         |
|   45 | Te lo cuenta COPE Málaga               | Móvil                  | Solo imagen    | —                              |
|   46 | Te lo cuenta COPE Málaga               | Móvil                  | Imagen + vídeo | —                              |
|   47 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo) | Imagen + vídeo | Aluminios Mata                 |
|   48 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo) | Imagen + vídeo | EIG                            |
|   49 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo) | Imagen + vídeo | Nissan Safamotor               |
|   50 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo) | Imagen + vídeo | Muebles La Fábrica ▶          |
|   51 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo) | Imagen + vídeo | OAM Plus                       |
|   52 | Test de la Feria                       | Lateral                | Imagen + vídeo | Aquavelis                      |
|   53 | Test de la Feria                       | Móvil                  | Imagen + vídeo | —                              |
|   54 | Test de la Feria                       | Móvil                  | Solo imagen    | —                              |
|   55 | Test de la Feria                       | Pop-up (uno por vídeo) | Solo imagen    | Araboka Restaurante            |
|   56 | Test de la Feria                       | Pop-up (uno por vídeo) | Solo imagen    | Ayto. de Estepona ▶           |
|   57 | Test de la Feria                       | Pop-up (uno por vídeo) | Solo imagen    | Ayto. de Torremolinos ▶       |
|   58 | Test de la Feria                       | Pop-up (uno por vídeo) | Solo imagen    | Narbona Solís                  |
|   59 | Biznaga de Plata                       | Lateral                | Solo imagen    | Famadesa ▶                    |
|   60 | Biznaga de Plata                       | Móvil                  | Imagen + vídeo | —                              |
|   61 | Biznaga de Plata                       | Móvil                  | Solo imagen    | —                              |
|   62 | Biznaga de Plata › Votaciones          | Lateral                | Imagen + vídeo | Larios Centro                  |
|   63 | Biznaga de Plata › Votaciones          | Móvil                  | Imagen + vídeo | —                              |
|   64 | Biznaga de Plata › Votaciones          | Móvil                  | Imagen + vídeo | —                              |
|   65 | Carteles de Feria                      | Lateral                | Imagen + vídeo | Sicilia Hermanos               |
|   66 | Carteles de Feria                      | Lateral                | Imagen + vídeo | Cormosa                        |
|   67 | Carteles de Feria                      | Lateral                | Solo imagen    | Metro de Málaga ▶             |
|   68 | Carteles de Feria                      | Móvil                  | Imagen + vídeo | —                              |
|   69 | Carteles de Feria                      | Móvil                  | Solo imagen    | —                              |
|   70 | Carteles de Feria                      | Pop-up                 | Solo imagen    | —                              |
|   71 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo) | Imagen + vídeo | EADE                           |
|   72 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo) | Imagen + vídeo | Ayto. Alhaurín de la Torre · dup. de 90 |
|   73 | El vino y la Feria                     | Lateral                | Solo imagen    | Bodegas Carpe Diem             |
|   74 | El vino y la Feria                     | Móvil                  | Solo imagen    | —                              |
|   75 | El vino y la Feria                     | Móvil                  | Imagen + vídeo | —                              |
|   76 | El vino y la Feria                     | Pop-up (uno por vídeo) | Imagen + vídeo | Hipermueble ▶                 |
|   77 | El vino y la Feria                     | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   78 | Mapa Interactivo                       | Lateral                | Solo imagen    | —                              |
|   79 | Mapa Interactivo                       | Móvil                  | Imagen + vídeo | —                              |
|   80 | Mapa Interactivo                       | Móvil                  | Imagen + vídeo | —                              |
|   81 | Plaza de Toros                         | Móvil                  | Solo imagen    | —                              |
|   82 | Plaza de Toros                         | Móvil                  | Solo imagen    | —                              |
|   83 | Plaza de Toros                         | Pop-up                 | Solo imagen    | —                              |
|   84 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo) | Imagen + vídeo | Maex Cuevas Queipo             |
|   85 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo) | Imagen + vídeo | Ayto. de Antequera             |
|   86 | 60 Aniversario                         | Lateral                | Imagen + vídeo | Reactiva                       |
|   87 | 60 Aniversario                         | Móvil                  | Imagen + vídeo | —                              |
|   88 | 60 Aniversario                         | Móvil                  | Solo imagen    | —                              |
|   89 | 60 Aniversario                         | Pop-up                 | Solo imagen    | —                              |
|   90 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo) | Imagen + vídeo | Ayto. de Alhaurín de la Torre  |
|   91 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Ayto. de Rincón de la Victoria |
|   92 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Citroën Sama · alta 13/08      |
|   93 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | CC Rincón de la Victoria · dup. de 31 |
|   94 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo) | Imagen + vídeo | Tiendas Juan Lucas             |
|   95 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|   96 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Cash Sierra Nevada · dup. de 34 |
|   97 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Bodegas Carpe Diem · dup. de 73 |
|   98 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Ayto. de Torremolinos ▶ · dup. de 57 |
|   99 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Er Pichi de Cai · dup. de 28   |
|  100 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Ayuntamiento de Málaga · dup. de 2 |
|  101 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Ayto. de Estepona ▶ · dup. de 56 |
|  102 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Automóviles Rueda · dup. de 27 |
|  103 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Araboka Restaurante · dup. de 55 |
|  104 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Aquavelis · dup. de 52         |
|  105 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Aluminios Mata · dup. de 47    |
|  106 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Acosol · dup. de 44            |
|  107 | Test de la Feria                       | Pop-up (uno por vídeo) | Imagen + vídeo | Abasthosur · dup. de 43        |
|  108 | Saludos                                | Pop-up (uno por vídeo) | Imagen + vídeo | Muelle Uno                     |
|  109 | Saludos                                | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |
|  110 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo) | Imagen + vídeo | —                              |

La marca ▶ indica que el anunciante entregó vídeo y su hueco lo abre en un pop-up.

## Resumen

- 110 huecos: 18 laterales, 28 en móvil y 64 dentro de pop-ups.
- 80 admiten vídeo en popup; 30 son solo imagen.
- **55 vendidos** (10 de ellos con vídeo) y 55 libres.
- La home solo lleva el hueco de su pop-up de portada, y sigue libre.

## Notas

Cada hueco es una **posición física**, no un anunciante. Un mismo patrocinador
puede ocupar varios: en ediciones anteriores la misma creatividad se repetía en
el lateral y en la barra móvil de la misma sección. Si el cliente quiere ese
comportamiento, basta con repetir el número en `data-ads.ts`.

Los huecos marcados **«uno por vídeo»** son individuales: cada pieza abre su
propio pop-up, con su propio número y **su propio anunciante**, así que se venden
por separado. El orden de la lista `modalSpots` de cada página es el mismo que el
de la parrilla de vídeos.

El formato de cada hueco no es inamovible: convertir un «solo imagen» en
«imagen + vídeo» es añadir el MP4 a su línea de `data-ads.ts`. Ya ha pasado con
cuatro anunciantes que entregaron vídeo pero cuyo hueco estaba vendido como solo
imagen (56, 57, 59 y 67).

## Cómo montar un anunciante nuevo

1. Dejar su carpeta en la entrega y añadirlo al diccionario `SLUGS` de
   `scripts/publicidad-2026.py`; ejecutarlo genera la creatividad optimizada.
2. Añadir una línea en `src/utils/data-ads.ts` con su hueco, imagen, URL y, si lo
   tiene, vídeo.

No hay que tocar las páginas: cada una pide sus huecos por número con `ad()` y
`adsFor()`, y el hueco se pinta solo según tenga anunciante o no.
