const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const chocolatesPath = path.resolve(__dirname, '../files/chocolates.json');
const brandsPath = path.resolve(__dirname, '../files/brands.json');

const readChocolateFile = async () => {
	const chocolates = await fs.readFile(chocolatesPath);
	return JSON.parse(chocolates);
};
const readBrandFile = async () => {
	const brands = await fs.readFile(brandsPath);
	return JSON.parse(brands);
};

app.get('/chocolates', async (req, res) => {
	try {
		const chocolates = await readChocolateFile();
		res.status(200).json(chocolates);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.get('/chocolates/:id', async (req, res) => {
	try {
		const { id }= req.params;
		const chocolates = await readChocolateFile();
		const chocolate = chocolates.find(({ id: chocolateId }) => chocolateId === +id);
		if (!chocolate) {
			res.status(404).json({ message: 'Not Found' })
		}
		res.status(200).json(chocolate);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
	try {
		const { brandId } = req.params;
		const chocolates = await readChocolateFile();
		const chocolateByBrandId = chocolates.find(({ brandId: id }) => id === +brandId);
		if (!chocolateByBrandId) {
			res.status(404).json({ message: 'Not Found' });
		}
		res.status(200).json(chocolateByBrandId);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = app;