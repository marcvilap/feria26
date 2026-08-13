// Portadas de las ediciones anteriores de la Revista de Feria.
//
// Hasta 2023 la revista era en papel, y de cada una hay PDF. A partir de 2024 pasó a ser
// digital: solo hay portada, no hay PDF que descargar. Por eso `pdf` es opcional.
//
// Los PDF pesan 2,2 GB y uno solo (2010) se va a 296 MB, así que no caben en el repo:
// `src/assets/pdfs/` está en .gitignore por el límite de 100 MB por fichero de GitHub.
// Se enlazan a los que ya publica la web de 2025, que son idénticos byte a byte a los
// locales. Si esa web se cae, hay que rehospedarlos (comprimidos cabrían de sobra).
import image2001 from '$assets/images/journals/2001.png'
import image2002 from '$assets/images/journals/2002.png'
import image2003 from '$assets/images/journals/2003.png'
import image2004 from '$assets/images/journals/2004.png'
import image2005 from '$assets/images/journals/2005.png'
import image2006 from '$assets/images/journals/2006.png'
import image2007 from '$assets/images/journals/2007.png'
import image2008 from '$assets/images/journals/2008.jpg'
import image2009 from '$assets/images/journals/2009.jpg'
import image2010 from '$assets/images/journals/2010.jpg'
import image2011 from '$assets/images/journals/2011.jpg'
import image2012 from '$assets/images/journals/2012.jpg'
import image2013 from '$assets/images/journals/2013.jpg'
import image2014 from '$assets/images/journals/2014.jpg'
import image2015 from '$assets/images/journals/2015.jpg'
import image2016 from '$assets/images/journals/2016.jpg'
import image2017 from '$assets/images/journals/2017.png'
import image2018 from '$assets/images/journals/2018.jpg'
import image2019 from '$assets/images/journals/2019.jpg'
import image2020 from '$assets/images/journals/2020.png'
import image2021 from '$assets/images/journals/2021.png'
import image2022 from '$assets/images/journals/2022.png'
import image2023 from '$assets/images/journals/2023.png'
// 2024 y 2025 no venían en el material del cliente y son las dos ediciones digitales.
// La de 2024 se recuperó de la web de 2025, que es donde se publicó. La de 2025 se ha
// compuesto a partir de esa misma web (13/08/2026, a petición de Mónica): el fondo es un
// fotograma de su vídeo de portada y el rótulo, el que la propia página pinta encima.
import image2024 from '$assets/images/journals/2024.webp'
import image2025 from '$assets/images/journals/2025.webp'

const archivo = 'https://feriademalaga.cope.es/_astro'

interface Journal {
	image: ImageMetadata
	name: string
	/** PDF de la revista impresa. Solo hasta 2023; desde 2024 la edición es digital. */
	pdf?: string
}

export default [
	{ image: image2001, name: '2001', pdf: `${archivo}/2001.C5FgnUhg.pdf` },
	{ image: image2002, name: '2002', pdf: `${archivo}/2002.B29LC3X_.pdf` },
	{ image: image2003, name: '2003', pdf: `${archivo}/2003.zeh8CE9E.pdf` },
	{ image: image2004, name: '2004', pdf: `${archivo}/2004.CvKOts6q.pdf` },
	{ image: image2005, name: '2005', pdf: `${archivo}/2005.Bp55zQpX.pdf` },
	{ image: image2006, name: '2006', pdf: `${archivo}/2006.BLah-j8H.pdf` },
	{ image: image2007, name: '2007', pdf: `${archivo}/2007.DqUpi6nl.pdf` },
	{ image: image2008, name: '2008', pdf: `${archivo}/2008.Cfqs_z6T.pdf` },
	{ image: image2009, name: '2009', pdf: `${archivo}/2009.Bi2MY49o.pdf` },
	{ image: image2010, name: '2010', pdf: `${archivo}/2010.xocgHtnE.pdf` },
	{ image: image2011, name: '2011', pdf: `${archivo}/2011.BjHfCjG4.pdf` },
	{ image: image2012, name: '2012', pdf: `${archivo}/2012.BoVxNAnl.pdf` },
	{ image: image2013, name: '2013', pdf: `${archivo}/2013.ZAOdZda_.pdf` },
	{ image: image2014, name: '2014', pdf: `${archivo}/2014.aKMud4wF.pdf` },
	{ image: image2015, name: '2015', pdf: `${archivo}/2015.dsF0VyYF.pdf` },
	{ image: image2016, name: '2016', pdf: `${archivo}/2016.DR1c6dc0.pdf` },
	{ image: image2017, name: '2017', pdf: `${archivo}/2017.CrCC_vJ_.pdf` },
	{ image: image2018, name: '2018', pdf: `${archivo}/2018.YJ0N_4em.pdf` },
	{ image: image2019, name: '2019', pdf: `${archivo}/2019.CrTRJCRg.pdf` },
	{ image: image2020, name: '2020', pdf: `${archivo}/2020.D9OU2R1e.pdf` },
	{ image: image2021, name: '2021', pdf: `${archivo}/2021.DvhFq6B3.pdf` },
	{ image: image2022, name: '2022', pdf: `${archivo}/2022.DzrpOksZ.pdf` },
	{ image: image2023, name: '2023', pdf: `${archivo}/2023.9SDV5NcM.pdf` },
	{ image: image2024, name: '2024' },
	{ image: image2025, name: '2025' },
] satisfies Journal[]
