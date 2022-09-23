// Nova pessoa contratada ----------------------------------------------------------------

const newEmployees = (employeeData) => {
	const employees = {
		id1: employeeData('Pedro Guerra'),
		id2: employeeData('Luiza Drumond'),
		id3: employeeData('Carla Paiva'),
	}
	return employees;
}
const employeeData = (name) => {
	return {
		nomeCompleto: name,
		email: `${name.replace(' ', '_').toLowerCase()}@trybe.com`,
	}
}
// console.log(newEmployees(employeeData))

// Sorteador de loteria ------------------------------------------------------------------

const checkResult = (number, raffleNumber) => {
	if (number === raffleNumber) return true
	return false
}

const doRaffle = (number, callback) => {
	const raffleNumber = Math.ceil(Math.random() * 5)
	return callback(number, raffleNumber) ? 'Parabéns você ganhou!' : 'Tente novamente'
}
// console.log(doRaffle(3, checkResult))

// Corretor automático de exame ----------------------------------------------------------

const checkAnswers = (rightAnswers, studentAnswers) => {
	let grade = 0
	for (let keys in studentAnswers) {
		if (studentAnswers[keys] === rightAnswers[keys]) grade += 1
		else if (studentAnswers[keys] === 'N.A') continue
		else grade -= 0.5
	}
	return grade
}

const hof = (rightAnswers, studentAnswers, callback) => {
	return callback(rightAnswers, studentAnswers)
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers))
