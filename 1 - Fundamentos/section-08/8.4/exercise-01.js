// Transformar matriz em um array
const arrays = [
	['1', '2', '3'],
	[true],
	[4, 5, 6],
];

const mergedArray = arrays.reduce((acc, array) => acc.concat(array))
console.log(mergedArray)