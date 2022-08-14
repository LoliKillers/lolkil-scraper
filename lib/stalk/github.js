const axios = require('axios');

function GithubStalk(username) {
  return new Promise(async(resolve, reject) => {
    let url = `https://api.github.com/users/${username}`;
    return axios.get(url)
    .then(data => {
      const user = data.data;
      const usr = data.headers;
      let result = {
        coder: 'Loli Killers',
        result: {
          login: user.login,
          id: user.id,
          node_id: user.node_id,
          avatar_url: user.avatar_url,
          gravatar_id: user.gravatar_id,
          url: user.url,
          html_url: user.html_url,
          followers_url: user.followers_url,
          following_url: user.following_url,
          gists_url: user.gists_url,
          starred_url: user.starred_url,
          subscriptions_url: user.subscriptions_url,
          organizations_url: user.organizations_url,
          repos_url: user.repos_url,
          events_url: user.events_url,
          received_events_url: user.received_events_url,
          type: user.type,
          site_admin: user.site_admin,
          site_admin: user.site_admin,
          name: user.name,
          company: user.company,
          blog: user.blog,
          location: user.location,
          url: user.url,
          email: user.email,
          hireable: user.hireable,
          bio: user.bio,
          twitter_username: user.twitter_username,
          public_repos: user.public_repos,
          public_gists: user.public_gists,
          followers: user.followers,
          following: user.following,
          created_at: user.created_at,
          updated_at: user.updated_at
        },
        headers: {
          server: usr.server,
          vary: usr.vary,
          etag: usr.etag,
          connection: usr.connection
        },
        warning: 'It is strictly forbidden to repackage this web API into another web API, copyright © 2022 by Loli Killers'
      };
      resolve(result);
    })
    .catch(err => {
      reject(err);
    });
  });
}

module.exports.GithubStalk = GithubStalk;