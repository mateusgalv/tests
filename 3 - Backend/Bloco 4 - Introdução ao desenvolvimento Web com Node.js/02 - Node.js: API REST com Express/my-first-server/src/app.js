const express = require('express');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const app = express();

app.use(express.json());

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.get('/teams/:id', (req, res) => {
	const { id } = req.params;
	const foundTeam = teams.find((team) => team.id === +id);

	if (!foundTeam) {
		res.status(404).json({ message: 'Not Found' });
	}

	res.status(200).json(foundTeam);
});

app.post('/teams', (req, res) => {
	const newTeam = { ...req.body };
	teams.push(newTeam);

	res.status(201).json({ team: newTeam })
});

app.put('/teams/:id', (req, res) => {
	const { id } = req.params;
	const { name, initials } = req.body;

	const updatedTeam = teams.find((team) => team.id === Number(id));

	if (!updatedTeam) {
		res.status(404).json({ message: 'Team not found' });
	}

	updatedTeam.name = name;
	updatedTeam.initials = initials;
	res.status(200).json({ updatedTeam });
});

app.delete('/teams', (req, res) => {
	const { id } = req.params;
	const position = teams.findIndex((team) => team.id === +id);

	teams.splice(position, 1);
	res.status(200).end();
})


module.exports = app;