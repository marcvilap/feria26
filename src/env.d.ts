/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Globales inyectadas por los scripts de terceros del <head> (GTM, gtag y Didomi).
declare global {
	interface Window {
		dataLayer: unknown[]
		didomiConfig?: Record<string, unknown>
		didomiOnReady?: unknown[]
		didomiEventListeners?: unknown[]
		Didomi?: unknown
	}
	var dataLayer: unknown[]
	function gtag(...args: unknown[]): void
}

export {}
