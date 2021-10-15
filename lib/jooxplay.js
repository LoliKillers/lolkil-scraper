const needle = require('needle');
const axios = require('axios');

async function JooxPlay(query) {
  return new Promise((resolve, reject) => {
    const _time = Math.floor(new Date() / 1000)
    axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + _time)
      .then(({ data }) => {
        let result = []
        let _output = []
        let _promise = []
        let _id = []
        data.itemlist.forEach(result => {
          _id.push(result.songid)
        });
        for (let x = 0; x < data.itemlist.length; x++) {
          const _scrap = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + _id[x]
          _promise.push(
            axios.get(_scrap, {
              headers: {
                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
              }
            })
            .then(({ data }) => {
              const _result = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
              _output.push({
                songs: _result.msong,
                album: _result.malbum,
                singer: _result.msinger,
                publish: _result.public_time,
                thumbnail: _result.imgSrc,
                mp3: _result.mp3Url
              })

              axios.get('http://api.joox.com/web-fcgi-bin/web_lyric?musicid=' + _id[x] + '&lang=id&country=id&_=' + _time)
                .then(({ data }) => {
                  const _lyric = JSON.parse(data.replace('MusicJsonCallback(', '').replace('\n)', '')).lyric
                  const _buffer = new Buffer.from(_lyric, 'base64')
                  const _result = _buffer.toString('utf-8')
                  result.push({ result: _result })
                  Promise.all(_promise).then(() => resolve({
                    code: 200,
                    message: 'success',
                    coded_by: '@ariasu.xyz',
                    result: _output[0],
                    lyric: _result[0]
                  }))
                })
                .catch(reject)
            })
            .catch(reject)
          )
        }
      })
      .catch(reject)
  })
}


module.exports.JooxPlay = JooxPlay
