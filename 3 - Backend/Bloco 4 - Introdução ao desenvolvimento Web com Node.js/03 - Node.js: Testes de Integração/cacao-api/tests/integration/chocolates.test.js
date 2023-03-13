const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);
const { expect } = chai;

const mockChocolates = JSON.parse(JSON.stringify([
	{ "id": 1, "name": "Mint Intense", "brandId": 1 },
	{ "id": 2, "name": "White Coconut", "brandId": 1 },
	{ "id": 3, "name": "Mon Chéri", "brandId": 2 },
	{ "id": 4, "name": "Mounds", "brandId": 3 }
]));

describe('GET /chocolates', function () {
	it('should return a chocolates list', async function () {
		const response = await chai.request(app).get('/chocolates');
		
		expect(response.status).to.be.equals(200);
	});
	it('', function () {

	});
	it('', function () {

	});
	it('', function () {

	});
});