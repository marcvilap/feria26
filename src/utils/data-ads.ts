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
// todos. Hoy hay 55 de 110 ocupados.
//
// SOL-20260813-01 (13/08/2026): Justo Fuentes pidió reposicionar 17 anunciantes según
// `POSICIONAMIENTO A MAYORES CLIENTES REV. DIG FERIA MALAGA 26.xlsx`. Marc corrigió que
// no son traslados, sino duplicaciones: cada uno se queda en su hueco de siempre y
// ADEMÁS entra en el nuevo. 15 duplicados + 1 alta nueva (Citroën Sama, en el 92).
// AYTO ANTEQUERA (85→31) se ha dejado sin aplicar: 31 lo sigue ocupando CC Rincón de la
// Victoria (que también se duplica, a 93), así que no había hueco libre para Antequera.
// Pendiente de que Marc diga qué hueco le da. El bloque de duplicaciones «70/año AAAA»
// del mismo Excel tampoco se ha aplicado: el código no tiene una zona de huecos por año
// que encaje con esa lectura (ver CAMBIOS.md del proyecto).
//
// PENDIENTE (ver el correo del 10 de agosto de 2026):
//   - El hueco 62 se asignó a la vez a Larios Centro y a Syrluz. Se ha montado Larios
//     Centro por ser el que llegó primero en el listado; Syrluz espera destino.
//   - Tres anunciantes tienen material pero no número: EMT, Diputación de Málaga y Olin.
//     Sus creatividades ya están en `src/assets/images/ads/2026/`, solo falta añadir aquí
//     la línea con su hueco. EMT depende de un vídeo que el cliente aún no ha entregado
//     (el de Enrique Ortiz).
//   - Ayto. Benalmádena, Ayto. Benahavís y Tejeros no han entregado material.
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
import carpeDiem from '$assets/images/ads/2026/carpe-diem.jpg'
import cashSierraNevada from '$assets/images/ads/2026/cash-sierra-nevada.png'
import ccRinconDeLaVictoria from '$assets/images/ads/2026/cc-rincon-de-la-victoria.png'
import cormosa from '$assets/images/ads/2026/cormosa.png'
import detecpro from '$assets/images/ads/2026/detecpro.jpeg'
import eade from '$assets/images/ads/2026/eade.jpg'
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
import reactiva from '$assets/images/ads/2026/reactiva.jpg'
import rinconDeLaVictoria from '$assets/images/ads/2026/rincon-de-la-victoria.png'
import siciliaHermanos from '$assets/images/ads/2026/sicilia-hermanos.jpg'
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
	30: { name: 'Detecpro', image: detecpro, url: 'https://www.detectpro.es/' },
	31: { name: 'CC Rincón de la Victoria', image: ccRinconDeLaVictoria, url: 'https://www.ccrincondelavictoria.com/en-verano-abrimos-todos-los-dias/' },
	34: { name: 'Cash Sierra Nevada', image: cashSierraNevada, url: 'https://cashsierranevada.es' },
	37: { name: 'HLA Hospital El Ángel', image: hlaElAngel, url: 'https://www.grupohla.com/hlahospitalelangel' },
	38: { name: 'Molina Caballero', image: molinaCaballero, url: 'https://molinacaballero.com/tendencias-reformas-2026-ds1/?utm_source=cope&utm_medium=cope&utm_campaign=cope-fer-26&utm_id=COPEFERIA' },
	39: { name: 'Da Nonna Peppa', image: nonnaPeppa, url: 'https://danonnapepparistorante.com' },
	40: { name: 'Maskom', image: maskom, url: 'https://www.maskom.es/folleto/', video: maskomVideo },
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
	62: { name: 'Larios Centro', image: lariosCentro, url: 'https://larioscentro.com' },
	65: { name: 'Sicilia Hermanos', image: siciliaHermanos, url: 'http://www.siciliahermanos.es' },
	66: { name: 'Cormosa', image: cormosa, url: 'https://www.redcupra.es/cormosa/L1-cupra-terramar-hibrido-s?origin=o' },
	67: { name: 'Metro de Málaga', image: metroMalaga, url: 'https://metromalaga.es', video: metroMalagaVideo },
	71: { name: 'EADE', image: eade, url: 'https://eade.es' },
	73: { name: 'Bodegas Carpe Diem', image: carpeDiem, url: 'https://www.bodegascarpediem.com' },
	76: { name: 'Hipermueble', image: hipermueble, url: 'https://www.hiper-mueble.com', video: hipermuebleVideo },
	84: { name: 'Maex Cuevas Queipo', image: maex, url: 'https://maexdental.com/clinicas/malaga/maex-malaga/' },
	85: { name: 'Ayuntamiento de Antequera', image: antequera, url: 'https://www.antequera.es' },
	86: { name: 'Reactiva', image: reactiva, url: 'https://reactiva.es' },
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
	// Citroën Sama no tenía hueco asignado todavía (alta nueva, no duplicación):
	// el Excel apuntaba su posición actual con la nota "video funes" en vez de un
	// número. Va en el 92, ya activo y sin vender (pop-up de "Sergio 'The
	// Shooter'" en Test de la Feria) — no depende del vídeo de Funes.
	92: { name: 'Citroën Sama', image: citroenSama, url: 'https://www.samagoaz.com' },
}

/** El hueco `spot` con su anunciante, o vacío si todavía no se ha vendido. */
export const ad = (spot: number): Ad => ({ spot, ...advertisers[spot] })

/** Varios huecos de una vez, en el orden en que se pasan. */
export const adsFor = (...spots: number[]): Ad[] => spots.map(ad)
