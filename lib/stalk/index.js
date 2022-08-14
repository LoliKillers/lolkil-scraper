const { GithubStalk } = require('../../lib/stalk/github');
const { isUrl } = require('../../lib/functions');

module.exports.github = (username) => {
  return new Promise((resolve, reject) => {
    if (!username) return reject(new Error(`Unable to search username`));
    if (isUrl(username)) return reject(new Error(`User name is not a link`));
    GithubStalk(username)
    .then(data => {
      if (data.result === undefined) {
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
