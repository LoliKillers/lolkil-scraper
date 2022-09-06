const axios = require('axios');
const cheerio = require('cheerio');

async function PornHubSearch(query) {
  return new Promise(async(resolve, reject) => {
    if (!query) throw new Error({ coder: 'Loli Killers', error: { message: `masukkan parameter search/pencarian` }});
    axios.get(`https://www.pornhub.com/video/search?search=${query}`)
    .then(async({data}) => {
      const $ = cheerio.load(data);
      var res = [];
      var result = {};
      result.coder = 'Loli Killers';
      result.result = res;
      $('ul.videos > li.pcVideoListItem > div.wrap').each(async function(a, b) {
        var _Title = $(b).find('img').attr('alt');
        var _Thumbnail = $(b).find('img').attr('data-src');
        var _Link = $(b).find('a:nth-child(2)').attr('href').replace('javascript:void(0)', '');
        var _Duration = $(b).find('div.js-noFade > var').text();
        var _ChannelUsername = $(b).find('div.thumbnail-info-wrapper > div.videoUploaderBlock > div.usernameWrap > a').text().trim();
        var _channelUrl = $(b).find('div.thumbnail-info-wrapper > div.videoUploaderBlock > div.usernameWrap > a').attr('href');
        function _ChanelUrl() {
          if (_channelUrl === undefined) {
            return 'https://www.pornhub.com';
          } else {
            return 'https://www.pornhub.com' + _channelUrl;
          }
        }
        var _Views = $(b).find('div.thumbnail-info-wrapper > div.videoDetailsBlock > div > span.views > var').text();
        var _Publish = $(b).find('div.thumbnail-info-wrapper > div.videoDetailsBlock > var').text();
        var object = {
          title: _Title,
          thumbnail: _Thumbnail,
          link: 'https://www.pornhub.com' + _Link,
          duration: _Duration,
          views: _Views,
          publish: _Publish,
          channelUsername: _ChannelUsername,
          channelUrl: _ChanelUrl()
        };
        await res.push(object);
      });
      resolve(result);
    });
  });
}
module.exports.PornHubSearch = PornHubSearch