const sum = require('./script')

test('soma dois valores', () => {
	expect(sum(2, 3)).toEqual(5);
  });
  