const { TikTok } = require('../../lib/download/tiktok');
const { isUrl } = require('../../lib/functions');

module.exports.tiktok = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`params "url" cannot be empty!!, README.md is there to read!!`));
    if (!isUrl(url)) return reject(new Error(`this params only link!`));
    TikTok(url)
    .then(data => {
      if (data.result === undefined) {
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