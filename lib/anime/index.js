const { anoboySearch } = require('../../lib/anime/anoboy');
const { OtakuSearch } = require('../../lib/anime/otakudesu');
const { MalTopAiring, MalTopAnime, MalSearchAnime, MalSearchManga, MalSearchCharacter } = require('../..lib/anime/mal');
const { isUrl } = require('../../lib/functions');

module.exports.anoboy_search = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`params "search" cannot be empty!!, README.md is there to read!!`));
    if (isUrl(search)) return reject(new Error(`this params is not link!`));
    anoboySearch(search)
    .then(data => {
      if (data.result.title == undefined) {
        resolve({
          result: `result not found!`
        });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.otakudesu_search = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`params "search" cannot be empty!!, README.md is there to read!!`));
    if (isUrl(search)) return reject(new Error(`this params is not link!`));
    OtakuSearch(search)
    .then(data => {
      if (data.result === undefined ) {
        resolve({ result: 'result not found' });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};
module.exports.mal_top_airing = () => {
  return new Promise((resolve, reject) => {
    MalTopAiring()
    .then(data => {
      if (data.result === undefined ) {
        resolve({ result: 'result not found' });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};
module.exports.mal_top_anime = () => {
  return new Promise((resolve, reject) => {
    MalTopAnime()
    .then(data => {
      if (data.result === undefined ) {
        resolve({ result: 'result not found' });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};
module.exports.mal_search_anime = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`params "search" cannot be empty!!, README.md is there to read!!`));
    if (isUrl(search)) return reject(new Error(`this params is not link!`));
    MalSearchAnime(search)
    .then(data => {
      if (data.result === undefined ) {
        resolve({ result: 'result not found' });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};
module.exports.mal_search_manga = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`params "search" cannot be empty!!, README.md is there to read!!`));
    if (isUrl(search)) return reject(new Error(`this params is not link!`));
    MalSearchManga(search)
    .then(data => {
      if (data.result === undefined ) {
        resolve({ result: 'result not found' });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};
module.exports.mal_search_character = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`params "search" cannot be empty!!, README.md is there to read!!`));
    if (isUrl(search)) return reject(new Error(`this params is not link!`));
    MalSearchCharacter(search)
    .then(data => {
      if (data.result === undefined ) {
        resolve({ result: 'result not found' });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};
