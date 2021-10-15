const needle = require('needle')

const HttpHeaders = (url) => new Promise((resolve, reject) => {
  if (!url) { reject('Opss, url is empty, please check again') }
  needle(url, (error, res, body) => {
    resolve({
      result: res.headers
    })
  })
})


module.exports.HttpHeaders = HttpHeaders