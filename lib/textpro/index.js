const { isUrl } = require('../../lib/functions');
const { LightStyle } = require('../../lib/textpro/light_style');

module.exports.light_style = (type, text) => {
  return new Promise ((resolve, reject) => {
    if (!text) return reject(new Error(`params 'text' is missing!`));
    if (isUrl(text)) return reject (new Error(`this params is not link!`));
    if (isUrl(type)) return reject (new Error(`this params is not link!`));
    LightStyle(type, text)
    .then(data => {
      if (data.result.length < 1) {
        resolve({ result: 'result not found!' });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};