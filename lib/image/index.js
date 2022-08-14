const { Pinterest } = require('../../lib/image/pinterest');
const { Wallpaperflare } = require('../../lib/image/wallpaperflare');
const { isUrl } = require('../../lib/functions');

module.exports.pinterest = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`Unable to search image`));
    if (isUrl(search)) return reject(new Error(`Is not a link`));
    Pinterest(search)
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
module.exports.wallpaperflare = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`Unable to search image`));
    if (isUrl(search)) return reject(new Error(`Is not a link`));
    Wallpaperflare(search)
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
