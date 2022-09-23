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
// get author by his birth year
const findAuthorByBirthYear = (birth) => {
	const getAuthor = books.find((element) => element.author.birthYear === birth)
	return getAuthor.author.name
}
// console.log(findAuthorByBirthYear(1947))

// get book with smallest name
const GetSmallestBookName = () => {
	let number = Infinity
	let smallestBookName = ''
	books.forEach((element) => {
		if (element.name.length < number) {
			number = element.name.length
			smallestBookName = element.name
		}
		return smallestBookName
	})
}
// console.log(GetSmallestBookName())

// get book by its length
const getBookByLength = (length) => {
	books.forEach((element) => {
		if (element.name.length === length) title = element.name
	})
	return title
}
// console.log(getBookByLength(26))

// order books by release date (newer to oldest)
const orderByReleaseDate = () => books.sort((a, b) => b.releaseYear - a.releaseYear)
// console.log(orderByReleaseDate())

// return true if all authors are born in the 20th century and false if not
const isAllBoomers = () => {
	const allBoomers = books.every((element) => element.author.birthYear >= 1901 && element.author.birthYear < 2000)
	return allBoomers
}
// console.log(isAllBoomers())

// return true if any book were released in the 80s and false if none
const hasEightyReleases = () => {
	const eightyReleases = books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990)
	return eightyReleases
}
// console.log(hasEightyReleases())

// return true if no two authors have been born in the same year
const hasSameBirthYear = () => {
	let result = false
	books.forEach((element) => {
		sameAuthorName = element.author.name
		sameAuthorBirth = element.author.birthYear
		let result = books.some((element) => {
			if (element.author.name !== sameAuthorName && element.author.birthYear === sameAuthorBirth) return true
		})
	})
	return result
}
console.log(hasSameBirthYear())