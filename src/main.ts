const allScripts = () => {
	// TOGGLE MENU
	document.querySelectorAll('.toggle-menu').forEach(elem => {
		elem.addEventListener('click', () => {
			document.documentElement.classList.toggle('group-open-menu')
		})
	})

	// MODAL
	document.querySelectorAll<HTMLElement>('.open-in-modal').forEach(elem => {
		elem.addEventListener('click', event => {
			event.preventDefault()
			const modal = document.createElement('dialog')
			const close = document.createElement('button')
			close.innerHTML =
				'<svg fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>'
			close.className = 'absolute outline-none right-4 top-4 z-10 size-8 rounded-full bg-black/25 p-2 backdrop-blur transition-colors hover:bg-blue-600'
			modal.append(close)

			// El anuncio que acompaña al pop-up se declara una vez por página en
			// <template id="modal-ad"> (ver Layout.astro) y se clona en cada modal.
			const adTemplate = document.querySelector<HTMLTemplateElement>('template#modal-ad')
			const media = document.createElement('div')
			media.className = 'flex flex-col items-center gap-4 sm:flex-row sm:items-end'
			if (adTemplate) {
				const ad = adTemplate.content.cloneNode(true) as DocumentFragment
				// Cada pop-up es un hueco distinto: el número lo trae el elemento pulsado.
				const spot = elem.dataset.adSpot
				const label = ad.querySelector('[data-ad-number]')
				if (spot && label) label.textContent = spot.padStart(2, '0')
				media.append(ad)
			}
			modal.append(media)

			if (elem instanceof HTMLAnchorElement) {
				const { href } = elem
				// El tipo se decide por la extensión, pero sin la query: en `astro dev`
				// Vite le cuelga un `?t=…` a los ficheros que ve modificados y entonces
				// la URL ya no termina en `.mp4`, así que el modal se abría vacío.
				const path = href.split(/[?#]/)[0]
				if (/\.(mp4|webm|mov)$/i.test(path)) {
					const video = document.createElement('video')
					video.src = href
					video.controls = true
					video.autoplay = true
					media.append(video)
				}
				if (/\.(jpe?g|png|webp|avif|gif)$/i.test(path)) {
					const image = document.createElement('img')
					image.src = href
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
			modal.onclick = ({ target }) => target === modal && modal.close()
			modal.onclose = () => setTimeout(() => modal.remove(), 500)
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
