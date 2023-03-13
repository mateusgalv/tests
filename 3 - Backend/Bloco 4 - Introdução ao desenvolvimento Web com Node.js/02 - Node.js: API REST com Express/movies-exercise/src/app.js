const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

const moviesPath = path.resolve(__dirname, './movies.json')

app.use(express.json());

const readFile = async () => {
	try {
		const data = await fs.readFile(moviesPath);
		return JSON.parse(data);
	} catch (e) {
		console.error('File cannot be read:', e);
	}
};

app.get('/movies/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const movies = await readFile();
		const movie = movies.find((movie) => movie.id === +id);
		if (!movie) {
			res.status(404).json({ message: 'not found' });
		}
		res.status(200).json(movie);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.get('/movies', async (req, res) => {
	try {
		const movies = await readFile();
		if (!movies) {
			res.status(500).json({ message: 'internal server error' });
		}
		res.status(200).json(movies);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.post('/movies', async (req, res) => {
	try {
		const { movie, price } = req.body;
		const movies = await readFile();

		const newMovie = {
			id: movies.length + 1,
			movie,
			price,
		};
		const allMovies = JSON.stringify([...movies, newMovie]);
		await fs.writeFile(moviesPath, allMovies);

		res.status(201).json(JSON.stringify(newMovie));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.put('/movies/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { movie, price } = req.body;
		const movies = await readFile();

		const index = movies.findIndex((movie) => movie.id === +id);
		movies[index] = {
			id: +id,
			movie,
			price,
		};
		const editedMovies = JSON.stringify(movies);
		await fs.writeFile(moviesPath, editedMovies);

		res.status(200).json(movies[index]);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.delete('/movies/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const movies = await readFile();

		const filteredMovies = movies.filter((movie) => movie.id !== +id);
		await fs.writeFile(moviesPath, JSON.stringify(filteredMovies));

		res.status(204).end();
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.get('/movies/search', async (req, res) => {
	try {
		const { query } = req.query;
		const movies = await readFile();
		if (!query) res.status(400).json([]);
		
		const filteredMovies = movies.filter(({ movie }) => movie.includes(query));

		res.status(200).json(JSON.stringify(filteredMovies));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = app;