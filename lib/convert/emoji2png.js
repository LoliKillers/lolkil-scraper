const axios = require('axios');
const cheerio = require('cheerio');

async function Emoji2Png(emoji) {
  return new Promise(async(resolve, reject) => {
    try {
      const _emoji = encodeURI(emoji);
      const __emoji = await axios.get(`https://emojipedia.org/${_emoji}/`);
      const $ = cheerio.load(__emoji.data);
      var apple = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(1) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var google = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(2) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var samsung = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(3) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var microsoft = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(4) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var whatsapp = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(5) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var twitter = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(6) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var facebook = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(7) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var jooxpixel = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(8) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var openmoji = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(9) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var emojidex = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(10) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var messager = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(11) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var LG = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(12) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var HTC = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(13) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var mozilla = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(14) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var softbank = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(15) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var docomo = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(16) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      var KDDI = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(17) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
      const result = {
        result: {
          apple: apple.replace('120', '240'),
          google: google.replace('120', '240'),
          samsung: samsung.replace('120', '240'),
          microsoft: microsoft.replace('120', '240'),
          whatsapp: whatsapp.replace('120', '240'),
          twitter: twitter.replace('120', '240'),
          facebook: facebook.replace('120', '240'),
          jooxPixel: jooxpixel.replace('120', '240'),
          openemoji: openmoji.replace('120', '240'),
          emojidex: emojidex.replace('120', '240'),
          messanger: messager.replace('120', '240'),
          LG: LG.replace('120', '240'),
          HTC: HTC.replace('120', '240'),
          mozilla: mozilla.replace('120', '240'),
          softbank: softbank.replace('120', '240'),
          docomo: docomo.replace('120', '240'),
          KDDI: KDDI.replace('120', '240')
        },
        warning: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
      };
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
module.exports.Emoji2Png = Emoji2Png