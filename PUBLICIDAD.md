# Huecos publicitarios — Feria de Málaga 2026

**68 espacios** repartidos por la revista. **62 están vendidos y montados** y los otros
6 se siguen pintando en pantalla con su número, así que basta con abrir la web para
localizar cualquiera de ellos y la publicación no depende de venderlos todos. Con
`showAds` a `false` en `src/utils/config.ts` se pintan así todos de golpe, que es
como se le enseña la maqueta al comercial.

> **14/08/2026 — los 28 huecos propios de móvil desaparecen.** No se vendió ninguno,
> así que en el móvil solo se veían recuadros de «espacio disponible» debajo de una
> página cuyo lateral de escritorio sí llevaba anunciante. Marc pidió unificarlo: la
> barra de móvil pasa a repetir los laterales de la misma sección, y los huecos que
> sigan sin vender no se pintan.
>
> - En la práctica no se pierde inventario vendido, solo numeración muerta.
> - **Plaza de Toros se queda sin publicidad en móvil**: es la única sección sin
>   lateral de escritorio, así que no hay nada que replicar. Si se le monta uno,
>   aparece en móvil solo.
> - **Revistas anteriores tampoco pinta barra de móvil** de momento: sus tres
>   laterales (17-19) siguen sin vender. En cuanto se venda uno, entra solo.

> **13/08/2026 — la numeración llega hasta 110, pero 14 huecos ya no existen.** Se
> retiran por decisión del cliente y se marcan abajo en vez de borrarlos, porque los
> números están congelados.
>
> - **En las revistas no hay anuncios** (Mónica): fuera los pop-ups de Revista de Feria
>   (05-16) y de Revistas anteriores (22). Ninguno estaba vendido, y los doce de la
>   galería no llegaron a pintarse nunca. Los laterales de esas dos secciones (02 y
>   17-19) **sí siguen**; sus huecos de móvil (03-04 y 20-21) cayeron después, el 14/08.
> - **En el 60 Aniversario tampoco hay anuncios en los pop-ups**: fuera el 89. El
>   lateral 86 (Reactiva) **sigue**; sus huecos de móvil 87 y 88 cayeron el 14/08.

> **13/08/2026 (SOL-20260813-01):** Justo Fuentes pidió reposicionar 17 anunciantes.
> Por corrección de Marc, son duplicaciones, no traslados: cada uno se queda en su
> hueco de siempre y además entra en el nuevo (marcado abajo con «· dup.»). 15
> duplicados + Citroën Sama de alta en el 92. Ayto. Antequera (85→31) se ha dejado sin
> aplicar por conflicto con CC Rincón de la Victoria (ver nota en el listado, hueco
> 31). El bloque «70/año AAAA» del mismo Excel **sí está aplicado**: Marc aclaró el
> 13/08 que no son huecos por año, sino que toda la sección de Carteles de Feria se
> vende como el hueco 70 y el año solo dice cuál de los 25 pop-ups es. Detalle en
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
> **Ya no queda ninguna ficha esperando vídeo.** Los dos que faltaban en Te lo cuenta COPE
> Málaga —los reportajes de Enrique Ortiz y Alejandro— llegaron el 14/08/2026. Con el de
> Enrique se desbloquea el hueco **95**, que el Excel reservaba a EMT con la nota «VIDEO
> ENRIQUE». El **110**, el del reportaje de Alejandro, sigue libre y ya se puede vender.
>
> **El 109 ya está cerrado.** El saludo del pregonero Juanfran Funes llegó el 13/08/2026 y,
> con el vídeo entregado, el hueco pasa a Citroën Sama, que es donde el Excel lo situaba
> desde el principio (ver más abajo).

## Pendiente de la entrega del 10 de agosto de 2026

Lo que sigue sin poderse montar, a la espera de respuesta del comercial:

- ~~El hueco 62 está asignado dos veces~~ **Resuelto el 13/08/2026**: el 62 es de
  **Syrluz**. Larios Centro no se queda fuera, porque ya está en Carteles de Feria, en el
  cartel de 2010. Ojo: la utm del enlace de Syrluz dice «especial-feria-huelva», que es
  lo que entregó el cliente.
- **Ya no queda nadie con creatividad y sin hueco.** Los tres que estaban así entraron
  el 13/08/2026: **Sabor a Málaga** (la Diputación) en el 29, **Olin** en el 78 y **EMT**
  por Carteles de Feria, en el cartel de 2005.

  Los demás de ese grupo ya están colocados. **Muelle Uno** (108) y **Tiendas Juan
  Lucas** (94) entraron el 10 de agosto al llegar los vídeos a los que iban pegados —el
  saludo de María Barranco y el reportaje de Mónica García—. **EMT** y **Sabor a Málaga**
  —la marca de producto de la Diputación, que es lo que rotula su creatividad— entraron
  el 13/08 por Carteles de Feria, en el hueco 70: les tocan los carteles de 2005 y 2002.
  Sabor a Málaga tiene además el hueco **29** desde ese mismo día. EMT sigue esperando el
  vídeo de Enrique Ortiz, pero eso solo afecta al hueco que le quede por asignar.

  Ojo con el 83: el Excel situaba a la Diputación en «Plaza toros», que es ese hueco, y
  sigue vacío. Marc dio el 29, así que el 83 queda pendiente de aclarar.

  **Citroën Sama** ya está resuelto: su nota «video funes» no era un "sin número", era la
  posición que ya tenía —el pop-up del saludo del pregonero, o sea el **109**—, igual que
  Muelle Uno traía «video maria barranco» y acabó en el 108. Se monta en los dos huecos,
  109 y **92**, como duplicación normal. Marc lo confirmó el 13/08/2026.

- **Solo Tejeros sigue sin entregar nada.** Los ayuntamientos de **Benahavís** (hueco
  **41**) y **Benalmádena** (hueco **77**) entregaron el 13/08/2026. La de Benahavís
  viene a 600×600, por debajo del mínimo de 1152×1152, así que se verá algo blanda en
  pantallas de alta densidad; la de Benalmádena llegó en PDF y se rasterizó a 1600×1600.

  **El enlace de Benalmádena está puesto a ojo**: ni el correo ni el Excel traían URL, así
  que apunta a la web municipal (`benalmadena.es`). Conviene confirmarlo.

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

- **Lateral** — columna derecha en pantallas grandes. En móvil se repite en la barra
  inferior, así que un lateral vendido se ve en las dos pantallas y solo se cuenta
  como un hueco.
- **Móvil** — barra fija inferior, de dos en dos. **Retirada el 14/08/2026**: ya no hay
  huecos propios de móvil, la barra muestra los laterales de la sección.

## Listado

| Spot | Sección                                | Posición                | Formato        | Anunciante                                                                                                                                                                             |
| ---: | -------------------------------------- | ----------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   01 | Home                                   | Pop-up                  | Imagen + vídeo | —                                                                                                                                                                                      |
|   02 | Revista de Feria                       | Lateral                 | Solo imagen    | Ayuntamiento de Málaga                                                                                                                                                                 |
|   03 | Revista de Feria                       | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   04 | Revista de Feria                       | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   05 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   06 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   07 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   08 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   09 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   10 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   11 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   12 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   13 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   14 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   15 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   16 | Revista de Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   17 | Revista de Feria › Revistas anteriores | Lateral                 | Solo imagen    | —                                                                                                                                                                                      |
|   18 | Revista de Feria › Revistas anteriores | Lateral                 | Imagen + vídeo | —                                                                                                                                                                                      |
|   19 | Revista de Feria › Revistas anteriores | Lateral                 | Imagen + vídeo | —                                                                                                                                                                                      |
|   20 | Revista de Feria › Revistas anteriores | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   21 | Revista de Feria › Revistas anteriores | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   22 | Revista de Feria › Revistas anteriores | Pop-up                  | Imagen + vídeo | **retirado 13/08** — en las revistas no hay anuncios                                                                                                                                   |
|   23 | Saludos                                | Lateral                 | Imagen + vídeo | Unicaja Banco ▶                                                                                                                                                                       |
|   24 | Saludos                                | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   25 | Saludos                                | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   26 | Saludos                                | Pop-up (uno por vídeo)  | Solo imagen    | Tesesa                                                                                                                                                                                 |
|   27 | Saludos                                | Pop-up (uno por vídeo)  | Solo imagen    | Automóviles Rueda                                                                                                                                                                      |
|   28 | Saludos                                | Pop-up (uno por vídeo)  | Solo imagen    | Er Pichi de Cai                                                                                                                                                                        |
|   29 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo)  | Imagen + vídeo | Sabor a Málaga (Diputación)                                                                                                                                                            |
|   30 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo)  | Imagen + vídeo | Detecpro                                                                                                                                                                               |
|   31 | Curiosidades                           | Lateral                 | Solo imagen    | CC Rincón de la Victoria · **conflicto**: el Excel de Justo pedía Ayto. Antequera aquí (85→31), pero Rincón de la Victoria se queda (se duplica a 93) — sin aplicar, pendiente de Marc |
|   32 | Curiosidades                           | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   33 | Curiosidades                           | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   34 | Curiosidades › Vídeos                  | Lateral                 | Imagen + vídeo | Cash Sierra Nevada                                                                                                                                                                     |
|   35 | Curiosidades › Vídeos                  | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   36 | Curiosidades › Vídeos                  | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   37 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo)  | Imagen + vídeo | HLA Hospital El Ángel                                                                                                                                                                  |
|   38 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo)  | Imagen + vídeo | Molina Caballero                                                                                                                                                                       |
|   39 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo)  | Imagen + vídeo | Da Nonna Peppa                                                                                                                                                                         |
|   40 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo)  | Imagen + vídeo | Maskom ▶                                                                                                                                                                              |
|   41 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo)  | Imagen + vídeo | Ayto. de Benahavís                                                                                                                                                                     |
|   42 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo)  | Imagen + vídeo | Ayto. Rincón de la Victoria · dup. de 91                                                                                                                                               |
|   43 | Te lo cuenta COPE Málaga               | Lateral                 | Solo imagen    | Abasthosur                                                                                                                                                                             |
|   44 | Te lo cuenta COPE Málaga               | Lateral                 | Imagen + vídeo | Acosol                                                                                                                                                                                 |
|   45 | Te lo cuenta COPE Málaga               | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   46 | Te lo cuenta COPE Málaga               | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   47 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo)  | Imagen + vídeo | Aluminios Mata                                                                                                                                                                         |
|   48 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo)  | Imagen + vídeo | EIG                                                                                                                                                                                    |
|   49 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo)  | Imagen + vídeo | Nissan Safamotor                                                                                                                                                                       |
|   50 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo)  | Imagen + vídeo | Muebles La Fábrica ▶                                                                                                                                                                  |
|   51 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo)  | Imagen + vídeo | OAM Plus                                                                                                                                                                               |
|   52 | Test de la Feria                       | Lateral                 | Imagen + vídeo | Aquavelis                                                                                                                                                                              |
|   53 | Test de la Feria                       | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   54 | Test de la Feria                       | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   55 | Test de la Feria                       | Pop-up (uno por vídeo)  | Solo imagen    | Araboka Restaurante                                                                                                                                                                    |
|   56 | Test de la Feria                       | Pop-up (uno por vídeo)  | Solo imagen    | Ayto. de Estepona ▶                                                                                                                                                                   |
|   57 | Test de la Feria                       | Pop-up (uno por vídeo)  | Solo imagen    | Ayto. de Torremolinos ▶                                                                                                                                                               |
|   58 | Test de la Feria                       | Pop-up (uno por vídeo)  | Solo imagen    | Narbona Solís                                                                                                                                                                          |
|   59 | Biznaga de Plata                       | Lateral                 | Solo imagen    | Famadesa ▶                                                                                                                                                                            |
|   60 | Biznaga de Plata                       | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   61 | Biznaga de Plata                       | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   62 | Biznaga de Plata › Votaciones          | Lateral                 | Imagen + vídeo | Syrluz                                                                                                                                                                                 |
|   63 | Biznaga de Plata › Votaciones          | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   64 | Biznaga de Plata › Votaciones          | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   65 | Carteles de Feria                      | Lateral                 | Imagen + vídeo | Sicilia Hermanos                                                                                                                                                                       |
|   66 | Carteles de Feria                      | Lateral                 | Imagen + vídeo | Cormosa                                                                                                                                                                                |
|   67 | Carteles de Feria                      | Lateral                 | Solo imagen    | Metro de Málaga ▶                                                                                                                                                                     |
|   68 | Carteles de Feria                      | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   69 | Carteles de Feria                      | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   70 | Carteles de Feria                      | Pop-up (uno por cartel) | Imagen + vídeo | 25 anunciantes, uno por año de cartel ▶ — ver «El hueco 70»                                                                                                                           |
|   71 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo)  | Imagen + vídeo | EADE                                                                                                                                                                                   |
|   72 | Curiosidades › Vídeos                  | Pop-up (uno por vídeo)  | Imagen + vídeo | Ayto. Alhaurín de la Torre · dup. de 90                                                                                                                                                |
|   73 | El vino y la Feria                     | Lateral                 | Solo imagen    | Bodegas Carpe Diem                                                                                                                                                                     |
|   74 | El vino y la Feria                     | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   75 | El vino y la Feria                     | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   76 | El vino y la Feria                     | Pop-up (uno por vídeo)  | Imagen + vídeo | Hipermueble ▶                                                                                                                                                                         |
|   77 | El vino y la Feria                     | Pop-up (uno por vídeo)  | Imagen + vídeo | Ayto. de Benalmádena                                                                                                                                                                   |
|   78 | Mapa Interactivo                       | Lateral                 | Solo imagen    | Olin                                                                                                                                                                                   |
|   79 | Mapa Interactivo                       | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   80 | Mapa Interactivo                       | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   81 | Plaza de Toros                         | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   82 | Plaza de Toros                         | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   83 | Plaza de Toros                         | Pop-up                  | Solo imagen    | —                                                                                                                                                                                      |
|   84 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo)  | Imagen + vídeo | Maex Cuevas Queipo                                                                                                                                                                     |
|   85 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo)  | Imagen + vídeo | Ayto. de Antequera                                                                                                                                                                     |
|   86 | 60 Aniversario                         | Lateral                 | Imagen + vídeo | Reactiva                                                                                                                                                                               |
|   87 | 60 Aniversario                         | Móvil                   | Imagen + vídeo | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   88 | 60 Aniversario                         | Móvil                   | Solo imagen    | **retirado 14/08** — en móvil van los laterales                                                                                                                                        |
|   89 | 60 Aniversario                         | Pop-up                  | Solo imagen    | **retirado 13/08** — en el 60 Aniversario no hay anuncios en los pop-ups                                                                                                               |
|   90 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo)  | Imagen + vídeo | Ayto. de Alhaurín de la Torre                                                                                                                                                          |
|   91 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Ayto. de Rincón de la Victoria                                                                                                                                                         |
|   92 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Citroën Sama · alta 13/08                                                                                                                                                              |
|   93 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | CC Rincón de la Victoria · dup. de 31                                                                                                                                                  |
|   94 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo)  | Imagen + vídeo | Tiendas Juan Lucas                                                                                                                                                                     |
|   95 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo)  | Imagen + vídeo | EMT · dup. del cartel de 2005                                                                                                                                                          |
|   96 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Cash Sierra Nevada · dup. de 34                                                                                                                                                        |
|   97 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Bodegas Carpe Diem · dup. de 73                                                                                                                                                        |
|   98 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Ayto. de Torremolinos ▶ · dup. de 57                                                                                                                                                  |
|   99 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Er Pichi de Cai · dup. de 28                                                                                                                                                           |
|  100 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Ayuntamiento de Málaga · dup. de 2                                                                                                                                                     |
|  101 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Ayto. de Estepona ▶ · dup. de 56                                                                                                                                                      |
|  102 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Automóviles Rueda · dup. de 27                                                                                                                                                         |
|  103 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Araboka Restaurante · dup. de 55                                                                                                                                                       |
|  104 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Aquavelis · dup. de 52                                                                                                                                                                 |
|  105 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Aluminios Mata · dup. de 47                                                                                                                                                            |
|  106 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Acosol · dup. de 44                                                                                                                                                                    |
|  107 | Test de la Feria                       | Pop-up (uno por vídeo)  | Imagen + vídeo | Abasthosur · dup. de 43                                                                                                                                                                |
|  108 | Saludos                                | Pop-up (uno por vídeo)  | Imagen + vídeo | Muelle Uno                                                                                                                                                                             |
|  109 | Saludos                                | Pop-up (uno por vídeo)  | Imagen + vídeo | Citroën Sama · dup. de 92                                                                                                                                                              |
|  110 | Te lo cuenta COPE Málaga               | Pop-up (uno por vídeo)  | Imagen + vídeo | —                                                                                                                                                                                      |

La marca ▶ indica que el anunciante entregó vídeo y su hueco lo abre en un pop-up.

## Resumen

- 96 huecos activos: 18 laterales, 28 en móvil y 50 dentro de pop-ups (+14 retirados).
- 68 admiten vídeo en popup; 28 son solo imagen.
- **62 vendidos** (11 de ellos con vídeo) y 34 libres. El 70 cuenta como uno, aunque
  por dentro lleve 25 anunciantes (ver «El hueco 70»).
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

### El hueco 70

Carteles de Feria es la excepción a lo anterior: sus 25 pop-ups **comparten el
número 70** y aun así llevan un anunciante distinto cada uno. Es como lo vendió el
comercial —en el Excel aparecen como «70/año 2000», «70/año 2001»…—, así que en
pantalla los 25 se pintan con el 70 y lo que los diferencia es el cartel.

Van emparejados por año, y son exactamente 25 anunciantes para 25 carteles
(2000-2019 y 2022-2026; 2020 y 2021 no tienen porque no hubo feria). La tabla vive
al final de `data-ads.ts`, separada de los huecos numerados. Si se añade o quita un
cartel en `data-posters.ts`, hay que tocar también esa tabla.

Salvo Diputación de Málaga (2002) y EMT (2005), que no tenían ningún hueco, todos
conservan además el suyo de siempre: es el mismo anunciante en dos sitios, con la
misma creatividad.

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
