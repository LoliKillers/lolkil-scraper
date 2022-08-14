const axios = require('axios');

async function GithubRepo(repo) {
  return new Promise( async (resolve, reject) => {
    await axios.get(`https://api.github.com/search/repositories?q=${repo}`)
    .then(response => {
      if(response.status == 200){
        const results = response.data.items;
        data = {};
        data.date = 'Loli Killers';
        data.count = response.data.total_count;
        data.result = [];
        data.warning = "It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers";
        if (data.count != 0) {
          results.forEach((res) => {
            data.result.push({
              id: res.id,
              node_d: res.node_id,
              name_repo: res.name,
              full_name_repo: res.full_name,
              url_repo: res.html_url,
              description: res.description,
              git_url: res.git_url,
              ssh_url: res.ssh_url,
              clone_url: res.clone_url,
              svn_url: res.svn_url,
              homepage: res.homepage,
              stargazers: res.stargazers_count,
              watchers: res.watchers,
              forks: res.forks,
              default_branch: res.default_branch,
              language: res.language,
              is_private: res.private,
              is_fork: res.fork,
              created_at: res.created_at,
              updated_at: res.updated_at,
              pushed_at: res.pushed_at,
            });
          });
        } else {
          data.items = "Repositories not found";
        }
        resolve(data);
      } else {
        reject({
          code: 404,
          message: "Internal Server Error, Repeat in a few more moments, if there is still an error, please contact the coder"
        });
      }
    })
    .catch(err => {
      reject(err);
    });
  });
}
module.exports.GithubRepo = GithubRepo;