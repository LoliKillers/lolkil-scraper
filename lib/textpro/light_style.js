const axios = require('axios');
const cheerio = require('cheerio');
const FormData = require('form-data');

var listUrl = {
  gradient_neon_light: 'https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html',
  neon_light_blackpink_logo: 'https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html',
  summer_neon_light: 'https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html',
  light_glow_sliced: 'https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html',
  neon_light_glitch: 'https://textpro.me/neon-light-glitch-text-generator-online-1063.html',
  neon_light_on_brick_wall: 'https://textpro.me/create-neon-light-on-brick-wall-online-1062.html',
  thunder_text_effect: 'https://textpro.me/online-thunder-text-effect-generator-1031.html',
  neon_light_text_3d: 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html',
  impressive_glitch: 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html',
  glitch_text_effect: 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html',
  neon_devil_wings: 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html',
  technology_neon_light: 'https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html',
  galaxy_style: 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html',
  holographic_3d: 'https://textpro.me/holographic-3d-text-effect-975.html',
  neon_text_effect: 'https://textpro.me/neon-text-effect-online-963.html',
};

var listType = ['neon_text_effect','holographic_3d','galaxy_style','technology_neon_light','neon_devil_wings','glitch_text_effect','impressive_glitch','neon_light_text_3d','thunder_text_effect','neon_light_on_brick_wall','neon_light_glitch','light_glow_sliced','summer_neon_light','neon_light_blackpink_logo', 'gradient_neon_light'];

async function LightStyle(Type, text) {
  var type = Type.toLowerCase();
  if (!type) throw reject(new Error('Parameter type tidak boleh kosong!'));
  if (!text) throw reject(new Error('Parameter text tidak boleh kosong!'));
  if (!listType.includes(type)) throw reject(new Error(`tipe ${type} tidak terdaftar!`));
  return new Promise(async(resolve, reject) => {
    axios({
      url: listUrl[type],
      method: 'get',
      headers: {
        'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
      }
    })
    .then(data => {
      const $ = cheerio.load(data.data);
      const form = new FormData();
      form.append('text[]',text);
      form.append('submit','Go');
      form.append('token',$('#token').val());
      form.append('build_server',$('#build_server').val());
      form.append('build_server_id',$('#build_server_id').val());
      axios({
        url: listUrl[type],
        method: 'POST',
        data: form,
        headers: {
          'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
      })
      .then(data =>{
        const $ = cheerio.load(data.data);
        const _data = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(data.data);
        axios({
          url: 'https://textpro.me/effect/create-image',
          method: 'POST',
          data: new URLSearchParams(JSON.parse(_data[1].replace(/\[/g,'').replace(/\]/g,'').replace(/text/g,'text[]').replace(/text\[\]pro\.me/g,'textpro.me'))),
          headers: {
            'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
          }
        })
        .then(data => {
          const result = {
            result: {
              img: 'https://textpro.me' + data.data.image
            }
          };
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
      })
      .catch(error => {
        reject(error);
      });
    });
  });
}
module.exports.LightStyle = LightStyle;