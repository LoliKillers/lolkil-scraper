
const isEmoji = require('is-emoji');
const { Emoji2Png } = require('../../lib/convert/emoji2png');
const { GTTS } = require('../../lib/convert/gtts');
const { isUrl } = require('../../lib/functions');
const isCountryCode = require('../../lib/defaults/country-code/index');

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

module.exports.gtts = (text, language) => {
  return new Promise((resolve, reject) => {
    if (!text) return reject(new Error(`params "text" cannot be empty!!, README.md is there to read!!`));
    if (isUrl(text)) return reject(new Error(`this params is not link!`));
    if (isUrl(language)) return reject(new Error(`this params is not link!`));
    if (!language) return reject(new Error(`params "language" cannot be empty!!, README.md is there to read!!`));
    if (!isCountryCode(language)) return reject(new Error(`Missing language code ${language}`));
    GTTS(text, language)
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