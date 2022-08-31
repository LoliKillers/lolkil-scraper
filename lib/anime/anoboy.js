const axios = require('axios');
const cheerio = require('cheerio');

function anoboySearch(search){
  return new Promise(async(resolve, reject) => {
    axios.get('https://62.182.83.93/?s=' + search)
    .then(({ data }) => {
      const $ = cheerio.load(data);
      const result = {};
      var hasil = $('div.wrap > div > div.column-content > a:nth-child(1)').attr('href');
      if (hasil === undefined) return reject({ result: { message: `result ${search} not found!`}});
      axios.get(hasil)
      .then(({ data }) => {
        const $$ = cheerio.load(data);
        let result = {};
        result.coder = 'Loli Killers';
        let res = {};
        let dl = {};
        result.result = res;
        result.result.download_sd = dl;
        result.warning = 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers';
        res.thumbnail = $$('div.unduhan > div > div.sisi').find('amp-img').attr('src');
        dl.m4u = $$('div.download > div > p > span:nth-child(1)').find('a:nth-child(3)').attr('href');
        dl.zippy = $$('div.download > div > p > span:nth-child(3)').find('a:nth-child(3)').attr('href');
        dl.mirror = $$('div.download > div > p > span:nth-child(5)').find('a:nth-child(3)').attr('href');
        $$('div.unduhan > div > div.sisi').each(function(a, b) {
          tt = $$(b).find('p > strong')[0];
          desc = $$(b).find('p')[1];
          res.title = $$(tt).text();
          res.synopsis = $$(desc).text().replace('Sinopsis :\n','');
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
module.exports.anoboySearch = anoboySearch;