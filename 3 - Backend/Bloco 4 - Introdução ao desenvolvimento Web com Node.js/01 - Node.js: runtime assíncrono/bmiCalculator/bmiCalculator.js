const readline = require('readline-sync');

const bmiCalculator = (weight, height) => {
	if (height === 0) throw new Error('Division by zero not allowed');
	
	const result = Math.round(weight / (height * height));

	return result;
};

const classification = (bmi) => {
	if (bmi < 18.5) return 'underweight';
	if (bmi < 24.9) return 'normal weight';
	if (bmi < 29.9) return 'overweight';
	return 'obesity';
}

try {
	const weight = readline.questionInt('What\'s your wheight in kilograms? ');
	const height = readline.questionFloat('What\'s your heigth in meters? ');

	const bmi = bmiCalculator(weight, height);
	console.log(`Your BMI is: ${bmi}`);
	console.log(`Your classification is: ${classification(bmi)}`);
} catch(e) {
	console.log(`Error: ${e.message}`);
};


