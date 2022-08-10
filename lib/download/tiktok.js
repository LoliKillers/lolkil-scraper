const axios = require('axios');
const cheerio = require('cheerio');

async function TikTok(url) {
  return new Promise((resolve, reject) => {
    axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url)
    .then(data => {
      var get_token = cheerio.load(data.data);
      var token = get_token("#token").attr("value");
      var params = {
        url: url,
        token: token,
      };
      var options = {
        url: 'https://downvideo.quora-wiki.com/system/action.php',
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
          "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
        },
        data: new URLSearchParams(Object.entries(params)),
      };
      axios.request(options)
      .then(data => {
        resolve({
          coder: 'Loli Killers',
          title: data.data.title,
          thumbnail: data.data.thumbnail,
          duration: data.data.duration,
          result: data.data.medias,
          warning: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
        });
      })
      .catch(error => {
        reject(error);
        console.log(error)
      });
    })
    .catch(error => {
      console.log(error)
      reject(error);
    });
  });
}
module.exports.TikTok = TikTok;