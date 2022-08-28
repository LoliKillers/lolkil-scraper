const axios = require('axios');
const cheerio = require('cheerio');

async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get("https://hentai.tv/?s=" + search)
    .then(async ({data}) => {
      let $ = cheerio.load(data);
      let result = {};
      let res = [];
      result.coder = 'Loli Killers';
      result.result = res;
      result.warning = "It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers";
      $('div.flex > div.crsl-slde').each(function(a, b) {
        let _thumbnail = $(b).find('img').attr('src');
        let _title = $(b).find('a').text().trim();
        let _views = $(b).find('p').text().trim();
        let _url = $(b).find('a').attr('href');
        let hasil = {
          thumbnail: _thumbnail,
          title: _title,
          views: _views,
          url: _url
        };
        res.push(hasil);
      });
      resolve(result);
    })
    .catch(err => {
      console.log(err);
    });
  });
}
module.exports.searchHentai = searchHentai;