const cheerio = require("cheerio")
const axios = require("axios")
const qs = require("qs")
const request = require("request")

function IgStalk(username){
	return new Promise((resolve,reject) => {
		axios.get('https://www.instagram.com/'+ username +'/?__a=1',{
			method: 'GET',
			headers: {
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
				"cookie": "mid=XBXl1AALAAEbFoAEfNjZlMMG9dwX; ig_did=91E66A48-5AA2-445D-BFE6-84DC4456DE8F; fbm_124024574287414=base_domain=.instagram.com; ig_nrcb=1; shbid=\"12737\0544008624962\0541656157971:01f72a5102dc07af6845adf923ca70eb86e81ab95fa9dbfdaf157c9eef0e82fd1f10fe23\"; shbts=\"1624621971\0544008624962\0541656157971:01f74841fba8e77a0066b47ea891dec8fba6fdf9216c0816f9fb3532292f769828800ae2\"; fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ; fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ; csrftoken=PpiPMEl0R2pAwThsw4NXynO6cVIXHZDo; ds_user_id=38316792800; sessionid=38316792800:rQj5Tr3g5zkg7b:4; rur=\"RVA\05438316792800\0541656158332:01f759cf624bef147397144805bb4c26f6c8b36a232e0f5738c570ee492f6b629f84f6e5\""
			}
		})
		.then(({ data }) => {
			const user = data.graphql.user
			let result = {
			  code: 200,
			  message: 'success',
				coded_by: '@ariasu.xyz',
				date: Date(),
        id: user.id,
        bio: user.biography,
        external_url: user.external_url,
        external_url_linkshimmed: user.external_url_linkshimmed,
        followers: user.edge_followed_by.count,
        following: user.edge_follow.count,
        fullname: user.full_name,
        highlight_count: user.highlight_reel_count,
        is_business_account: user.is_business_account,
        is_recent_user: user.is_joined_recently,
        account_category: user.business_category_name,
        facebook_page: user.connected_fb_page,
        is_private: user.is_private,
        is_verified: user.is_verified,
        profile_pic: user.profile_pic_url_hd,
        username: user.username,
        posts_count: user.edge_owner_to_timeline_media.count
			}
		  resolve(result)
		})
	.catch(reject)
	})
}

async function IgStory(username){
	return new Promise(async(resolve, reject) => {
		axios.request({
			url: 'https://www.instagramsave.com/instagram-story-downloader.php',
			method: 'GET',
			headers:{
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
			}
		})
		.then(({ data }) => {
			const x = cheerio.load(data)
			const _token = x('#token').attr('value')
			let config ={
				headers: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
					"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
					"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
				data: {
					'url':'https://www.instagram.com/'+ username,
					'action': 'story',
					'token': _token
				}
			}
      axios.post('https://www.instagramsave.com/system/action.php',qs.stringify(config.data), { headers: config.headers })
      .then(({ data }) => {
        resolve(data.medias)
      })
		})
	  .catch(reject)
	})
}

function IgDl(url){
	return new Promise(async(resolve, reject) => {
		axios.request({
			url: 'https://www.instagramsave.com/download-instagram-videos.php',
			method: 'GET',
			headers:{
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
			}
		})
		.then(({ data }) => {
			const x = cheerio.load(data)
			const token = x('#token').attr('value')
			let config ={
				headers: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
					"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
					"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
				data: {
					'url': url,
					'action': 'post',
					'token': token
				}
			}
      axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), { headers: config.headers })
      .then(({ data }) => {
        resolve(data.medias)
		  })
		})
    .catch(reject)
	})
}

async function Pinterest(query){
	return new Promise(async(resolve,reject) => {
  axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + query, {
    headers: {
      "cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
	}).then(({ data }) => {
	  const x = cheerio.load(data)
		const result = [];
		const _output = [];
    x('div > a').get().map(z => {
      const _url = x(z).find('img').attr('src')
      result.push(_url)
		});
    result.forEach(y => {
		  if(y == undefined) return
		  _output.push(y.replace(/236/g,'736'))
	  })
		_output.shift();
		resolve(_output)
		})
	})
}

async function TiktokDl(url) {
  return new Promise(async (resolve, reject) => {
    axios.get('https://ttdownloader.com/', {
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
      }
    })
    .then(({ data }) => {
      const $ = cheerio.load(data)
      let token = $('#token').attr('value')
      let config = {
        'url': url,
        'format': '',
        'token': token
      }
      axios('https://ttdownloader.com/req/', {
        method: 'POST',
        data: new URLSearchParams(Object.entries(config)),
        headers: {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
        }
      })
      .then(({ data }) => {
        const $ = cheerio.load(data)
        resolve({
          code: 200,
          message: 'success',
          coded_by: '@ariasu.xyz',
          tiktok_no_wm: $('div:nth-child(2) > div.download > a').attr('href'),
          tiktok_wm: $('div:nth-child(3) > div.download > a').attr('href'),
          tiktok_audio: $('div:nth-child(4) > div.download > a').attr('href')
        })
      })
    })
    .catch(reject)
  })
}

function Chara(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://www.wallpaperflare.com/search?wallpaper='+ query,{
			headers: {
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "_ga=GA1.2.863074474.1624987429; _gid=GA1.2.857771494.1624987429; __gads=ID=84d12a6ae82d0a63-2242b0820eca0058:T=1624987427:RT=1624987427:S=ALNI_MaJYaH0-_xRbokdDkQ0B49vSYgYcQ"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			$('#gallery > li > figure > a').each(function(a, b) {
				result.push($(b).find('img').attr('data-src'))
			})
			resolve(result)
		})
	.catch({status: 'err'})
	})
}

function Otaku(query){
	return new Promise(async(resolve, reject) => {
  	axios.get('https://otakudesu.moe/?s=' + query + '&post_type=anime')
  	.then(({ data }) => {
    	const $ = cheerio.load(data)
    	const result = {};
    	let limk = $('#venkonten > div > div.venser > div > div > ul > li:nth-child(1) > h2 > a').attr('href')
    	axios.get(limk).then(({ data }) => {
      	const $$ = cheerio.load(data)
      	result.code = 200
       	result.message = 'success'
      	result.coded_by = '@ariasu.xyz'
      	result.date = Date()
      	result.img = $$('#venkonten > div.venser > div.fotoanime').find('img').attr('src')
      	$$('#venkonten > div.venser > div.fotoanime > div.infozin > div').each(function(a, b) {
      		result.title = $$(b).find('p:nth-child(1)').text().replace('Judul: ','')
      		result.jepang = $$(b).find('p:nth-child(2)').text().replace('Japanese: ','')
      		result.rate = $$(b).find('p:nth-child(3)').text().replace('Skor: ','')
      		result.produser = $$(b).find('p:nth-child(4)').text().replace('Produser: ','')
      		result.type = $$(b).find('p:nth-child(5)').text().replace('Tipe: ','')
      		result.status = $$(b).find('p:nth-child(6)').text().replace('Status: ','')
      		result.episode = $$(b).find('p:nth-child(7)').text().replace('Total Episode: ','')
      		result.durasi = $$(b).find('p:nth-child(8)').text().replace('Durasi: ','')
      		result.rilis = $$(b).find('p:nth-child(9)').text().replace('Tanggal Rilis: ','')
      		result.studio = $$(b).find('p:nth-child(10)').text().replace('Studio: ','')
      		result.genre = $$(b).find('p:nth-child(11)').text().replace('Genre: ','')
      		result.desc = $$('#venkonten > div.venser > div.fotoanime > div.sinopc').text().replace('.','\n') + $$(b).find('div.sinopc > p:nth-child(2)').text()
      		result.batch = $$('#venkonten > div.venser > div:nth-child(10) > ul > li > span:nth-child(1) > a').attr('href')
      	})
      	const lim = $$('#venkonten > div.venser > div:nth-child(10) > ul > li > span:nth-child(1) > a').attr('href')
      	axios.get(lim).then(({ data }) => {
        	const $$$ = cheerio.load(data)
      		result.batchSD = $$$('#venkonten > div:nth-child(6) > ul > li:nth-child(1) > a:nth-child(3)').attr('href')
      		result.batchHD = $$$('#venkonten > div:nth-child(6) > ul > li:nth-child(3) > a:nth-child(3)').attr('href')
	      	resolve(result)
				})
			})
		})
  	.catch(reject)
	})
}

function GhStalk(username) {
	return new Promise(async(resolve, reject) => {
    url = `https://api.github.com/users/${username}`; 
    return axios.get(url)
    .then(data => {
      const user = data.data
      const usr = data.headers
      let result = {
        code: 200,
        message: 'success',
        coded_by: '@ariasu.xyz',
        date: Date(),
        result: {
          login: user.login,
          id: user.id,
          node_id: user.node_id,
          avatar_url: user.avatar_url,
          gravatar_id: user.gravatar_id,
          url: user.url,
          html_url: user.html_url,
          followers_url: user.followers_url,
          following_url: user.following_url,
          gists_url: user.gists_url,
          starred_url: user.starred_url,
          subscriptions_url: user.subscriptions_url,
          organizations_url: user.organizations_url,
          repos_url: user.repos_url,
          events_url: user.events_url,
          received_events_url: user.received_events_url,
          type: user.type,
          site_admin: user.site_admin,
          site_admin: user.site_admin,
          name: user.name,
          company: user.company,
          blog: user.blog,
          location: user.location,
          url: user.url,
          hireable: user.hireable,
          bio: user.bio,
          twitter_username: user.twitter_username,
          public_repos: user.public_repos,
          public_gists: user.public_gists,
          followers: user.followers,
          following: user.following,
          created_at: user.created_at,
          updated_at: user.updated_at
        },
        headers: {
          server: usr.server,
          vary: usr.vary,
          etag: usr.etag,
          connection: usr.connection
        }
      }
      resolve(result)
    })
    .catch(reject)
  })
}

async function Emoji2Img(emoticon) {
  const emojii = encodeURI(`${emoticon}`)
  var link = await axios.get(`https://emojipedia.org/${emojii}/`)
  var $ =cheerio.load(link.data)
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
  }
  return result
}

function ModDroid(query) {
  return new Promise((resolve, reject) => {
    axios.get(`https://moddroid.com/?s=${query}`).then( tod => {
      const $ = cheerio.load(tod.data)
      hasil = []
      $("div.col-12.col-md-6.mb-4").each(function(c, d) {
        link = $(d).find("a.d-flex.position-relative.archive-post").attr('href');
        name = $(d).find("div > h3.h5.font-weight-semibold.text-truncate.text-primary.w-100").text().trim();
        img = $(d).find("div.flex-shrink-0.mr-2 > img").attr('src');
        desc = $(d).find("div.text-truncate.text-muted > span.align-middle").text();
        const Data = {
          img: img,
          name: name,
          desc: desc,
          link: link
        }
        hasil.push(Data)
      })
      resolve(hasil)
    }).catch(reject)
  });
}

function PalingMurah(query) {
  return new Promise((resolve, reject) => {
    axios.get(`https://palingmurah.net/pencarian-produk/?term=${query}`).then(async tod => {
      const $ = cheerio.load(tod.data)
      hasil = []
      $("div.ui.card.wpj-card-style-2").each(function(c, d) {
        name = $(d).find("div.content.wpj-small.list-70-right > a.list-header").text().trim();
        link = $(d).find("div.content.wpj-small.list-70-right > a.list-header").attr('href');
        img = $(d).find("div.card-image-helper > img").attr('data-src');
        harga = $(d).find("div.flex-master.card-job-price.text-right.text-vertical-center").text().trim();
        usernamepenjual = $(d).find("strong").text().trim();
        linkpenjual = $(d).find("a.ui.wpj-big.avatar.image").attr('href');
        iconpenjual = $(d).find("a.ui.wpj-big.avatar.image > img").attr('data-src');
        const Data = {
          name: name,
          harga: harga,
          img: img,
          link: link,
          usernamepenjual: usernamepenjual,
          linkpenjual: linkpenjual,
          iconpenjual: iconpenjual
        }
        hasil.push(Data)
      })
      resolve(hasil)
    }).catch(reject)
  });
}

function ApkMody(query) {
  return new Promise((resolve, reject) => {
    axios.get(`https://apkmody.io/?s=${query}`).then( tod => {
      const $ = cheerio.load(tod.data)
      hasil = []
      $("div.flex-item").each(function(c, d) {
        name = $(d).find("div.card-title > h2.truncate").text();
        desc = $(d).find("div.card-body > p.card-excerpt.has-small-font-size.truncate").text().trim();
        img = $(d).find("div.card-image > img").attr('src');
        link = $(d).find("article.card.has-shadow.clickable > a").attr('href');
        const Data = {
          img: img,
          name: name,
          desc: desc,
          link: link
        }
        hasil.push(Data)
      })
      resolve(hasil)
    }).catch(reject)
  });
}

function KompasNews() {
  return new Promise((resolve, reject) => {
    axios.get(`https://news.kompas.com/`).then( tod => {
      const $ = cheerio.load(tod.data)
      hasil = []
      $("div.col-bs9-3").each(function(c, d) {
        title = $(d).find("h3.article__title > a.article__link").text()
        desc = $(d).find("div.article__lead").text().trim()
        date = $(d).find("div.article__date").text().trim()
        link = $(d).find("h3.article__title > a.article__link").attr('href')
        const Data = {
          title: title,
          desc: desc,
          date: date,
          link: link
        }
        hasil.push(Data)
      })
      resolve(hasil)
    }).catch(reject)
  })
}

function TribunNews() {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.tribunnews.com/news`).then( tod => {
      const $ = cheerio.load(tod.data)
      hasil = []
      $("li.p1520.art-list.pos_rel").each(function(c, d) {
        title = $(d).find("div.mr140 > h3 > a.f20.ln24.fbo.txt-oev-2").text().trim()
        thumb = $(d).find("div.fr.mt5.pos_rel > a > img.shou2.bgwhite").attr('src')
        desc = $(d).find("div.grey2.pt5.f13.ln18.txt-oev-3").text().trim()
        date = $(d).find("div.grey.pt5 > time.foot.timeago").text().trim()
        link = $(d).find("div.fr.mt5.pos_rel > a").attr('href')
        const Data = {
          title: title,
          thumb: thumb,
          desc: desc,
          date: date,
          link: link
        }
        hasil.push(Data)
      })
      resolve(hasil)
    }).catch(reject)
  })
}

function JalanTikus(query) {
  return new Promise((resolve, reject) => {
    axios.get(`https://jalantikus.com/search/articles/${query}/`).then( tod => {
      const $ = cheerio.load(tod.data)
      hasil = []
      $("div.post-block-with-category").each(function(c, d) {
        title = $(d).find("a.post-block-with-category__link").text()
        category = $(d).find("a.post-info__category-link").text()
        date = $(d).find("time").text()
        link = `https://jalantikus.com${$(d).find("a").attr('href')}`
        const Data = {
          title: title,
          category: category,
          date: date,
          link: link
        }
        hasil.push(Data)
      })
      resolve(hasil)
    }).catch(reject)
  })
}

function Hoax() {
  return new Promise((resolve, reject) => {
    axios.get(`https://turnbackhoax.id/`).then( tod => {
      const $ = cheerio.load(tod.data)
      hasil = []
      $("figure.mh-loop-thumb").each(function(a, b) {
        $("div.mh-loop-content.mh-clearfix").each(function(c, d) {
          link = $(d).find("h3.entry-title.mh-loop-title > a").attr('href');
          img = $(b).find("img.attachment-mh-magazine-lite-medium.size-mh-magazine-lite-medium.wp-post-image").attr('src');
          title = $(d).find("h3.entry-title.mh-loop-title > a").text().trim();
          desc = $(d).find("div.mh-excerpt > p").text().trim();
          date = $(d).find("span.mh-meta-date.updated").text().trim();
          const Data = {
            title: title,
            thumbnail: img,
            desc: desc,
            date: date,
            link: link
          }
          hasil.push(Data)
        })
      })
      resolve(hasil)
    }).catch(reject)
  });
}

function HappyMod(query) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
      const $ = cheerio.load(tod.data)
      hasil = []
      $("div.pdt-app-box").each(function(c, d) {
        name = $(d).find("a").text().trim();
        icon = $(d).find("img.lazy").attr('data-original');
        link = $(d).find("a").attr('href');
        link2 = `https://www.happymod.com${link}`
        const Data = {
          icon: icon,
          name: name,
          link: link2
        }
        hasil.push(Data)
      })
      resolve(hasil);
    }).catch(reject)
  });
}

function ServerMc() {
  return new Promise((resolve, reject) => {
    axios.get(`https://minecraftpocket-servers.com/country/indonesia/`).then( tod => {
      const $ = cheerio.load(tod.data)
      hasil = []
      $("tr").each(function(c, d) {
        ip = $(d).find("button.btn.btn-secondary.btn-sm").eq(1).text().trim().replace(':19132', '')
        port = '19132'
        versi = $(d).find("a.btn.btn-info.btn-sm").text()
        player = $(d).find("td.d-none.d-md-table-cell > strong").eq(1).text().trim()
        const Data = {
          ip: ip,
          port: port,
          versi: versi,
          player: player
        }
        hasil.push(Data)
      })
      resolve(hasil)
    }).catch(reject)
  })
}

function Gempa() {
  return new Promise((resolve, reject) => {
    axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {
      const $ = cheerio.load(response.data)
      const urlElems = $('table.table-hover.table-striped')
      for (let i = 0; i < urlElems.length; i++) {
        const urlSpan = $(urlElems[i]).find('tbody')[0]
        if (urlSpan) {
          const urlData = $(urlSpan).find('tr')[0]
          var Kapan = $(urlData).find('td')[1]
          var Letak = $(urlData).find('td')[2]
          var Magnitudo = $(urlData).find('td')[3]
          var Kedalaman = $(urlData).find('td')[4]
          var Wilayah = $(urlData).find('td')[5]
          var lintang = $(Letak).text().split(' ')[0]
          var bujur = $(Letak).text().split(' ')[2]
          var hasil = {
            Waktu: $(Kapan).text(),
            Lintang: lintang,
            Bujur: bujur,
            Magnitudo: $(Magnitudo).text(),
            Kedalaman: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
            Wilayah: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-','').replace(/\r/g, '').split('\n')[0],
            Map: ''
          }
          resolve(hasil);
        }
      }
    })
  })
}

async function KodePos(kota) {
    return new Promise(async (resolve, reject) => {
      let postalcode = 'https://carikodepos.com/';
      let url = postalcode+'?s='+kota;
      await request.get({
        headers: {
          'Accept': 'application/json, text/javascript, */*;',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4209.3 Mobile Safari/537.36',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
          'Origin': postalcode,
          'Referer': postalcode
        },
        url: url,
      }, function(error, response, body) {
        if (error) return reject(error);
        let $ = cheerio.load(body);
        var search = $('tr');
        if (!search.length) return reject('No result could be found');
        var results = [];
        search.each(function(i) {
          if (i != 0) {
            var td = $(this).find('td');
            var result = {};
            td.each(function(i) {
              var value = $(this).find('a').html();
              var key = (i == 0) ? 'province' : (i == 1) ? 'city' : (i == 2) ? 'subdistrict' : (i == 3) ? 'urban' : 'postalcode';
              result[key] = value;
            })
            results.push(result);
          }
        });
        return resolve(results);
      });
    });
};

function PlayStore(query){
	return new Promise((resolve, reject) => {
    axios.get('https://play.google.com/store/search?q='+ query +'&c=apps')
      .then(({ data }) => {
	      const $ = cheerio.load(data)
      	let ln = [];
      	let nm = [];
      	let dv = [];
      	let lm = [];
      	const result = [];
      	$('div.wXUyZd > a').each(function(a,b){
          const link = 'https://play.google.com' + $(b).attr('href')
          ln.push(link);
      	})
      	$('div.b8cIId.ReQCgd.Q9MA7b > a > div').each(function(d,e){
          const name = $(e).text().trim()
          nm.push(name);
      	})
      	$('div.b8cIId.ReQCgd.KoLSrc > a > div').each(function(f,g){
          const dev = $(g).text().trim();
          dv.push(dev)
      	})
      	$('div.b8cIId.ReQCgd.KoLSrc > a').each(function(h,i){
          const limk = 'https://play.google.com' + $(i).attr('href');
          lm.push(limk);
      	})	
        for (let i = 0; i < ln.length; i++){
        	result.push({
            name: nm[i],
            link: ln[i],
            developer: dv[i]
        	})
      	}
        resolve(result)
      })
    	.catch(reject)
	})
}

function TebakGambar() {
 	return new Promise(async(resolve, reject) => {
    axios.get('https://jawabantebakgambar.net/all-answers/')
      .then(({ data }) => {
        const $ = cheerio.load(data)
        const result = [];
        let random = Math.floor(Math.random() * 2836) + 2;
        let link2 = 'https://jawabantebakgambar.net'
        $(`#images > li:nth-child(${random}) > a`).each(function(a, b) {
          const img = link2 + $(b).find('img').attr('data-src')
          const jwb = $(b).find('img').attr('alt')
          result.push({
            code: 200,
            message: 'success',
            coded_by: '@ariasu.xyz',
            date: Date(),
            result: {
            	thumb: img,
            	jawaban: jwb
            }
          })
        	resolve(result)
        })
    	})
      .catch(reject)
	})
}

module.exports.Chara = Chara
module.exports.IgStalk = IgStalk
module.exports.IgStory = IgStory
module.exports.IgDl = IgDl
module.exports.Pinterest = Pinterest
module.exports.TiktokDl = TiktokDl
module.exports.Otaku = Otaku
module.exports.GhStalk = GhStalk
module.exports.Emoji2Img = Emoji2Img
module.exports.ModDroid = ModDroid
module.exports.PalingMurah = PalingMurah
module.exports.ApkMody = ApkMody
module.exports.KompasNews = KompasNews
module.exports.TribunNews = TribunNews
module.exports.JalanTikus = JalanTikus
module.exports.Hoax = Hoax
module.exports.HappyMod = HappyMod
module.exports.ServerMc = ServerMc
module.exports.Gempa = Gempa
module.exports.KodePos = KodePos
module.exports.PlayStore = PlayStore
module.exports.TebakGambar = TebakGambar