require('rootpath')();
const isEmoji = require('is-emoji');
const { Emoji2Png } = require('lib/convert/emoji2png');
const { isUrl } = require('lib/functions');

module.exports.emoji_to_png = (emoji) => {
  return new Promise((resolve, reject) => {
    if (!emoji) return reject(new Error(`params "emoji" cannot be empty!!, README.md is there to read!!`));
    if (isUrl(emoji)) return reject(new Error(`this params is not link!`));
    if (!isEmoji(emoji)) return reject(new Error(`this params only emoji/emoticon!!`));
    Emoji2Png(emoji)
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