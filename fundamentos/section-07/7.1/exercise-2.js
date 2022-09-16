// Criar função que retorne o fatorial de um número
const factorialize = (num) => {
	let result = 1
	while (num > 1) {
		sum *= num
		num--
	}
	return result
}

// Criar uma função que retorne a maior palavra contida numa frase
const largestWord = (array) => {
	const words = array.split(' ')
	let largest = ''
	for (let values of words) {
		if (values.length > largest.length) {
			largest = values
		}
	}
}

// Criar uma página com contador de cliques
const clickBtn = document.getElementById('btn')
const numberOfClicks = document.getElementById('counter')
let clicks = 0

clickBtn.addEventListener('click', () => {
	clicks++
	numberOfClicks.innerText = clicks
})

// Substitua a letra x em uma frase e retorne a nova string a partir de uma segunda função
const insertNameinX = (name) => {
	const phrase = 'Tryber x aqui!'
	let newPhrase = phrase.split(' x ')
	return `${newPhrase[0]} ${name} ${newPhrase[1]}`
}

const mySkills = (name) => {
	const getIntroduction = insertNameinX(name)
	const skills = ['HTML', 'CSS', 'JS']
	return `${getIntroduction}\nMinhas três principais habilidades são:\n${skills[0]}\n${skills[1]}\n${skills[2]}`
}