const axios = require('axios');
const cheerio = require('cheerio');

async function GempaTerkini() {
  return new Promise((resolve, reject) => {
    axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {
      var $ = cheerio.load(response.data);
      var link_element = $('table.table-hover.table-striped');
      for (let i = 0; i < link_element.length; i++) {
        var _Link = $(link_element[i]).find('tbody')[0];
        if (_Link) {
          var _data = $(_Link).find('tr')[0];
          var _waktu = $(_data).find('td')[1];
          var _lokasi = $(_data).find('td')[2];
          var _magnitudo = $(_data).find('td')[3];
          var _kedalaman = $(_data).find('td')[4];
          var _wilayah = $(_data).find('td')[5];
          var _lintang = $(_lokasi).text().split(' ')[0];
          var _bujur = $(_lokasi).text().split(' ')[2];
          var hasil = {
            coder: 'Loli Killers',
            result: {
              waktu: $(_waktu).text(),
              lintang: _lintang,
              bujur: _bujur,
              magnitudo: $(_magnitudo).text(),
              kedalaman: $(_kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
              wilayah: $(_wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-','').replace(/\r/g, '').split('\n')[0],
              google_maps: 'https://maps.google.com/maps?ll=' + _lintang + ',' + _bujur + ',&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3'
            },
            note: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
          };
          resolve(hasil);
        }
      }
    });
  });
}

module.exports.GempaTerkini = GempaTerkini;