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
			if (elem instanceof HTMLAnchorElement) {
				const { href } = elem
				if (href.match(/\.?(mp4|webm|mov)$/)) {
					const video = document.createElement('video')
					video.src = href
					video.controls = true
					video.autoplay = true
					modal.append(video)
				}
				if (href.match(/\.?(jpg|jpeg|png|webp|avif|gif)$/)) {
					const image = document.createElement('img')
					image.src = href
					modal.append(image)
				}
			}
			if (elem.dataset.txt1 && elem.dataset.txt2 &&  elem.dataset.txt4) {
				const txt1 = document.createElement('h2')
				const txt2 = document.createElement('p')
				
				const txt4 = document.createElement('p')
				txt1.innerHTML = elem.dataset.txt1
				txt2.innerHTML = elem.dataset.txt2
				
				txt4.innerHTML = elem.dataset.txt4
				txt1.className = 'max-w-xs bg-[#CDD4ED] pl-6 pr-24 pt-6 text-xl font-bold'
				txt2.className = 'max-w-xs bg-[#CDD4ED] pb-6 pl-6 pr-24 font-bold text-[#5D6995]'
				
				txt4.className = 'max-w-xs px-6 pb-6 pt-3'
				modal.append(txt1, txt2,  txt4)
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
