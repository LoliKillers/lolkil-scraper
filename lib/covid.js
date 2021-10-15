const needle = require('needle')

const urlid = 'https://api.kawalcorona.com/indonesia/'
const urlglobal = 'https://api.kawalcorona.com/'

const CovidId = () => new Promise((resolve, reject) => {
    needle(urlid, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

const CovidGlobal = () => new Promise((resolve, reject) => {
  needle(urlglobal, (err, resp, body) => {
    if (!err) {
      resolve(body)
    }
  })
})


module.exports.CovidId = CovidId
module.exports.CovidGlobal = CovidGlobal