'use strict';
const { ANOBOY_SEARCH } = require('../../lib/anime/anoboy');
const { OTAKUDESU_SEARCH } = require('../../lib/anime/otakudesu');
const { MAL_TOP_AIRING, MAL_TOP_ANIME, MAL_SEARCH_ANIME, MAL_SEARCH_MANGA } = require('../../lib/anime/mal');
const { isUrl } = require('../../lib/functions');

module.exports.ANOBOY_SEARCH = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) throw new Error(`search parameters cannot be empty`);
    if (isUrl(search)) throw new Error(`not a link!`);
    ANOBOY_SEARCH(search)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.OTAKUDESU_SEARCH = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) throw new Error(`search parameters cannot be empty`);
    if (isUrl(search)) throw new Error(`not a link!`);
    OTAKUDESU_SEARCH(search)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};
module.exports.MAL_TOP_AIRING = () => {
  return new Promise((resolve, reject) => {
    MAL_TOP_AIRING()
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};
module.exports.MAL_TOP_ANIME = () => {
  return new Promise((resolve, reject) => {
    MAL_TOP_ANIME()
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};
module.exports.MAL_SEARCH_ANIME = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) throw new Error(`search parameters cannot be empty`);
    if (isUrl(search)) throw new Error(`not a link`);
    MAL_SEARCH_ANIME(search)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};
module.exports.MAL_SEARCH_MANGA = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`params "search" cannot be empty!!, README.md is there to read!!`));
    if (isUrl(search)) return reject(new Error(`this params is not link!`));
    MAL_SEARCH_MANGA(search)
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
};