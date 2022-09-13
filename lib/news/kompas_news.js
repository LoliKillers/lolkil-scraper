const scraperjs = require('scraperjs');

async function KompasNews(ktgr) {
  return new Promise((resolve, reject) => {
    var kategori = ktgr.toLowerCase();
    var lisKategori = ['terpopuler','terkini','global'];
    if (kategori == undefined) return reject(new Error('harap masukkan kategori!, kategori yang tersedia : terpopuler, news'));
    if (!lisKategori.includes(kategori)) return reject(new TypeError(`kategori '${kategori}' tidak ada!`));
    if (kategori == 'terpopuler') {
      scraperjs.StaticScraper.create('https://indeks.kompas.com/terpopuler').scrape(async ($) => {
        const obj = {};
        obj.result = $('div.col-bs10-7 div.latest--indeks div.article__list')
        .map(function () {
          return {
            judul: $(this).find('div.article__list__title h3').text(),
            tanngal: $(this).find('div.article__list__info div.article__date').text(),
            tautan: $(this).find('div.article__list__title h3 a').attr('href'),
            thumbnail: $(this).find('div.article__list__asset div.article__asset img').attr('src')
          };
        }).get();
        resolve(obj);
      });
    } else if (kategori == 'terkini') {
      scraperjs.StaticScraper.create('https://news.kompas.com/').scrape(async ($) => {
        const obj = {};
        obj.result = $('div.col-bs10-7 div.latest div.ga--latest div.row div.col-bs9-3')
        .map(function () {
          return {
            judul: $(this).find('div.article__grid div.article__box h3.article__title a').text(),
            deskripsi: $(this).find('div.article__grid div.article__box div.article__lead').text(),
            tanggal: $(this).find('div.article__grid div.article__box div.article__date').text(),
            artikel: $(this).find('div.article__grid div.article__boxsubtitle h2').text().trim(),
            tautan: $(this).find('div.article__grid div.article__asset a').attr('href'),
            thumbnail: $(this).find('div.article__grid div.article__asset a img').attr('data-src')
          };
        }).get();
        resolve(obj);
      });
    } else if (kategori == 'global') {
      scraperjs.StaticScraper.create('https://www.kompas.com/global').scrape(async ($) => {
        const obj = {};
        obj.result = $('div.row div.col-bs10-7 div.trenLatest div.trenLatest__item')
        .map(function () {
          return {
            judul: $(this).find('div.trenLatest__box h3.trenLatest__title').text().trim(),
            tanggal: $(this).find('div.trenLatest__box div.tren__date').text(),
            tautan: $(this).find('div.trenLatest__img a').attr('href'),
            thumbnail: $(this).find('div.trenLatest__img a img').attr('src')
          };
        }).get();
        resolve(obj);
      });
    } else {
      reject(new Error('harap masukkan kategori!, kategori yang tersedia : terpopuler, news'));
    }
  });
}
module.exports.KompasNews = KompasNews;