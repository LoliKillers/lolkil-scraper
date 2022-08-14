const { TikTok } = require('../../lib/download/tiktok');
const { isUrl } = require('../../lib/functions');
const { YtdlMp3, YtdlMp4, YtPlayMp4, YtPlayMp3 } = require('../../lib/download/youtube');

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
module.exports.youtube_dl_mp3 = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`params link not found!`));
    if (!isUrl(url)) return reject(new Error(`this params only link!`));
    YtdlMp3(url)
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
module.exports.youtube_dl_mp4 = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error(`params link not found!`));
    if (!isUrl(url)) return reject(new Error(`this params only link!`));
    YtdlMp4(url)
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
module.exports.youtube_play_mp3 = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`params search not found!`));
    if (isUrl(search)) return reject(new Error(`this params not link!`));
    YtPlayMp3(search)
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
module.exports.youtube_play_mp4 = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`params search not found!`));
    if (isUrl(search)) return reject(new Error(`this params not link!`));
    YtPlayMp4(search)
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