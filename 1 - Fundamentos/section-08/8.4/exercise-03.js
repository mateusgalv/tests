const names = [
	'Aanemarie', 'Adervandes', 'Akifusa',
	'Abegildo', 'Adicellia', 'Aladonata',
	'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
	const numberOfAs = names.reduce((acc, curr) => {
		const allLettersPerName = curr.split('')
		allLettersPerName.forEach((letter) => {
			if (letter === 'a' || letter === 'A') acc += 1
		})
		return acc
	}, 0)
	return numberOfAs
}
console.log(containsA())