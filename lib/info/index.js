const { GempaTerkini } = require('../../lib/info/bmkg');

module.exports.gempa_terkini = () => {
  return new Promise((resolve, reject) => {
    GempaTerkini()
    .then(data => {
      if (data.result === undefined ) {
        resolve({ result: 'result not found' });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};
