const scraperjs = require('scraperjs');

async function RumahKeadilan() {
  return new Promise((resolve, reject) => {
    scraperjs.StaticScraper.create('https://rumahkeadilan.co.id/').scrape(async ($) => {
      const obj = {}
      obj.result = $('div.site div.content-area article')
      .map(function () {
        return {
          judul: $(this).find('div.inside-article header h2').text(),
          penulis: $(this).find('div.inside-article header span').first().text().replace('by', ''),
          deskripsi: $(this).find('div.inside-article div.entry-summary p').text().replace('Baca Selengkapnya', ''),
          tautan: $(this).find('div.inside-article div.post-image a').attr('href'),
          thumbnail: $(this).find('div.inside-article div.post-image a img').attr('data-lazy-src')
        };
      }).get();
      resolve(obj);
    });
  });
}
module.exports.RumahKeadilan = RumahKeadilan