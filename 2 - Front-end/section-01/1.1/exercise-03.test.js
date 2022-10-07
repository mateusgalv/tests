const { getPokemonDetails } = require('./exercise-03')

describe('A função getPokemonDetails', () => {
	it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
		expect(getPokemonDetails('', handlePokemonSearch)).toBe('Não temos esse pokémon para você :(')
	});

	it('retorna um pokémon que existe no banco de dados', () => {
		const expected = 'Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas'
		expect(getPokemonDetails('Charmander', handlePokemonSearch)).toBe(expected)
	});
});

