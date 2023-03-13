const readline = require('readline-sync');

const fibonacci = () => {
	const n = readline.questionInt('How many numbers in the fibonacci sequence do you want? ');
	if(n === 0) throw new Error('Cannot print 0 numbers');
	
	if(!Number.isInteger(n)) throw new Error('Only integer numbers are accepted');
	let fibonacciSequence = [0, 1];
	while (fibonacciSequence.length <= n - 1) {
		const lastNumber = fibonacciSequence[fibonacciSequence.length - 1];
		const secondToLastNumber = fibonacciSequence[fibonacciSequence.length - 2];
		const newNumber = lastNumber + secondToLastNumber;
		fibonacciSequence.push(newNumber);
	}
	return console.log(fibonacciSequence);
};

try {
	fibonacci();
} catch (e) {
	console.log('Error:', e.message);
}