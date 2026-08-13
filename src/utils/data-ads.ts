// Publicidad vendida para la Feria de 2026, indexada por el número de hueco.
//
// Los números son los de PUBLICIDAD.md y vienen de la columna «NUMERO MHOU» del Excel
// `RELACION URL REVISTA DE FERIA 26.xlsx` que entrega el comercial: es él quien decide
// qué anunciante va en qué hueco, aquí solo se transcribe.
//
// Las creatividades las prepara `scripts/publicidad-2026.py` a partir de la entrega en
// crudo; no se tocan a mano.
//
// Un hueco que no aparezca en esta tabla sigue existiendo y se pinta como «espacio
// disponible» con su número, así que la web se puede publicar sin esperar a venderlos
// todos. Hoy hay 60 de 93 ocupados: los 59 de esta tabla más el 70, que es Carteles de
// Feria y se lleva aparte al final del fichero porque reparte 25 anunciantes. Los
// números llegan al 110, pero 17 ya no existen: los pop-ups de las dos secciones de
// revistas (05-16 y 22) y los cuatro del 60 Aniversario (86-89), retirados porque en esas
// secciones no hay publicidad (ver PUBLICIDAD.md).
//
// SOL-20260813-01 (13/08/2026): Justo Fuentes pidió reposicionar 17 anunciantes según
// `POSICIONAMIENTO A MAYORES CLIENTES REV. DIG FERIA MALAGA 26.xlsx`. Marc corrigió que
// no son traslados, sino duplicaciones: cada uno se queda en su hueco de siempre y
// ADEMÁS entra en el nuevo. Son 16 duplicaciones: Citroën Sama parecía un alta porque
// su posición actual venía como nota («video funes») en vez de número, pero ese hueco
// existe —es el 109— y también se duplica (confirmado por Marc el 13/08/2026).
// AYTO ANTEQUERA (85→31) se ha dejado sin aplicar: 31 lo sigue ocupando CC Rincón de la
// Victoria (que también se duplica, a 93), así que no había hueco libre para Antequera.
// Pendiente de que Marc diga qué hueco le da. El bloque «70/año AAAA» del mismo Excel
// SÍ está aplicado: son los 25 pop-ups de Carteles de Feria, todos el hueco 70, uno por
// año de cartel (Marc lo aclaró el 13/08/2026). Está al final del fichero.
//
// PENDIENTE (ver el correo del 10 de agosto de 2026):
//   - El 62 estaba asignado a la vez a Larios Centro y a Syrluz. Resuelto el 13/08/2026
//     a favor de Syrluz: Larios Centro ya está en Carteles de Feria, cartel de 2010.
//   - Ya no queda nadie con creatividad y sin hueco. Los tres que estaban así entraron el
//     13/08/2026: Sabor a Málaga (la Diputación) en el 29, Olin en el 78, y EMT por
//     Carteles de Feria, en el cartel de 2005. Sabor a Málaga está además en el cartel de
//     2002. EMT sigue esperando el vídeo de Enrique Ortiz, pero eso solo afecta al otro
//     hueco que le quede por asignar.
//     OJO: el Excel situaba a la Diputación en «Plaza toros», que es el hueco 83 y sigue
//     vacío. Marc dio el 29, así que el 83 queda pendiente de aclarar.
//   - Solo Tejeros sigue sin entregar material. Los ayuntamientos de Benahavís y
//     Benalmádena entregaron el 13/08/2026: van en el 41 y el 77.
//   - Cartojal no ocupa un hueco numerado: patrocina el fondo entero del Mapa Interactivo
//     («MAPA FERIA» en el Excel). Está montado con el arte de 2025 hasta que entreguen el
//     de este año (ver mapa-interactivo.astro).
import type { Ad } from '$utils/ads'
import abasthosur from '$assets/images/ads/2026/abasthosur.png'
import acosol from '$assets/images/ads/2026/acosol.jpeg'
import alhaurinDeLaTorre from '$assets/images/ads/2026/alhaurin-de-la-torre.jpg'
import aluminiosMata from '$assets/images/ads/2026/aluminios-mata.jpg'
import antequera from '$assets/images/ads/2026/antequera.png'
import aquavelis from '$assets/images/ads/2026/aquavelis.jpeg'
import araboka from '$assets/images/ads/2026/araboka.jpg'
import automovilesRueda from '$assets/images/ads/2026/automoviles-rueda.jpg'
import ayuntamientoMalaga from '$assets/images/ads/2026/ayuntamiento-malaga.jpeg'
import benahavis from '$assets/images/ads/2026/benahavis.jpg'
import benalmadena from '$assets/images/ads/2026/benalmadena.png'
import carpeDiem from '$assets/images/ads/2026/carpe-diem.jpg'
import cashSierraNevada from '$assets/images/ads/2026/cash-sierra-nevada.png'
import ccRinconDeLaVictoria from '$assets/images/ads/2026/cc-rincon-de-la-victoria.png'
import cormosa from '$assets/images/ads/2026/cormosa.png'
import detecpro from '$assets/images/ads/2026/detecpro.jpeg'
import diputacionMalaga from '$assets/images/ads/2026/diputacion-malaga.gif'
import eade from '$assets/images/ads/2026/eade.jpg'
import emt from '$assets/images/ads/2026/emt.png'
import eig from '$assets/images/ads/2026/eig.jpg'
import erPichiDeCai from '$assets/images/ads/2026/er-pichi-de-cai.png'
import estepona from '$assets/images/ads/2026/estepona.jpg'
import famadesa from '$assets/images/ads/2026/famadesa.png'
import hipermueble from '$assets/images/ads/2026/hipermueble.png'
import hlaElAngel from '$assets/images/ads/2026/hla-el-angel.png'
import lariosCentro from '$assets/images/ads/2026/larios-centro.jpg'
import maex from '$assets/images/ads/2026/maex.jpg'
import maskom from '$assets/images/ads/2026/maskom.png'
import metroMalaga from '$assets/images/ads/2026/metro-malaga.png'
import molinaCaballero from '$assets/images/ads/2026/molina-caballero.jpg'
import mueblesLaFabrica from '$assets/images/ads/2026/muebles-la-fabrica.jpg'
import muelleUno from '$assets/images/ads/2026/muelle-uno.png'
import narbona from '$assets/images/ads/2026/narbona.jpg'
import nissanSafa from '$assets/images/ads/2026/nissan-safa.jpeg'
import nonnaPeppa from '$assets/images/ads/2026/nonna-peppa.jpg'
import oamPlus from '$assets/images/ads/2026/oam-plus.png'
import olin from '$assets/images/ads/2026/olin.png'
import reactiva from '$assets/images/ads/2026/reactiva.jpg'
import rinconDeLaVictoria from '$assets/images/ads/2026/rincon-de-la-victoria.png'
import siciliaHermanos from '$assets/images/ads/2026/sicilia-hermanos.jpg'
import syrluz from '$assets/images/ads/2026/syrluz.jpg'
import tesesa from '$assets/images/ads/2026/tesesa.jpg'
import tiendasJuanLucas from '$assets/images/ads/2026/tiendas-juan-lucas.jpg'
import torremolinos from '$assets/images/ads/2026/torremolinos.jpg'
import unicaja from '$assets/images/ads/2026/unicaja.jpg'
import citroenSama from '$assets/images/ads/2026/citroen-sama.png'
import esteponaVideo from '$assets/videos/ads/2026/estepona.mp4'
import famadesaVideo from '$assets/videos/ads/2026/famadesa.mp4'
import hipermuebleVideo from '$assets/videos/ads/2026/hipermueble.mp4'
import maskomVideo from '$assets/videos/ads/2026/maskom.mp4'
import metroMalagaVideo from '$assets/videos/ads/2026/metro-malaga.mp4'
import mueblesLaFabricaVideo from '$assets/videos/ads/2026/muebles-la-fabrica.mp4'
import torremolinosVideo from '$assets/videos/ads/2026/torremolinos.mp4'
import unicajaVideo from '$assets/videos/ads/2026/unicaja.mp4'

type Advertiser = Omit<Ad, 'spot'> & { name: string; image: ImageMetadata; url: string }

// prettier-ignore
const advertisers: Record<number, Advertiser> = {
	2: { name: 'Ayuntamiento de Málaga', image: ayuntamientoMalaga, url: 'https://www.malaga.eu' },
	23: { name: 'Unicaja Banco', image: unicaja, url: 'https://www.unicajabanco.es/es/particulares?utm_source=banner&utm_medium=prensa&utm_campaign=marca_gen%C3%A9rica_ago-26', video: unicajaVideo },
	26: { name: 'Tesesa', image: tesesa, url: 'https://www.tesesa.com' },
	27: { name: 'Automóviles Rueda', image: automovilesRueda, url: 'https://www.concesionarios.seat/home/overview-dw.dealer.automoviles-rueda.html' },
	28: { name: 'Er Pichi de Cai', image: erPichiDeCai, url: 'https://erpichidecai.com' },
	// Sabor a Málaga es la marca de producto de la Diputación: es lo que dice la
	// creatividad, y por eso se rotula así y no «Diputación de Málaga». Hueco dado por
	// Marc el 13/08/2026. Sigue además en Carteles de Feria, en el cartel de 2002.
	29: { name: 'Sabor a Málaga', image: diputacionMalaga, url: 'https://saboramalaga.es' },
	30: { name: 'Detecpro', image: detecpro, url: 'https://www.detectpro.es/' },
	31: { name: 'CC Rincón de la Victoria', image: ccRinconDeLaVictoria, url: 'https://www.ccrincondelavictoria.com/en-verano-abrimos-todos-los-dias/' },
	34: { name: 'Cash Sierra Nevada', image: cashSierraNevada, url: 'https://cashsierranevada.es' },
	37: { name: 'HLA Hospital El Ángel', image: hlaElAngel, url: 'https://www.grupohla.com/hlahospitalelangel' },
	38: { name: 'Molina Caballero', image: molinaCaballero, url: 'https://molinacaballero.com/tendencias-reformas-2026-ds1/?utm_source=cope&utm_medium=cope&utm_campaign=cope-fer-26&utm_id=COPEFERIA' },
	39: { name: 'Da Nonna Peppa', image: nonnaPeppa, url: 'https://danonnapepparistorante.com' },
	40: { name: 'Maskom', image: maskom, url: 'https://www.maskom.es/folleto/', video: maskomVideo },
	// Entregado el 13/08/2026, hueco dado por Marc. La creatividad viene a 600x600, por
	// debajo del mínimo de 1152x1152 que pide el sitio para el 2x, así que se verá algo
	// blanda en pantallas de alta densidad. Si el ayuntamiento manda una mayor, se cambia.
	41: { name: 'Ayuntamiento de Benahavís', image: benahavis, url: 'https://www.benahavis.es' },
	43: { name: 'Abasthosur', image: abasthosur, url: 'https://abasthosur.es' },
	44: { name: 'Acosol', image: acosol, url: 'https://www.acosol.es' },
	47: { name: 'Aluminios Mata', image: aluminiosMata, url: 'https://www.aluminiosmata.com' },
	48: { name: 'EIG', image: eig, url: 'https://esgerencia.com/ciclos-potenciados-ia/?utm_source=cope&utm_medium=display&utm_campaign=ciclos_andalucia_Julio2026&utm_content=banner_digital' },
	49: { name: 'Nissan Safamotor', image: nissanSafa, url: 'https://nissan.safamotor.com' },
	50: { name: 'Muebles La Fábrica', image: mueblesLaFabrica, url: 'https://www.muebleslafabrica.com/tienda-muebles-malaga', video: mueblesLaFabricaVideo },
	51: { name: 'OAM Plus', image: oamPlus, url: 'https://grupooamplus.com' },
	52: { name: 'Aquavelis', image: aquavelis, url: 'https://www.aquavelis.es' },
	55: { name: 'Araboka Restaurante', image: araboka, url: 'https://www.arabokarestaurante.com' },
	56: { name: 'Ayuntamiento de Estepona', image: estepona, url: 'https://ayuntamiento.estepona.es', video: esteponaVideo },
	57: { name: 'Ayuntamiento de Torremolinos', image: torremolinos, url: 'https://torremolinos.es', video: torremolinosVideo },
	58: { name: 'Narbona Solís', image: narbona, url: 'https://narbonasolis.es' },
	59: { name: 'Famadesa', image: famadesa, url: 'https://famadesa.es', video: famadesaVideo },
	// El 62 venía asignado a la vez a Larios Centro y a Syrluz. Se resuelve a favor de
	// Syrluz (Marc, 13/08/2026): Larios Centro no se queda sin sitio, porque ya está en
	// Carteles de Feria, en el cartel de 2010.
	// La utm del enlace dice «especial-feria-huelva», que es lo que entregó el cliente.
	62: { name: 'Syrluz', image: syrluz, url: 'https://www.hyundai.es/concesionarios/syrluz-syrsa?utm_source=especial-feria-huelva&utm_medium=cope&utm_campaign=subete-tus-decisiones' },
	65: { name: 'Sicilia Hermanos', image: siciliaHermanos, url: 'http://www.siciliahermanos.es' },
	66: { name: 'Cormosa', image: cormosa, url: 'https://www.redcupra.es/cormosa/L1-cupra-terramar-hibrido-s?origin=o' },
	67: { name: 'Metro de Málaga', image: metroMalaga, url: 'https://metromalaga.es', video: metroMalagaVideo },
	71: { name: 'EADE', image: eade, url: 'https://eade.es' },
	73: { name: 'Bodegas Carpe Diem', image: carpeDiem, url: 'https://www.bodegascarpediem.com' },
	76: { name: 'Hipermueble', image: hipermueble, url: 'https://www.hiper-mueble.com', video: hipermuebleVideo },
	// Entregado el 13/08/2026, hueco dado por Marc. Llegó en PDF (una página, cuadrada) y
	// se rasterizó a 1600x1600 con el mismo método que usa `scripts/publicidad-2026.py`.
	// OJO CON EL ENLACE: ni el correo ni el Excel traían URL, así que se pone la web
	// municipal. Si el ayuntamiento quiere la de Festejos, hay que cambiarla.
	77: { name: 'Ayuntamiento de Benalmádena', image: benalmadena, url: 'https://www.benalmadena.es' },
	// Último de los que tenían creatividad sin número: en el Excel su casilla eran
	// interrogantes. Empezó en el 77 y Marc lo movió al 78 el 13/08/2026 — no es una
	// duplicación, es un traslado. Aquí es lateral y solo imagen, que es lo que tiene.
	// La creatividad viene a 481x481, muy por debajo del mínimo de 1152x1152, así que se
	// verá blanda en alta densidad: es la más pequeña de todas las montadas.
	78: { name: 'Olin', image: olin, url: 'https://olin.es/es/fibra/?utm_source=cope&utm_medium=paid_referral&utm_campaign=verano_2026&utm_content=banner' },
	84: { name: 'Maex Cuevas Queipo', image: maex, url: 'https://maexdental.com/clinicas/malaga/maex-malaga/' },
	85: { name: 'Ayuntamiento de Antequera', image: antequera, url: 'https://www.antequera.es' },
	// El 86 (lateral del 60 Aniversario) se retira el 13/08/2026: esa sección se queda sin
	// publicidad por decision del cliente. Era el único hueco vendido de los cuatro que
	// tenía. Reactiva sigue en la web por Carteles de Feria, en el cartel de 2022.
	90: { name: 'Ayuntamiento de Alhaurín de la Torre', image: alhaurinDeLaTorre, url: 'https://www.alhaurindelatorre.es' },
	91: { name: 'Ayuntamiento de Rincón de la Victoria', image: rinconDeLaVictoria, url: 'https://www.rincondelavictoria.es' },
	// Tampoco traía número, sino la nota «VIDEO MONICA»: va pegado al reportaje de Mónica
	// García, que se publicó el 10 de agosto y estrenó el hueco 94.
	94: { name: 'Tiendas Juan Lucas', image: tiendasJuanLucas, url: 'https://juanlucas.com' },
	// En el Excel no traía número, sino la nota «video maria barranco»: va pegado al saludo
	// de la abanderada, que se publicó el 10 de agosto y estrenó el hueco 108.
	108: { name: 'Muelle Uno', image: muelleUno, url: 'https://www.muelleuno.com' },

	// SOL-20260813-01 (13/08/2026): reposicionamiento pedido por Justo Fuentes en
	// `POSICIONAMIENTO A MAYORES CLIENTES REV. DIG FERIA MALAGA 26.xlsx`. Por
	// corrección expresa de Marc («los anuncios que están no se modifican, solo
	// se duplican»), estos NO son traslados: cada anunciante sigue en su hueco de
	// arriba (columna NUMERO MHOU) Y ADEMÁS se da de alta aquí, en su hueco nuevo
	// (columna NUEVO NUMERO), con la misma creatividad.
	107: { name: 'Abasthosur', image: abasthosur, url: 'https://abasthosur.es' },
	106: { name: 'Acosol', image: acosol, url: 'https://www.acosol.es' },
	105: { name: 'Aluminios Mata', image: aluminiosMata, url: 'https://www.aluminiosmata.com' },
	104: { name: 'Aquavelis', image: aquavelis, url: 'https://www.aquavelis.es' },
	103: { name: 'Araboka Restaurante', image: araboka, url: 'https://www.arabokarestaurante.com' },
	102: { name: 'Automóviles Rueda', image: automovilesRueda, url: 'https://www.concesionarios.seat/home/overview-dw.dealer.automoviles-rueda.html' },
	// AYTO ANTEQUERA (85→31) NO se ha aplicado: el hueco 31 sigue ocupado por CC
	// Rincón de la Victoria (que se queda ahí, y además se duplica a 93 más abajo).
	// El Excel de Justo daba 31 como hueco libre porque asumía que Rincón de la
	// Victoria se MOVÍA a 93 y lo dejaba vacante; con la regla de "solo duplicar"
	// eso ya no pasa, así que 31 sigue ocupado y no hay sitio para Antequera ahí.
	// Ver CAMBIOS.md y aviso a Marc. Pendiente de instrucción.
	42: { name: 'Ayuntamiento de Rincón de la Victoria', image: rinconDeLaVictoria, url: 'https://www.rincondelavictoria.es' },
	72: { name: 'Ayuntamiento de Alhaurín de la Torre', image: alhaurinDeLaTorre, url: 'https://www.alhaurindelatorre.es' },
	101: { name: 'Ayuntamiento de Estepona', image: estepona, url: 'https://ayuntamiento.estepona.es', video: esteponaVideo },
	100: { name: 'Ayuntamiento de Málaga', image: ayuntamientoMalaga, url: 'https://www.malaga.eu' },
	98: { name: 'Ayuntamiento de Torremolinos', image: torremolinos, url: 'https://torremolinos.es', video: torremolinosVideo },
	99: { name: 'Er Pichi de Cai', image: erPichiDeCai, url: 'https://erpichidecai.com' },
	97: { name: 'Bodegas Carpe Diem', image: carpeDiem, url: 'https://www.bodegascarpediem.com' },
	96: { name: 'Cash Sierra Nevada', image: cashSierraNevada, url: 'https://cashsierranevada.es' },
	93: { name: 'CC Rincón de la Victoria', image: ccRinconDeLaVictoria, url: 'https://www.ccrincondelavictoria.com/en-verano-abrimos-todos-los-dias/' },
	// Citroën Sama sí es una duplicación como el resto, aunque al principio se montara
	// como alta: en el Excel su posición actual no era un número sino la nota "video
	// funes", igual que Muelle Uno traía "video maria barranco" y acabó en el 108. Su
	// hueco de siempre es el pop-up del saludo del pregonero, que es el 109; el 92 es
	// el nuevo. Confirmado por Marc el 13/08/2026, ya con el vídeo de Funes entregado.
	92: { name: 'Citroën Sama', image: citroenSama, url: 'https://www.samagoaz.com' },
	109: { name: 'Citroën Sama', image: citroenSama, url: 'https://www.samagoaz.com' },
}

/** El hueco `spot` con su anunciante, o vacío si todavía no se ha vendido. */
export const ad = (spot: number): Ad => ({ spot, ...advertisers[spot] })

/** Varios huecos de una vez, en el orden en que se pasan. */
export const adsFor = (...spots: number[]): Ad[] => spots.map(ad)

// CARTELES DE FERIA — el bloque «70/año AAAA» del Excel de SOL-20260813-01.
//
// La sección entera se vende como el hueco 70: los 25 pop-ups llevan ese número y
// lo que cambia es el anunciante. Por eso en el Excel la columna NUEVO NUMERO pone
// «70/año 2000», «70/año 2001»…: el año no es otro hueco, es cuál de los 25.
//
// Son 25 carteles y 25 anunciantes, uno por año, y encajan sin sobras: 2000-2019 y
// 2022-2026, que son los años que hay en `data-posters` (2020 y 2021 no tienen
// cartel porque no hubo feria). Si se toca esa lista, hay que tocar esta.
//
// Todos menos dos conservan además su hueco de siempre, por la regla de "solo
// duplicar": misma creatividad, mismo enlace, mismo vídeo cuando lo llevan.
// Diputación de Málaga y EMT son la excepción porque no tenían ningún hueco —
// estaban en la lista de "material sin número" de la cabecera y este es el primero
// que se les da. Olin sigue sin destino: en el Excel su casilla es «????????».
const carteles: Record<string, Omit<Ad, 'spot' | 'key'>> = {
	'2000': { name: 'Cormosa', image: cormosa, url: 'https://www.redcupra.es/cormosa/L1-cupra-terramar-hibrido-s?origin=o' },
	'2001': { name: 'Detecpro', image: detecpro, url: 'https://www.detectpro.es/' },
	// El Excel da el enlace sin protocolo («saboramalaga.es»), que es la marca de
	// producto de la Diputación; se monta como https igual que el resto.
	'2002': { name: 'Sabor a Málaga', image: diputacionMalaga, url: 'https://saboramalaga.es' },
	'2003': { name: 'EADE', image: eade, url: 'https://eade.es' },
	'2004': {
		name: 'EIG',
		image: eig,
		url: 'https://esgerencia.com/ciclos-potenciados-ia/?utm_source=cope&utm_medium=display&utm_campaign=ciclos_andalucia_Julio2026&utm_content=banner_digital',
	},
	// Aquí EMT va solo con su imagen. El vídeo de Enrique Ortiz que tiene pendiente
	// es para su otro hueco, el que sigue sin número; este no lo espera.
	'2005': { name: 'EMT', image: emt, url: 'https://www.emtmalaga.es' },
	'2006': { name: 'Famadesa', image: famadesa, url: 'https://famadesa.es', video: famadesaVideo },
	'2007': { name: 'Hipermueble', image: hipermueble, url: 'https://www.hiper-mueble.com', video: hipermuebleVideo },
	'2008': { name: 'HLA Hospital El Ángel', image: hlaElAngel, url: 'https://www.grupohla.com/hlahospitalelangel' },
	'2009': { name: 'Da Nonna Peppa', image: nonnaPeppa, url: 'https://danonnapepparistorante.com' },
	'2010': { name: 'Larios Centro', image: lariosCentro, url: 'https://larioscentro.com' },
	'2011': { name: 'Maex Cuevas Queipo', image: maex, url: 'https://maexdental.com/clinicas/malaga/maex-malaga/' },
	'2012': { name: 'Maskom', image: maskom, url: 'https://www.maskom.es/folleto/', video: maskomVideo },
	'2013': { name: 'Metro de Málaga', image: metroMalaga, url: 'https://metromalaga.es', video: metroMalagaVideo },
	'2014': {
		name: 'Molina Caballero',
		image: molinaCaballero,
		url: 'https://molinacaballero.com/tendencias-reformas-2026-ds1/?utm_source=cope&utm_medium=cope&utm_campaign=cope-fer-26&utm_id=COPEFERIA',
	},
	'2015': { name: 'Muebles La Fábrica', image: mueblesLaFabrica, url: 'https://www.muebleslafabrica.com/tienda-muebles-malaga', video: mueblesLaFabricaVideo },
	'2016': { name: 'Muelle Uno', image: muelleUno, url: 'https://www.muelleuno.com' },
	'2017': { name: 'Narbona Solís', image: narbona, url: 'https://narbonasolis.es' },
	'2018': { name: 'Nissan Safamotor', image: nissanSafa, url: 'https://nissan.safamotor.com' },
	'2019': { name: 'OAM Plus', image: oamPlus, url: 'https://grupooamplus.com' },
	'2022': { name: 'Reactiva', image: reactiva, url: 'https://reactiva.es' },
	'2023': { name: 'Sicilia Hermanos', image: siciliaHermanos, url: 'http://www.siciliahermanos.es' },
	'2024': { name: 'Tesesa', image: tesesa, url: 'https://www.tesesa.com' },
	'2025': { name: 'Tiendas Juan Lucas', image: tiendasJuanLucas, url: 'https://juanlucas.com' },
	'2026': {
		name: 'Unicaja Banco',
		image: unicaja,
		url: 'https://www.unicajabanco.es/es/particulares?utm_source=banner&utm_medium=prensa&utm_campaign=marca_gen%C3%A9rica_ago-26',
		video: unicajaVideo,
	},
}

/** El anunciante del pop-up de un cartel. Todos son el hueco 70; los separa el año. */
export const adForCartel = (year: string): Ad => ({ spot: 70, key: `70-${year}`, ...carteles[year] })

/** Los 25 pop-ups de Carteles de Feria. El orden es el de `data-posters`. */
export const adsCarteles = (): Ad[] => Object.keys(carteles).map(adForCartel)
