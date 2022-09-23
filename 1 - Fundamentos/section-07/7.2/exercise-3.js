const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};

const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

function addNightClass(obj, key, value) {
	obj[key] = value
}
// addNightClass(lesson2, 'turno', 'noite')

function listKeys(obj) {
	console.log(Object.keys(obj))
	for (const property in obj) {
		console.log(property)
	}
}
// listKeys(lesson2)

function listValues(obj) {
	console.log(Object.values(obj))
	for (const property in obj) {
		console.log(obj[property])
	}
}
// listValues(lesson2)

const allLessons = {}
const obj1 = Object.assign({}, lesson1)
allLessons.lesson1 = obj1
const obj2 = Object.assign({}, lesson2)
allLessons.lesson2 = obj2
const obj3 = Object.assign({}, lesson3)
allLessons.lesson3 = obj3
// console.log(allLessons)

const numberOfStudents = (allLessons) => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes
// console.log(numberOfStudents(allLessons))

function getValueByNumber(obj, number) {
	return Object.entries(obj)[number][0]
}

function verifyPair(obj, key, value) {
	const length = Object.entries(obj).length
	for (let i = 0; i < length; i++) {
		if (Object.entries(obj)[i][0] === key && Object.entries(obj)[i][1] === value) {
			return true
		}
	}
	return false
}


// Bonus exercise

const frequencyOfMathClass = () => {
	const length = Object.entries(allLessons).length
	let students = 0
	for (let i = 0; i < length; i++) {
		if(Object.entries(allLessons)[i][1].materia === 'Matemática') {
			students += Object.entries(allLessons)[i][1].numeroEstudantes
		}
	}
	return students
}
// console.log(frequencyOfMathClass())

// Exercício BONUS
// Retornar objeto relatório contendo Nome, Turmas e Nº de estudantes
const createReport = (lecturer) => {
	const classes = []
	let students = 0
	for (let i = 0; i < Object.entries(allLessons).length; i += 1) {
		if (Object.entries(allLessons)[i][1].professor === lecturer) {
			classes.push(Object.entries(allLessons)[i][1].materia)
			students += Object.entries(allLessons)[i][1].numeroEstudantes
		}
	}
	const report = {}
	report.professor = lecturer
	report.aulas = classes
	report.estudantes = students
	return report		
}

console.log(createReport('Maria Clara')
)
