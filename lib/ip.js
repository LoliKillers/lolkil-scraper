const needle = require('needle')

const url = 'https://api.myip.com'

const Ip = () => new Promise((resolve, reject) => {
  needle(url, (err, resp, body) => {
    if (!err) {
      resolve(body)
    }
  })
})

module.exports.Ip = Ip