const cheerio = require('cheerio');
const request = require('request');

async function KodePos(country) {
  return new Promise(async(resolve, reject) => {
    if (country == undefined) return reject({ error: 'enter country parameters!!'});
    try {
      let kodepos = 'https://carikodepos.com/';
      let url = kodepos +'?s='+ country;
      request.get({
        headers: {
          'Accept': 'application/json, text/javascript, */*;',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4209.3 Mobile Safari/537.36',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
          'Origin': kodepos,
          'Referer': kodepos
        },
        url: url,
      }, function(error, response, body) {
        if (error) return reject(error);
        let x = cheerio.load(body);
        var search = x('tr');
        if (!search.length) return reject({ message: 'Opss, result could not be found!!' });
        var results = [];
        var msg = {
          coder: 'Loli Killers',
          result: results,
          note: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
        };
        search.each(function(y) {
          if (y != 0) {
            var td = x(this).find('td');
            var result = {};
            td.each(function(y) {
              var value = x(this).find('a').html();
              var key = (y == 0) ? 'province' : (y == 1) ? 'city' : (y == 2) ? 'subdistrict' : (y == 3) ? 'urban' : 'postalcode';
              result[key] = value;
            });
            results.push(result);
          }
        });
        resolve(msg);
      });
    } catch (e) {
      reject(e);
    }
  });
}
module.exports.KodePos = KodePos;