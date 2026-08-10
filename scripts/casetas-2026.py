"""Vuelca el listado de casetas de 2026 sobre el mapa interactivo.

El cliente entrega el contenido como un documento de Word en el Drive
(`MAPA INTERACTIVO DE CASETAS 2026/LISTADO DE CASETAS OK CORREGIDO.doc`) con un
bloque por caseta: una línea de título con el número y el nombre, y debajo la
descripción. Se exporta a texto plano desde Google Docs y se deja en
`nuevo/casetas-2026.txt`.

Cada caseta del mapa es un `<g>` de `src/components/Map.astro` con tres atributos:
`data-txt2` es el número, `data-txt1` el nombre y `data-txt4` la descripción. El
número no cambia de un año a otro —el plano del Real es el mismo—, así que sirve
de clave para cruzar el documento con el mapa y reescribir nombre y descripción.

Hay siete elementos sin número (auditorio, zona de juventud, caseta municipal
infantil…) que no salen en el listado y se dejan intactos.

Uso:
  python scripts/casetas-2026.py --check   solo informa de lo que cambiaría
  python scripts/casetas-2026.py           reescribe Map.astro
"""

import os
import re
import sys
import unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LISTADO = os.path.join(ROOT, 'nuevo', 'casetas-2026.txt')
MAPA = os.path.join(ROOT, 'src', 'components', 'Map.astro')

# Un título de bloque empieza por el número (o el rango) de caseta y sigue con el nombre.
# El rango se escribe de tres maneras: «143-144», «7 y 8» y «176 al 179».
TITULO = re.compile(r'^(\d+(?:\s*(?:al|[-–/y,])\s*\d+)*)\s+(\S.*)$')
# Los atributos van en este orden dentro del <g>. Una caseta (la 143-144) arrastra
# además un `data-txt3` que no usa nadie, así que se admite en medio y se respeta.
ATRIBUTOS = re.compile(r'(data-txt1=")([^"]*)(")(\s*\n\s*data-txt2=")([^"]*)("\s*\n(?:\s*data-txt3="[^"]*"\s*\n)?\s*data-txt4=")([^"]*)(")')


def numeros(texto):
	"""Los números que cubre un «143-144», un «7 y 8» o un «176 al 179», como conjunto."""
	encontrados = set()
	# Las casetas municipales usan «176 al 179» en vez del guion.
	texto = re.sub(r'\s+al\s+', '-', texto.replace('–', '-'))
	for parte in re.split(r'[,/y]', texto):
		parte = parte.strip()
		if '-' in parte:
			extremos = [p.strip() for p in parte.split('-')]
			if extremos[0].isdigit() and extremos[-1].isdigit():
				encontrados |= set(range(int(extremos[0]), int(extremos[-1]) + 1))
		elif parte.isdigit():
			encontrados.add(int(parte))
	return encontrados


def comparable(texto):
	"""Nombre reducido a letras y dígitos para detectar cambios reales, no de tildes."""
	plano = unicodedata.normalize('NFD', texto.lower())
	return re.sub(r'[^a-z0-9]', '', ''.join(c for c in plano if unicodedata.category(c) != 'Mn'))


def escapar(texto):
	"""El texto acaba dentro de un atributo HTML entre comillas dobles.

	Solo se toca la comilla doble. El `&` se deja literal a propósito: es válido
	mientras no forme una entidad, y si se escribe `&amp;` prettier lo deshace al
	formatear, con lo que el script nunca daría el fichero por estable.
	"""
	return texto.replace('"', '&quot;')


def leer_listado():
	"""Devuelve {número de caseta: (nombre, descripción)}."""
	with open(LISTADO, encoding='utf-8-sig') as fichero:
		lineas = [l.strip() for l in fichero if l.strip()]

	bloques = []
	for linea in lineas:
		encaje = TITULO.match(linea)
		if encaje and numeros(encaje.group(1)):
			bloques.append([encaje.group(1).strip(), encaje.group(2).strip(), []])
		elif bloques:
			bloques[-1][2].append(linea)

	por_numero = {}
	for rango, nombre, descripcion in bloques:
		for numero in numeros(rango):
			por_numero[numero] = (nombre, ' '.join(descripcion).strip())
	return bloques, por_numero


def main():
	solo_comprobar = '--check' in sys.argv
	bloques, por_numero = leer_listado()
	print(f'{len(bloques)} casetas en el listado, {len(por_numero)} números cubiertos\n')

	with open(MAPA, encoding='utf-8') as fichero:
		mapa = fichero.read()

	resumen = {'nombre': 0, 'solo_texto': 0, 'igual': 0, 'sin_numero': 0, 'sin_listado': []}
	cambios = []

	def sustituir(encaje):
		nombre_actual, numero, descripcion_actual = encaje.group(2), encaje.group(5), encaje.group(7)
		propios = sorted(numeros(numero))
		if not propios:
			resumen['sin_numero'] += 1
			return encaje.group(0)
		if propios[0] not in por_numero:
			resumen['sin_listado'].append(f'{numero} ({nombre_actual})')
			return encaje.group(0)

		nombre, descripcion = por_numero[propios[0]]
		if comparable(nombre) != comparable(nombre_actual):
			resumen['nombre'] += 1
			cambios.append((numero, nombre_actual, nombre))
		elif escapar(descripcion) != descripcion_actual:
			resumen['solo_texto'] += 1
		else:
			resumen['igual'] += 1
			return encaje.group(0)

		return (
			encaje.group(1) + escapar(nombre) + encaje.group(3) + encaje.group(4) + numero + encaje.group(6) + escapar(descripcion) + encaje.group(8)
		)

	nuevo, total = ATRIBUTOS.subn(sustituir, mapa)
	print(f'{total} casetas en el mapa')
	print(f'  cambian de nombre     : {resumen["nombre"]}')
	print(f'  solo cambia el texto  : {resumen["solo_texto"]}')
	print(f'  sin cambios           : {resumen["igual"]}')
	print(f'  sin número (se dejan) : {resumen["sin_numero"]}')
	if resumen['sin_listado']:
		print(f'  NO están en el listado: {len(resumen["sin_listado"])} -> {", ".join(resumen["sin_listado"])}')

	huerfanos = sorted(set(por_numero) - {n for m in ATRIBUTOS.finditer(mapa) for n in numeros(m.group(5))})
	if huerfanos:
		print(f'\nNúmeros del listado que no existen en el mapa: {huerfanos}')
		print('  (hay que mirarlos en PLANO RECINTO FERIAL 2026 OK.pdf)')

	if solo_comprobar:
		print('\n--check: no se ha escrito nada.')
		for numero, antes, ahora in cambios:
			print(f'  {numero:<9} {antes[:34]:<34} -> {ahora[:44]}')
		return

	with open(MAPA, 'w', encoding='utf-8', newline='') as fichero:
		fichero.write(nuevo)
	print(f'\n{MAPA} actualizado.')


if __name__ == '__main__':
	main()
