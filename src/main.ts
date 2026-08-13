const allScripts = () => {
	// TOGGLE MENU
	document.querySelectorAll('.toggle-menu').forEach(elem => {
		elem.addEventListener('click', () => {
			document.documentElement.classList.toggle('group-open-menu')
		})
	})

	// MODAL
	// `withAd` a false abre el pop-up sin publicidad al lado: se usa cuando lo que se
	// abre ES el vídeo del anunciante, para no volver a colgarle su propio anuncio.
	const openModal = (elem: HTMLElement, withAd = true) => {
		const modal = document.createElement('dialog')
		const close = document.createElement('button')
		close.innerHTML =
			'<svg fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>'
		close.className = 'absolute outline-none right-4 top-4 z-10 size-8 rounded-full bg-black/25 p-2 backdrop-blur transition-colors hover:bg-blue-600'
		modal.append(close)

		const media = document.createElement('div')
		media.className = 'flex flex-col items-center gap-4 sm:flex-row sm:items-end'

		// Cada pop-up es un hueco distinto y puede llevar un anunciante distinto: el
		// número lo trae el elemento pulsado y con él se busca su <template> (ver
		// Layout.astro). Las secciones con un solo pop-up declaran el genérico.
		//
		// `data-ad-key` solo hace falta donde varios pop-ups comparten número: en
		// Carteles de Feria los 25 son el hueco 70 y se distinguen por el año. Sin
		// ella la clave es el propio número, que es el caso de todo lo demás.
		const spot = elem.dataset.adSpot
		const key = elem.dataset.adKey ?? spot
		const adTemplate = withAd
			? (document.querySelector<HTMLTemplateElement>(`template#modal-ad-${key}`) ?? document.querySelector<HTMLTemplateElement>('template#modal-ad'))
			: null
		if (adTemplate) {
			const ad = adTemplate.content.cloneNode(true) as DocumentFragment
			const label = ad.querySelector('[data-ad-number]')
			if (spot && label) label.textContent = spot.padStart(2, '0')
			// Los anunciantes con vídeo lo abren en otro pop-up por encima de este. Hay que
			// enganchar el listener aquí porque el clon no existía cuando se recorrió el DOM.
			ad.querySelectorAll<HTMLElement>('.open-in-modal').forEach(link =>
				link.addEventListener('click', event => {
					event.preventDefault()
					// Si no, se oye el vídeo de debajo mientras suena el del anuncio.
					modal.querySelectorAll('video').forEach(video => video.pause())
					openModal(link, false)
				}),
			)
			media.append(ad)
		}
		modal.append(media)

		if (elem instanceof HTMLAnchorElement) {
			const { href } = elem
			// De qué tipo es la pieza. No vale mirar la URL entera: en `astro dev` Vite le
			// cuelga un `?t=…` a los ficheros que ve modificados, y las imágenes que pasan
			// por `getImage()` se sirven ahí como `/_image?href=…&f=webp`, sin extensión
			// ninguna en la ruta. Ese segundo caso dejaba el pop-up VACÍO en local (en el
			// build no, porque ahí ya son `/_astro/algo.webp`), así que el formato se toma
			// del parámetro `f` si viene y, si no, de la extensión de la ruta.
			const url = new URL(href, location.href)
			const kind = url.searchParams.get('f') ?? url.pathname.split('.').pop() ?? ''
			if (/^(mp4|webm|mov)$/i.test(kind)) {
				const video = document.createElement('video')
				video.src = href
				video.controls = true
				video.autoplay = true
				media.append(video)
			}
			if (/^(jpe?g|png|webp|avif|gif)$/i.test(kind)) {
				const image = document.createElement('img')
				image.src = href
				// A tamaño natural se veían pequeñas: las revistas antiguas están escaneadas
				// a 460-600 px de ancho y el `max-height` de `main.css` no amplía, solo
				// reduce. Desde `lg` se les da todo el alto disponible. Por debajo se deja el
				// comportamiento de antes, que ahí el ancho es lo que manda.
				image.className = 'lg:h-[calc(100vh-6rem)] lg:w-auto lg:max-w-none'
				media.append(image)
			}
		}
		if (elem.dataset.txt1 && elem.dataset.txt2 && elem.dataset.txt4) {
			const txt1 = document.createElement('h2')
			const txt2 = document.createElement('p')

			const txt4 = document.createElement('p')
			txt1.innerHTML = elem.dataset.txt1
			txt2.innerHTML = elem.dataset.txt2

			txt4.innerHTML = elem.dataset.txt4
			txt1.className = 'max-w-xs bg-[#CDD4ED] pl-6 pr-24 pt-6 text-xl font-bold'
			txt2.className = 'max-w-xs bg-[#CDD4ED] pb-6 pl-6 pr-24 font-bold text-[#5D6995]'

			// El <dialog> es transparente, así que la descripción lleva su propio fondo
			txt4.className = 'max-w-xs rounded-b bg-white px-6 pb-6 pt-3'
			modal.append(txt1, txt2, txt4)
		}
		document.body.appendChild(modal)
		modal.showModal()
		close.onclick = () => modal.close()
		// Cerrar al pinchar fuera (en un <dialog> el clic del backdrop llega con
		// `target` = el propio diálogo). Ojo con la forma corta `target === modal &&
		// modal.close()`: al pinchar DENTRO devuelve `false` y un `onclick` que
		// devuelve `false` equivale a un preventDefault(), así que se cargaba el
		// enlace del anunciante del pop-up. El `if` no devuelve nada y no cancela.
		modal.onclick = ({ target }) => {
			if (target === modal) modal.close()
		}
		modal.onclose = () => setTimeout(() => modal.remove(), 500)
	}

	document.querySelectorAll<HTMLElement>('.open-in-modal').forEach(elem => {
		elem.addEventListener('click', event => {
			event.preventDefault()
			openModal(elem)
		})
	})

	//  REVEAL EFFECT
	const revealsObserver = new IntersectionObserver(entries => {
		entries.forEach(({ isIntersecting, target }) => {
			if (isIntersecting) {
				target.classList.replace('reveal', 'revealed')
				revealsObserver.unobserve(target)
			}
		})
	})

	document.querySelectorAll('.reveal').forEach(elem => revealsObserver.observe(elem))

	// TIMELINE
	const timelineImg = document.querySelector<HTMLImageElement>('img#timeline-img')
	const timelineDesc = document.querySelector<HTMLParagraphElement>('p#timeline-desc')
	document.querySelectorAll('.set-timeline').forEach(elem => {
		elem.addEventListener('click', () => {
			const article = elem.closest('article')
			const img = article?.querySelector('img')?.src
			const desc = article?.querySelector('p')?.textContent
			if (img && timelineImg) timelineImg.src = img
			if (desc && timelineDesc) timelineDesc.innerHTML = desc
		})
	})

	// BUSCADOR DE CASETAS
	const searchDialog = document.querySelector<HTMLDialogElement>('dialog#caseta-search')
	const searchInput = document.querySelector<HTMLInputElement>('input#caseta-search-input')
	const searchResults = document.querySelector<HTMLUListElement>('ul#caseta-search-results')
	const searchHint = document.querySelector<HTMLParagraphElement>('p#caseta-search-hint')

	if (searchDialog && searchInput && searchResults && searchHint) {
		// El índice sale del propio mapa: cada caseta es un <g> con data-txt1.
		const casetas = [...document.querySelectorAll<SVGGElement>('[data-txt1]')].map(elem => ({
			elem,
			name: elem.dataset.txt1?.trim() ?? '',
		}))

		const normalize = (text: string) => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

		const reveal = (caseta: (typeof casetas)[number]) => {
			searchDialog.close()
			caseta.elem.classList.add('caseta-found')
			caseta.elem.scrollIntoView({ behavior: 'smooth', block: 'center' })
			// Primero se ve el parpadeo sobre el mapa y después se abre su ficha.
			setTimeout(() => caseta.elem.dispatchEvent(new MouseEvent('click', { bubbles: true })), 1200)
			setTimeout(() => caseta.elem.classList.remove('caseta-found'), 8000)
		}

		let matches: typeof casetas = []

		const render = () => {
			const query = normalize(searchInput.value.trim())
			searchResults.replaceChildren()

			if (query.length < 3) {
				matches = []
				searchHint.textContent = `${casetas.length} casetas en el Real. Escribe al menos 3 letras.`
				return
			}

			matches = casetas.filter(caseta => normalize(caseta.name).includes(query)).slice(0, 12)
			searchHint.textContent = matches.length
				? `${matches.length} resultado${matches.length > 1 ? 's' : ''}. Pulsa uno para verlo en el mapa.`
				: 'Ninguna caseta coincide con esa búsqueda.'

			matches.forEach(caseta => {
				const item = document.createElement('li')
				const button = document.createElement('button')
				button.type = 'button'
				button.textContent = caseta.name
				button.className = 'w-full rounded px-3 py-2 text-left text-lg hover:bg-blue-100 hover:text-blue-600'
				button.addEventListener('click', () => reveal(caseta))
				item.append(button)
				searchResults.append(item)
			})
		}

		searchInput.addEventListener('input', render)
		searchInput.addEventListener('keydown', event => {
			if (event.key === 'Enter' && matches.length) {
				event.preventDefault()
				reveal(matches[0])
			}
		})

		document.querySelector('#caseta-search-open')?.addEventListener('click', () => {
			searchInput.value = ''
			render()
			searchDialog.showModal()
			searchInput.focus()
		})

		document.querySelector('#caseta-search-close')?.addEventListener('click', () => searchDialog.close())
		searchDialog.addEventListener('click', ({ target }) => target === searchDialog && searchDialog.close())
	}

	// CLOSE ADS
	const adsElem = document.querySelector('#ads-mobile')
	document.querySelectorAll('.close-ads').forEach(elem => {
		elem.addEventListener('click', () => {
			adsElem?.classList.add('transition-all', 'opacity-0', 'invisible', 'translate-y-full')
		})
	})
}

allScripts()

document.addEventListener('astro:after-swap', () => allScripts())

document.addEventListener('astro:before-preparation', event => {
	const direction = (event.sourceElement as HTMLElement)?.dataset.direction
	if (event.to.pathname === '/' || direction === 'back') {
		event.direction = 'back'
	}
})
