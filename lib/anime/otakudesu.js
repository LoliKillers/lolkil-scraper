const axios = require('axios');
const cheerio = require('cheerio');

async function OtakuSearch(search){
  return new Promise(async(resolve, reject) => {
    axios.get('https://otakudesu.watch/?s=' + search + '&post_type=anime')
    .then(({ data }) => {
      const $ = cheerio.load(data);
      const res = {};
      let animeLink = $('#venkonten > div > div.venser > div > div > ul > li:nth-child(1) > h2 > a').attr('href');
      if (animeLink === undefined) return resolve({ result: { message: `result ${search} not found` }});
      axios.get(animeLink).then(({ data }) => {
        const $$ = cheerio.load(data);
        res.coder = 'Loli Killers';
        res.result = [];
        res.result.push({ thumbnail: $$('#venkonten > div.venser > div.fotoanime').find('img').attr('src') });
        res.warning = "It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers";
        $$('#venkonten > div.venser > div.fotoanime > div.infozin > div').each(function(a, b) {
          res.result.push({
            title : $$(b).find('p:nth-child(1)').text().replace('Judul: ',''),
            japan : $$(b).find('p:nth-child(2)').text().replace('Japanese: ',''),
            rate : $$(b).find('p:nth-child(3)').text().replace('Skor: ',''),
            producer : $$(b).find('p:nth-child(4)').text().replace('Produser: ',''),
            type : $$(b).find('p:nth-child(5)').text().replace('Tipe: ',''),
            status : $$(b).find('p:nth-child(6)').text().replace('Status: ',''),
            episode : $$(b).find('p:nth-child(7)').text().replace('Total Episode: ',''),
            duration : $$(b).find('p:nth-child(8)').text().replace('Durasi: ',''),
            release : $$(b).find('p:nth-child(9)').text().replace('Tanggal Rilis: ',''),
            studio : $$(b).find('p:nth-child(10)').text().replace('Studio: ',''),
            genre : $$(b).find('p:nth-child(11)').text().replace('Genre: ',''),
            desc : $$('#venkonten > div.venser > div.fotoanime > div.sinopc').text().replace('.','\n') + $$(b).find('div.sinopc > p:nth-child(2)').text(),
            batch : $$('#venkonten > div.venser > div:nth-child(10) > ul > li > span:nth-child(1) > a').attr('href'),
          });
        });
        resolve(res);
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
module.exports.OtakuSearch = OtakuSearch;