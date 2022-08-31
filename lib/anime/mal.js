const axios = require('axios');
const cheerio = require('cheerio');

function MalTopAiring(){
  return new Promise(async(resolve, reject) => {
    axios.get('https://myanimelist.net/topanime.php?type=airing')
    .then(({ data }) => {
      results = [];
      var result = {
        coder: 'Loli Killers',
        result: results,
        warning: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
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

function MalTopAnime(){
  return new Promise(async(resolve, reject) => {
    axios.get('https://myanimelist.net/topanime.php')
    .then(({ data }) => {
      results = [];
      var result = {
        coder: 'Loli Killers',
        result: results,
        warning: 'It is strictly forbidden to repackage this web API into another web API, copyright © 2022 by Loli Killers'
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

function MalSearchAnime(anime){
  return new Promise(async(resolve, reject) => {
    axios.get('https://myanimelist.net/anime.php?q='+anime+'&cat=anime')
    .then(({ data }) => {
      let results = [];
      var result = {
        coder: 'Loli Killers',
        result: results,
        warning: 'It is strictly forbidden to repackage this web API into another web API, copyright © 2022 by Loli Killers'
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
function MalSearchManga(manga){
  return new Promise(async(resolve, reject) => {
    axios.get('https://myanimelist.net/manga.php?q='+manga+'&cat=manga')
    .then(({ data }) => {
      let results = [];
      var result = {
        coder: 'Loli Killers',
        result: results,
        warning: 'It is strictly forbidden to repackage this web API into another web API, copyright © 2022 by Loli Killers'
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

function MalSearchCharacter(character){
  return new Promise(async(resolve, reject) => {
    axios.get('https://myanimelist.net/character.php?q='+character+'&cat=character')
    .then(({ data }) => {
      let results = [];
      var result = {
        coder: 'Loli Killers',
        result: results,
        warning: 'It is strictly forbidden to repackage this web API into another web API, copyright © 2022 by Loli Killers'
      };
      var $ = cheerio.load(data);
      $('table').each(async function(y,z) {
        for(let i = 0; i < 10; i++){
          let b = $(z).find('tr > td.borderClass:nth-child(2)')[i];
          let c = $(z).find('tr > td.borderClass:nth-child(1)')[i];
          let d = $(z).find('tr > td.borderClass:nth-child(3)')[i];
          const msg = {
            name: $(b).find('a').text().trim(),
            alias_name: $(b).find('small').text().trim(),
            url: $(b).find('a').attr('href'),
            thumbnail: $(c).find('a > img').attr('data-src'),
            anime: $(d).find('small > a:nth-child(1)').text().trim(),
            manga: $(d).find('small > a:nth-child(2)').text().trim()
          };
          results.push(msg);
        }
      });
      if (results.length < 1) return reject({ result: { message: `result ${character} not found` }});
      resolve(result);
    })
    .catch(error => {
      reject(error);
    });
  });
}
module.exports = {
  MalTopAiring,
  MalTopAnime,
  MalSearchAnime,
  MalSearchManga,
  MalSearchCharacter
};