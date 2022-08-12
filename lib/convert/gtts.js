const _Gtts = require('google-tts-api');

async function GTTS(text, lang) {
  return new Promise(async(resolve, reject) => {
    try {
      const url = _Gtts.getAudioUrl(text, {
        lang: lang,
        slow: false,
        host: 'https://translate.google.com',
      });
      var msg = {
        coder: 'Loli Killers',
        result: {
          audio: url
        },
        warning: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
      };
      resolve(msg);
    } catch (err) {
      reject(err);
    }
  });
}
module.exports.GTTS = GTTS;