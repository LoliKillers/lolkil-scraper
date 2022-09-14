const { isUrl } = require('../../lib/functions');
const { gradientNeonLightText } = require('../../lib/textpro/gradientNeonLightText');

module.exports.gradient_neon_light_text = (text) => {
  return new Promise ((resolve, reject) => {
    if (!text) return reject(new Error(`params 'text' is missing!`));
    if (isUrl(text)) return reject (new Error(`this params is not link!`));
    gradientNeonLightText(text)
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