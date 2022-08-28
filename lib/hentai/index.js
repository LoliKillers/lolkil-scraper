const { randomHentai } = require('../../lib/hentai/random');

module.exports.random_hentai = () => {
  return new Promise((resolve, reject) => {
    randomHentai()
    .then(data => {
      if (data.result.title == undefined) {
        resolve({
          result: `result not found!`
        });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};
