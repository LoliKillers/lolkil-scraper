const fetch = require('node-fetch')

function InfoNPM(query) {
	return new Promise((resolve, reject) => {
		fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.InfoNPM = InfoNPM