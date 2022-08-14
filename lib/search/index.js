const { GithubRepo } = require('../../lib/search/github');
const { isUrl } = require('../../lib/functions');

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
