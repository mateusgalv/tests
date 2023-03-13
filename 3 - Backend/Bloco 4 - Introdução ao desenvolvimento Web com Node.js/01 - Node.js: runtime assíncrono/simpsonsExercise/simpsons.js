const fs = require('fs').promises;

const getSimpsons = async () => {
	const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
	const simpsonsObj = JSON.parse(fileContent);
	const simpsonsArr = simpsonsObj.map((simpson) => (
		`${simpson.id} - ${simpson.name}`
	));

	return {
		simpsonsObj,
		simpsonsArr,
	};
};

const readAll = async () => {
	const { simpsonsArr } = await getSimpsons();
	
	simpsonsArr.forEach((simpson) => console.log(simpson));
};

const searchSimpsonById = async (id) => {
	const { simpsonsObj: simpsons } = await getSimpsons();
	const keys = Object.keys(simpsons);

	const promise = new Promise((resolve, reject) => {
		const isValid = keys.some((key) => Number(key) === id);
		if (!isValid) reject(new Error('id not found'));

		const result = simpsons[id].name;		
		resolve(result);
	});
	return promise;
};

const removeCharacters = async (...ids) => {
	const { simpsonsObj: simpsons } = await getSimpsons();
	const newSimpsons = simpsons.filter((simpson) => !ids.includes(+simpson.id));

	await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
};

const simpsonFamily = async () => {
	const { simpsonsObj: simpsons } = await getSimpsons();
	const simpsonFamily = simpsons.reduce((acc, curr) => {
		if (curr.name.includes('Simpson')) {
			acc.push(curr);
		}
		return acc;
	}, [])
	
	await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
};

readAll(); // Reads all characters in ./simpsons.json
searchSimpsonById(30) // Searches for a character by its id
	.then(response => console.log(response))
	.catch(e => console.log(`Error: ${e.message}`));
removeCharacters(6, 10); ;; // Remove characters by id
simpsonFamily(); // Creates a json file with all the characters that are part of the Simpson family