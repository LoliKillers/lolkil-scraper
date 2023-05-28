const axios = require('axios');
const cheerio = require('cheerio');

function ANOBOY_SEARCH(query) {
  return new Promise(async(resolve, reject) => {
    axios.get('https://anoboy.monster/?s=' + query)
    .then(({
      data
    }) => {
      const $ = cheerio.load(data);
      var result = {};
      var hasil = $('div.wrap > div > div.column-content > a:nth-child(1)').attr('href');
      if (hasil === undefined) return reject({
        result: {
          error: `result ${search} not found!`
        }});
      axios.get(hasil)
      .then(({
        data
      }) => {
        const $$ = cheerio.load(data);
        let result = {};
        result.code = 200
        result.message = 'success'
        let res = {};
        let dl = {};
        result.result = res;
        result.result.download_sd = dl;
        res.thumbnail = 'https://anoboy.monster' + $$('div.unduhan > div > div.sisi').find('amp-img').attr('src');
        dl.m4u = $$('div.download > div > p > span:nth-child(1)').find('a:nth-child(3)').attr('href');
        dl.zippy = $$('div.download > div > p > span:nth-child(3)').find('a:nth-child(3)').attr('href');
        dl.mirror = $$('div.download > div > p > span:nth-child(5)').find('a:nth-child(3)').attr('href');
        $$('div.unduhan > div > div.sisi').each(function(a, b) {
          tt = $$(b).find('p > strong')[0];
          desc = $$(b).find('p')[1];
          res.title = $$(tt).text();
          res.synopsis = $$(desc).text().replace('Sinopsis :\n', '');
        });
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
    })
    .catch(err => {
      reject(err);
    });
  });
}
module.exports.ANOBOY_SEARCH = ANOBOY_SEARCH;