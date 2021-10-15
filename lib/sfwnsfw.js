const https = require('https');
const sfwEndpoints = ['ngif', 'smug', 'cuddle', 'avatar', 'slap', 'pat', 'poke', 'feed', 'fox_girl', 'neko', 'eron', 'baka', 'kemonomimi', 'hug', 'kiss', 'wallpaper', 'tickle', 'waifu'];
const nsfwEndpoints = ['lewdk', 'futanari', 'anal', 'pussy_jpg', 'lewd', 'trap', 'ero', 'solog', 'lewdkemo', 'solo', 'cum', 'les', 'hololewd', 'holo', 'tits', 'nsfw_neko_gif', 'eroyuri', 'holoero', 'pussy', 'Random_hentai_gif', 'yuri', 'keta', 'hentai', 'feetg','erok', 'cum_jpg', 'nsfw_avatar', 'erofeet', 'blowjob', 'spank', 'kuni', 'classic', 'femdom', 'boobs'];

async function Sfw(endpoint) {
	if (!sfwEndpoints.includes(endpoint)) throw new TypeError(`Unknown Endpoint: Specified SFW endpoint not found.`);
	const body = await get(endpoint);
	if (!body) return console.warn(`API ERROR: There are a problem found while requesting to the api.`);
	return body;
}

async function Nsfw(endpoint) {
	if (!nsfwEndpoints.includes(endpoint)) throw new TypeError(`Unknown Endpoint: Specified NSFW endpoint not found.`);
	const body = await get(endpoint);
	if (!body) return console.warn(`API ERROR: There are a problem found while requesting to the api.`);
	return body;
}

async function get(endpoint) {
	if (!endpoint) throw new TypeError(`Failed Endpoint: An endpoint is required to complete the url.`);
	if (typeof endpoint !== 'string') throw new TypeError(`Bad Endpoint: Specified endpoint isn't a valid string endpoint,`)
	
	return new Promise((res, rej) => {
		return https.get(`https://nekos.life/api/v2/img/${endpoint}`, (got) => {
			let data = '';
			got.on('data', (chunk) => {
				data += chunk; 
			});
			got.on('end', () => {
				return res(JSON.parse(data).url)
			})
			got.on('error', (err) => console.error(err))
		}).on('error', (err) => console.log(err));
	})
}

module.exports.Sfw = Sfw
module.exports.Nsfw = Nsfw