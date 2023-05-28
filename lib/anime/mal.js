const axios = require('axios');
const cheerio = require('cheerio');

module.exports.MAL_TOP_AIRING = async() => {
  return new Promise(async(resolve, reject) => {
    axios.get('https://myanimelist.net/topanime.php?type=airing')
    .then(({ data }) => {
      results = [];
      var result = {
        result: results,
      };
      var $ = cheerio.load(data);
      $('div.pb12 > table.top-ranking-table').each(function(y,z) {
        for(let i = 0; i < 7; i++){
          let b = $(z).find('tr.ranking-list > td.ac');
          let c = $(z).find('tr.ranking-list > td.title')[i];
          let d = $(z).find('tr.ranking-list > td.score')[i];
          const msg = {
            rank: $(b).find('span.top-anime-rank-text').text()[i],
            thumbnail: $(c).find('a.hoverinfo_trigger > img').attr('data-src'),
            title: $(c).find('div.detail > div.clearfix > h3 > a').text().trim(),
            score: $(d).find('span').text().trim(),
            link: $(c).find('a.hoverinfo_trigger').attr('href')
          };
          results.push(msg);
        }
      });
      resolve(result);
    })
    .catch(error => {
      reject(error);
    });
  });
}

module.exports.MAL_TOP_ANIME = async() => {
  return new Promise(async(resolve, reject) => {
    axios.get('https://myanimelist.net/topanime.php')
    .then(({ data }) => {
      results = [];
      var result = {
        result: results
      };
      var $ = cheerio.load(data);
      $('div.pb12 > table.top-ranking-table').each(function(y,z) {
        for(let i = 0; i < 7; i++){
          let b = $(z).find('tr.ranking-list > td.ac');
          let c = $(z).find('tr.ranking-list > td.title')[i];
          let d = $(z).find('tr.ranking-list > td.score')[i];
          const msg = {
            rank: $(b).find('span.top-anime-rank-text').text()[i],
            thumbnail: $(c).find('a.hoverinfo_trigger > img').attr('data-src'),
            title: $(c).find('div.detail > div.clearfix > h3 > a').text().trim(),
            score: $(d).find('span').text().trim(),
            link: $(c).find('a.hoverinfo_trigger').attr('href')
          };
          results.push(msg);
        }
      });
      resolve(result);
    })
    .catch(error => {
      reject(error);
    });
  });
}

module.exports.MAL_SEARCH_ANIME = async(query) => {
  return new Promise(async(resolve, reject) => {
    axios.get('https://myanimelist.net/anime.php?q='+query+'&cat=anime')
    .then(({ data }) => {
      let results = [];
      var result = {
        result: results,
      };
      var $ = cheerio.load(data);
      $('div.js-categories-seasonal > table').each(async function(y,z) {
        for(let i = 1; i < 10; i++){
          let b = $(z).find('td.borderClass > div.title')[i];
          let c = $(z).find('td.borderClass > div.picSurround > a.hoverinfo_trigger')[i];
          let d = $(z).find('td.ac:nth-child(3)')[i];
          let e = $(z).find('td.ac:nth-child(4)')[i];
          let f = $(z).find('td.ac:nth-child(5)')[i];
          const msg = {
            title: $(b).find('a.hoverinfo_trigger').text(),
            thumbnail: $(c).find('img').attr('data-src'),
            url: $(b).find('a.hoverinfo_trigger').attr('href'),
            type: $(d).text().trim().replace('\n'),
            episode: $(e).text().trim().replace('\n'),
            score: $(f).text().trim().replace('\n'),
          };
          results.push(msg);
        }
      });
      if (results.length < 1) return reject({ result: { message: `result ${anime} not found` }});
      resolve(result);
    })
    .catch(err => {
      reject(error);
    });
  });
}
module.exports.MAL_SEARCH_MANGA = async(query) => {
  return new Promise(async(resolve, reject) => {
    axios.get('https://myanimelist.net/manga.php?q='+query+'&cat=manga')
    .then(({ data }) => {
      let results = [];
      var result = {
        result: results,
      };
      var $ = cheerio.load(data);
      $('div.js-categories-seasonal > table').each(async function(y,z) {
        for(let i = 1; i < 10; i++){
          let b = $(z).find('td.borderClass:nth-child(2)')[i];
          let c = $(z).find('td.borderClass:nth-child(3)')[i];
          let d = $(z).find('td.borderClass:nth-child(4)')[i];
          let e = $(z).find('td.borderClass:nth-child(5)')[i];
          let f = $(z).find('td.borderClass:nth-child(1)')[i];
          const msg = {
            title: $(b).find('a.hoverinfo_trigger > strong').text(),
            type: $(c).text().trim(),
            vol: $(d).text().trim(),
            score: $(e).text().trim(),
            link: $(b).find('a:nth-child(2)').attr('href'),
            thumbnail: $(f).find('a.hoverinfo_trigger > img').attr('data-src')
          };
          results.push(msg);
        }
      });
      if (results.length < 1) return reject({ result: { message: `result ${manga} not found` }});
      resolve(result);
    })
    .catch(err => {
      reject(error);
    });
  });
}