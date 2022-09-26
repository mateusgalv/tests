const books = [
	{
		id: 1,
		name: 'As Crônicas de Gelo e Fogo',
		genre: 'Fantasia',
		author: {
			name: 'George R. R. Martin',
			birthYear: 1948,
		},
		releaseYear: 1991,
	},
	{
		id: 2,
		name: 'O Senhor dos Anéis',
		genre: 'Fantasia',
		author: {
			name: 'J. R. R. Tolkien',
			birthYear: 1892,
		},
		releaseYear: 1954,
	},
	{
		id: 3,
		name: 'Fundação',
		genre: 'Ficção Científica',
		author: {
			name: 'Isaac Asimov',
			birthYear: 1920,
		},
		releaseYear: 1951,
	},
	{
		id: 4,
		name: 'Duna',
		genre: 'Ficção Científica',
		author: {
			name: 'Frank Herbert',
			birthYear: 1920,
		},
		releaseYear: 1965,
	},
	{
		id: 5,
		name: 'A Coisa',
		genre: 'Terror',
		author: {
			name: 'Stephen King',
			birthYear: 1947,
		},
		releaseYear: 1986,
	},
	{
		id: 6,
		name: 'O Chamado de Cthulhu',
		genre: 'Terror',
		author: {
			name: 'H. P. Lovecraft',
			birthYear: 1890,
		},
		releaseYear: 1928,
	},
];

const mapBooks = books.map((element, index) => `${element.name} - ${element.genre} - ${element.author.name}`)
// console.log(mapBooks)

const authorsInfo = books.map((element) => {
	return {
		author: element.author.name,
		age: element.releaseYear - element.author.birthYear,
	}
}).sort((a, b) => a.age - b.age)
// console.log(authorsInfo)

const scifiAndFantasy = books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia' ? true : false)
// console.log(scifiAndFantasy)

const oldBooksOrdered = books.filter((element) => {
	return 2022 - element.releaseYear > 60 ? true : false
}).sort((a, b) => a.releaseYear - b.releaseYear)
// console.log(oldBooksOrdered)

const scifiAndFantasyAuthors = []
books.map((element) => {
	if (element.genre === 'Ficção Científica' || element.genre === 'Fantasia') {
		scifiAndFantasyAuthors.push(element.author.name)
	}
})
scifiAndFantasyAuthors.sort()
// console.log(scifiAndFantasyAuthors)

const oldBooksArr = books.map((element) => {
	if (2022 - element.releaseYear > 60) {
		return element.name
	}
	return 0
}).filter((element) => element !== 0 ? true : false)
// console.log(oldBooksArr)

const authorWith3DotsOnName = books.find((element) => {
	if (element.author.name.split('.').length === 4) {
		return true
	}
	return false
}).name
console.log(authorWith3DotsOnName)