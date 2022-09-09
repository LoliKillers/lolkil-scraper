const { GithubRepo } = require('../../lib/search/github');
const { isUrl } = require('../../lib/functions');
const { _Film } = require('../../lib/search/film');
const { KodePos } = require('../../lib/search/kodepos');

module.exports.kodepos = (search) => {
  return new Promise ((resolve, reject) => {
    if (!search) return reject(new Error(`params 'search' is missing!`));
    if (isUrl(search)) return reject (new Error(`this params is not link!`));
    KodePos(search)
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
module.exports.film = (search) => {
  return new Promise ((resolve, reject) => {
    if (!search) return reject(new Error(`params 'search' is missing!`));
    if (isUrl(search)) return reject (new Error(`this params is not link!`));
    _Film(search)
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

module.exports.github_repo = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`Unable to 'search' repo`));
    if (isUrl(search)) return reject(new Error(`Repo name is not a link`));
    GithubRepo(search)
    .then(data => {
      if (data.result.length < 1 ) {
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
