const getPlanet = () => {
	const mars = {
		name: 'Mars',
		distanceFromSun: {
			value: 227900000,
			measurementUnit: 'kilometers',
		},
	};
	console.log('Returned planet: ', mars);
};

// setTimeout(() => getPlanet(), 4000) // Imprime Marte depois de 4 segundos

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
	const maxTemperature = 58;
	return Math.floor(Math.random() * maxTemperature);
};
// console.log(getMarsTemperature())
const temperatureInFahrenheit = (cTemperature) =>
	console.log(`Atualmente está ${(getMarsTemperature() * 1.8) + 32}ºF em Marte`)

const greet = () =>
	console.log(`Olá! Curiosity aqui. Nesse momento são ${getMarsTemperature()}ºC em Marte`)

const handleError = () => {
	if (Math.floor(Math.random() * 100) > 60) {
		console.log(`Error getting temperature`)
		return true
	} else return false
}

const sendMarsTemperature = (callback, error) => {
	const hasError = error()
	if (!hasError) {
		callback()
	}
}

setTimeout(() => sendMarsTemperature(temperatureInFahrenheit, handleError), messageDelay())
setTimeout(() => sendMarsTemperature(greet, handleError), messageDelay())

// const myInterval = setInterval(() => sendMarsTemperature(getMarsTemperature), messageDelay())
// setTimeout(() => clearInterval(myInterval), 15000)