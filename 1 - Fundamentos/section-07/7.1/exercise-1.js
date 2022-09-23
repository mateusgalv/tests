const testingScope = (escopo) => {	// Arrow function
	let ifScope
	let elseScope
	if (escopo === true) {
		ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
		ifScope = `${ifScope}, ótimo, fui utilizada no escopo !`;
		console.log(ifScope);
	} else {
		elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
		console.log(elseScope);
	}
	console.log(`${ifScope} o que estou fazendo aqui?`)
}
testingScope(true);

// -------------------------------------------------------------------------------------------

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = oddsAndEvens.sort((a,b) => a - b)	// array.sort() method

console.log(`Os números ${sortOddsAndEvens} se encontram ordenados de forma crescente`);
