const axios = require('axios');
const cheerio = require('cheerio');

async function _Film(query) {
  return new Promise((resolve, reject) => {
    axios.get(`http://167.99.31.48/?s=${query}`)
    .then(({data}) => {
      const $ = cheerio.load(data);
      const hasil = [];
      let results = {
        coder: "Loli Killers",
        result: hasil,
        warning: "It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers"
      };
      $('#content > div > div.los').each(function (a, b) {
        $(b).find('article').each(function (c, d) {
          let _title = $(d).find('div > a > div.addinfox > header > h2').text();
          let _quality = $(d).find('div > a > div > div > span').text();
          let _type = $(d).find('div > a > div.addinfox > div > i.type').text();
          let _upload = $(d).find('div > a > div.addinfox > div > span').text();
          let _link = $(d).find('div > a').attr('href');
          let _thumbnail = $(d).find('div > a > div > img').attr('src');
          let result = {
            title: _title,
            quality: _quality,
            type: _type,
            upload: _upload,
            link: _link,
            thumbnail: _thumbnail,
          };
          hasil.push(result);
        });
      });
      resolve(results);
    })
    .catch(reject);
  });
}
module.exports._Film = _Film;