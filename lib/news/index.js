const { RumahKeadilan } = require('../../lib/news/rumah-keadilan');
const { KompasNews } = require('../../lib/news/kompas_news');

module.exports.kompas_news = (kategori) => {
  return new Promise((resolve, reject) => {
    KompasNews(kategori)
    .then(res => {
      if (res.result == null) {
        resolve({ result: 'result not found' });
      } else {
        resolve(res);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};
module.exports.rumah_keadilan = () => {
  return new Promise((resolve, reject) => {
    RumahKeadilan()
    .then(data => {
      if (data.result === undefined) {
        resolve({ result: 'result not found!' });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};