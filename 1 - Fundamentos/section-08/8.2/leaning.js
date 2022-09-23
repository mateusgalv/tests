const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

console.log(numbers.find(findDivisibleBy3And5));

// -----------------

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

console.log(names.find(findNameWithFiveLetters));

// -----------------

const musicas = [
	{ id: '31031685', title: 'Partita in C moll BWV 997' },
	{ id: '31031686', title: 'Toccata and Fugue, BWV 565' },
	{ id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findTheMusic = (musica) => musica.id === '31031685'

console.log(musicas.find(findTheMusic).title)

// --------------

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((element) => element === name)

console.log(hasName(names2, 'Ana'));

// --------------

const people = [
	{ name: 'Mateus', age: 18 },
	{ name: 'José', age: 16 },
	{ name: 'Ana', age: 23 },
	{ name: 'Cláudia', age: 20 },
	{ name: 'Bruna', age: 19 },
];

const verifyAges = (people, minimumAge) => {
	return people.every((element) => {
		return element.age > minimumAge
	})
}
console.log(verifyAges(people, 18))

people.sort((a, b) => b.age - a.age)
console.log(people)

