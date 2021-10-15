const { fetchText } = require('./fetcher.js')

Shortlink = (url) => new Promise((resolve, reject) => {
    fetchText(`https://tinyurl.com/api-create.php?url=${url}`)
        .then((text) => resolve(text))
        .catch((err) => reject(err))
})

module.exports.Shortlink = Shortlink