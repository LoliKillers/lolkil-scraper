const axios = require('axios');
const cheerio = require('cheerio');
const FormData = require('form-data');

async function gradientNeonLightText(text) {
  if (!text) throw reject(new Error('Parameter text tidak boleh kosong!'));
  return new Promise(async(resolve, reject) => {
    axios({
      url: 'https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html',
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
        url: 'https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html',
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

module.exports.gradientNeonLightText = gradientNeonLightText;