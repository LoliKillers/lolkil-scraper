const axios = require('axios');
const cheerio = require('cheerio');

async function randomHentai() {
  return new Promise((resolve, reject) => {
    axios.get("https://hentai.tv/random-page/")
    .then(async ({data}) => {
      const $ = cheerio.load(data);
      let result = {}
      let res = {}
      result.coder = 'Loli Killers';
      result.result = res;
      result.warning = 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers';
      $('div.flex > div.flex > div.bg-silver-800 > div.absolute').each(function(c, d) {
        res.image = $(d).find('img').attr('src');
      });
      $('div.flex > div.flex > div.bg-silver-800').each(function(a, b) {
        res.title = $(b).find('a').text().trim();
        res.publised = $(b).find('p:nth-child(1)').text().trim();
        res.views = $(b).find('p:nth-child(2)').text().trim();
        res.url = $(b).find('a').attr('href');
      });
        resolve(result);
    })
    .catch(err => {
      console.log(err);
    });
  });
}
module.exports.randomHentai = randomHentai