const promises = (a, b, c) => {
	const promise = new Promise((resolve, reject) => {
		if (isNaN(a) || isNaN(b) || isNaN(c)) {
			reject(new Error('only number are accepted'));
		}
		const result = (a + b) * c;
		if (result < 50) {
			reject(new Error('result is too small'));
		}
		resolve(result);
	});
	return promise;
};

promises(10,'s',3)
	.then(response => console.log(response))
	.catch(e => console.log('Error:', e.message))