const scrapy = require('node-scrapy')
const fetch = require("node-fetch");
const url = 'https://kbbi.kemdikbud.go.id/entri/';

const Kbbi = (text) => new Promise((resolve, reject) => {
	if(!text || text == undefined) return reject({
		code : 400,
		description : 'Value kata is null or undefined'
	});
	try{
		var  model = {
			lema: 'h2',
			arti: ['ol li', 'ul.adjusted-par']
		}
		var text2 = text;
		fetch(url +text)
			.then((res) => res.text())
			.then((body) => {
				var log = scrapy.extract(body, model)
				if(log.arti == null){
					model = {
						lema: 'h2',
						arti: ['ul.adjusted-par']
					}
					fetch(url + text2)
						.then((res) => res.text())
						.then((body) => {
							log = scrapy.extract(body, model)
							if(log.arti != null)
							{
								var text3 = log.arti.map(s => s.slice(1).split("  ").join(""));
								resolve({
									lema: log.lema,
									arti: text3
								})
							}
							else{reject("Arti Tidak Ada Atau IP Terkena Limit");}
						})
				}
				else
        {
          var tek =  log.text.map(s => s.slice(1).split("  ").join(""));
          resolve({
            lema: log.lema,
            arti: tek
          })
        }
			})
	} catch(err){
		reject(err)
	}
})

module.exports.Kbbi= Kbbi