// Biznaga de Plata 2026: candidatos a votación y palmarés histórico.
// Los candidatos salen de `BIZNAGA DE PLATA 2026.docx` (entrega del 8 de agosto). Ojo:
// el correo con las correcciones llama al pregonero «Juan Francisco Fúnez», pero tanto
// ese documento como el rótulo de su vídeo en el Test dicen «Juanfran Funes», que es lo
// que se usa aquí y en data-test.ts.
//
// El palmarés conserva el detalle de cada galardón (el motivo, el cargo), que el
// documento del cliente resume: son los mismos 29 premios en el mismo orden.
export const candidates = [
	{
		value: '1',
		name: 'AGRUPACIÓN DE COFRADÍAS',
		description:
			'Por el apoyo a la feria a través de las cofradías que abren las puertas de sus casas hermandad durante los días de fiesta, transformándose en casetas donde conviven hermanos y visitantes.',
	},
	{
		value: '2',
		name: 'ALBERTO DÍAZ DE LA QUINTANA',
		description: 'Coordinador de la Feria Mágica que desde 1995 se monta en la feria del centro con actividades para los más pequeños.',
	},
	{
		value: '3',
		name: 'JUANFRAN FUNES',
		description: 'Entrenador del Málaga C.F. y pregonero de la Feria de Málaga 2026.',
	},
]

export const palmares = [
	{ year: 2025, name: 'Asociación Cultural Zegrí' },
	{ year: 2024, name: 'Diana Navarro' },
	{ year: 2023, name: 'Metro Málaga' },
	{ year: 2022, name: 'Área de Seguridad del Ayuntamiento de Málaga' },
	{ year: 2019, name: 'Peña Flamenca Juan Breva, con motivo de su centenario' },
	{ year: 2018, name: 'Servicios Operativos del Ayuntamiento de Málaga' },
	{ year: 2017, name: 'Organizadores del Concurso de Atalaje Memorial “Juan Alda”' },
	{ year: 2016, name: 'Hotel AC Málaga Palacio, con motivo de su 50 aniversario' },
	{ year: 2015, name: 'Dani Rovira, pregonero de la Feria de Málaga' },
	{ year: 2014, name: 'Horacio Oliva Muñoz, cirujano de la plaza de toros' },
	{ year: 2013, name: 'Antonio de la Torre, pregonero de la Feria de Málaga' },
	{ year: 2012, name: 'Diario SUR, con motivo de su 75 aniversario' },
	{ year: 2011, name: 'Jeque Al Thani, por la clasificación del Málaga CF en la Champions League' },
	{ year: 2010, name: 'Manuel Alcántara' },
	{ year: 2009, name: 'Carmen Thyssen, por el anuncio del Museo Carmen Thyssen Málaga' },
	{ year: 2008, name: 'Antonio Rodríguez, creador de Espectáculos Mundo, a título póstumo' },
	{ year: 2007, name: 'Empresa Concesionaria Plaza de Toros Málaga' },
	{ year: 2006, name: 'MTV Málaga Summer, por el concierto inaugural de la feria' },
	{ year: 2005, name: 'Consejo Regulador Denominación de Origen Málaga' },
	{ year: 2004, name: 'Julio Iglesias, pregonero de la Feria de Málaga' },
	{ year: 2003, name: 'Antonio Garrido, pregonero de la Feria de Málaga' },
	{ year: 2002, name: 'Empresa Malagueña de Transportes' },
	{ year: 2001, name: 'Eugenio Chicano, autor de la portada de calle Larios' },
	{ year: 2000, name: 'Melanie Griffith' },
	{ year: 1999, name: 'Asociación Cultural y Recreativa El Portón' },
	{ year: 1998, name: 'Antonio Valero Navarrete, arquitecto del recinto ferial de Cortijo de Torres' },
	{ year: 1997, name: 'Asociación Centro Histórico de Málaga' },
	{ year: 1996, name: 'Chiquito de la Calzada, pregonero de la Feria de Málaga' },
	{ year: 1995, name: 'Limasa' },
]
