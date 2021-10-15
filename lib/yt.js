const ytc = require("ytdl-core")
const yts = require("yt-search")

async function YtdlMp3(url) {
  return new Promise((resolve, reject) => {
    try {
      const _id = ytc.getVideoID(url)
      const _info = ytc.getInfo(`https://www.youtube.com/watch?v=${_id}`)
      .then((data) => {
        let _formats = data.formats
        let _audio = []
        for (let x = 0; x < _formats.length; x++) {
          if (_formats[x].mimeType == 'audio/webm; codecs=\"opus\"') {
            let _yt = _formats[x]
            _audio.push(_yt.url)
          }
        }
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
        const description = data.player_response.microformat.playerMicroformatRenderer.description.simpleText
        const lengthSeconds = data.player_response.microformat.playerMicroformatRenderer.lengthSeconds
        const ownerProfileUrl = data.player_response.microformat.playerMicroformatRenderer.ownerProfileUrl
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
        const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
        const category = data.player_response.microformat.playerMicroformatRenderer.category
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
        const externalChannelId = data.player_response.microformat.playerMicroformatRenderer.externalChannelId
        const result = {
          code: 200,
          message: 'success',
          coded_by: '@ariasu.xyz',
          title: title,
          description: description,
          length_seconds: lengthSeconds,
          owner_rofile_url: ownerProfileUrl,
          external_channel_id: externalChannelId,
          thumb: thumb,
          channel: channel,
          published: published,
          views: views,
          category: category,
          url: _audio[1]
        }
        return(result)
      })
      resolve(_info)
    } catch (error) {
        reject(error);
      }
      console.log(error)
  })
}

async function YtdlMp4(url) {
  return new Promise((resolve, reject) => {
    try {
      const _id = ytc.getVideoID(url)
      const _info = ytc.getInfo(`https://www.youtube.com/watch?v=${_id}`)
      .then((data) => {
        let _formats = data.formats
        let _video = []
        for (let x = 0; x < _formats.length; x++) {
          if (_formats[x].container == 'mp4' && _formats[x].hasVideo == true && _formats[x].hasAudio == true) {
            let _vid = _formats[x]
            _video.push(_vid.url)
          }
        }
        
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
        const description = data.player_response.microformat.playerMicroformatRenderer.description.simpleText
        const lengthSeconds = data.player_response.microformat.playerMicroformatRenderer.lengthSeconds
        const ownerProfileUrl = data.player_response.microformat.playerMicroformatRenderer.ownerProfileUrl
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
        const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
        const category = data.player_response.microformat.playerMicroformatRenderer.category
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
        const externalChannelId = data.player_response.microformat.playerMicroformatRenderer.externalChannelId
        
        const result = {
          code: 200,
          message: 'success',
          coded_by: '@ariasu.xyz',
          title: title,
          description: description,
          length_seconds: lengthSeconds,
          owner_rofile_url: ownerProfileUrl,
          external_channel_id: externalChannelId,
          thumb: thumb,
          channel: channel,
          published: published,
          views: views,
          category: category,
          url: _video[0]
        }
        return(result)
      })
      resolve(_info)
    } catch (error) {
        reject(error);
      }
      console.log(error)
  })
}

async function YtPlayMp3(query) {
  return new Promise((resolve, reject) => {
    try {
      const search = yts(query)
      .then((data) => {
        const _url = []
        const _formats = data.all
        for (let x = 0; x < _formats.length; x++) {
          if (_formats[x].type == 'video') {
            let _output = _formats[x]
            _url.push(_output.url)
          }
        }
        const _id = ytc.getVideoID(_url[0])
        const _info = ytc.getInfo(`https://www.youtube.com/watch?v=${_id}`)
        .then((data) => {
          let _formats = data.formats
          let _audio = []
          let _video = []
          for (let x = 0; x < _formats.length; x++) {
            if (_formats[x].mimeType == 'audio/webm; codecs=\"opus\"') {
              let _output = _formats[x]
              _audio.push(_output.url)
            }
          }
          const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
          const description = data.player_response.microformat.playerMicroformatRenderer.description.simpleText
          const lengthSeconds = data.player_response.microformat.playerMicroformatRenderer.lengthSeconds
          const ownerProfileUrl = data.player_response.microformat.playerMicroformatRenderer.ownerProfileUrl
          const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
          const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
          const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
          const category = data.player_response.microformat.playerMicroformatRenderer.category
          const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
          const externalChannelId = data.player_response.microformat.playerMicroformatRenderer.externalChannelId
          const result = {
            code: 200,
            message: 'success',
            coded_by: '@ariasu.xyz',
            title: title,
            description: description,
            length_seconds: lengthSeconds,
            owner_rofile_url: ownerProfileUrl,
            external_channel_id: externalChannelId,
            thumb: thumb,
            channel: channel,
            published: published,
            views: views,
            category: category,
            url: _audio[0]
          }
          return(result)
        })
        return(_info)
      })
      resolve(search)
    } catch (error) {
      reject(error)
    }
    console.log(error)
  })
}

async function YtPlayMp4(query) {
  return new Promise((resolve, reject) => {
    try {
      const search = yts(query)
      .then((data) => {
        const _url = []
        const _formats = data.all
        for (let x = 0; x < _formats.length; x++) {
          if (_formats[x].type == 'video') {
            let _output = _formats[x]
            _url.push(_output.url)
          }
        }
        const _id = ytc.getVideoID(_url[0])
        const _info = ytc.getInfo(`https://www.youtube.com/watch?v=${_id}`)
        .then((data) => {
          let _formats = data.formats
          let _video = []
          for (let x = 0; x < _formats.length; x++) {
            if (_formats[x].container == 'mp4' && _formats[x].hasVideo == true && _formats[x].hasAudio == true) {
              let _output = _formats[x]
              _video.push(_output.url)
            }
          }
          const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
          const description = data.player_response.microformat.playerMicroformatRenderer.description.simpleText
          const lengthSeconds = data.player_response.microformat.playerMicroformatRenderer.lengthSeconds
          const ownerProfileUrl = data.player_response.microformat.playerMicroformatRenderer.ownerProfileUrl
          const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
          const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
          const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
          const category = data.player_response.microformat.playerMicroformatRenderer.category
          const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
          const externalChannelId = data.player_response.microformat.playerMicroformatRenderer.externalChannelId
          const result = {
            code: 200,
            message: 'success',
            coded_by: '@ariasu.xyz',
            title: title,
            description: description,
            length_seconds: lengthSeconds,
            owner_rofile_url: ownerProfileUrl,
            external_channel_id: externalChannelId,
            thumb: thumb,
            channel: channel,
            published: published,
            views: views,
            category: category,
            url: _video[0]
          }
          return(result)
        })
        return(_info)
      })
      resolve(search)
    } catch (error) {
      reject(error)
    }
    console.log(error)
  })
}

async function YtSearch(query) {
  return new Promise((resolve, reject) => {
    try {
      const search = yts(query)
      .then((data) => {
        res = data.all
        return res
      })
      resolve(search)
    } catch (error) {
      reject(error)
    }
    console.log(error)
  })
}

module.exports.YtdlMp3 = YtdlMp3
module.exports.YtdlMp4 = YtdlMp4
module.exports.YtPlayMp3 = YtPlayMp3
module.exports.YtPlayMp4 = YtPlayMp4
module.exports.YtSearch = YtSearch