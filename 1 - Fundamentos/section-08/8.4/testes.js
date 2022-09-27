// Retornor ForEach

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const teste1 = array.forEach((element) => {	// forEach retorna undefined!
	return element
})
console.log('retorno forEach:', teste1)

const teste2 = array.find((element) => {	// find retorna o 1º elemento cujo resultado for true
	return element === 5					// callback espera bool
})
console.log('retorno find:', teste2)

const teste3 = array.some((element) => {	// some retorna bool - TRUE caso algum passe
	return element === 0					// callback retorna bool
})
console.log('retorno some:', teste3)

const teste4 = array.every((element) => {	// every retorna bool - TRUE caso todos passem
	return typeof element === 'true'		// callback retorna bool
})
console.log('retorno every:', teste4)

const teste5 = array.sort((a, b) => b - a)	// sort modifica o próprio array
console.log('retorno sort:', teste5, array)

const teste6 = array.filter((element) => {	// filter cria novo array sem modificar o original
	return element % 2 === 0
})
console.log('retorno filter:', teste6, array)

const teste7 = array.map((element) => {		// map cria novo array sem modificar o original
	return element % 2 === 0				// o retorno da callback é o retorno do map
})
console.log('retorno map:', teste7, array)