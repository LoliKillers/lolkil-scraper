# lolkil-scraper

npm package scraper to complete your app!

# instalation

Use the stable version:
```shell
npm install lolkil-scraper
```
Or via yarn
```shell
yarn add lolkil-scraper
```

Use the unstable version (no guarantee of stability, but latest fixes + features)
```sh
yarn add github:LoliKillers/lolkil-scraper
```

# List Scrape

* [Anime](#anime)
* [Download](#downloader)
* [Convert](#convert)
* [Information](#information)
* [Searching](#search)
* [Stalk](#stalk)
* [Image](#pinterest)
* [Hentai](#hentai)
* [PornHub](#pornhub)

### Anime 
| name | type | formats | require |
| :------------: | :-----: | :---------------: | :-----: |
| [Anoboy Search](https://62.182.83.93) | anime | anoboy_search | search |
| [Otakudesu Search](https://otakudesu.watch) | anime | otakudesu_search | search |
| [MAL Top Airing](https://myanimelist.net) | anime | mal_top_airing | - |
| [MAL Top Anime](https://myanimelist.net) | anime | mal_top_anime | - |
| [MAL Search Anime](https://myanimelist.net) | anime | mal_search_anime | search |
| [MAL Search Manga](https://myanimelist.net) | anime | mal_search_manga | search |
| [MAL Search Character](https://myanimelist.net) | anime | mal_search_character | search |

Example Code

```javascript
var lolkilScraper = require('lolkil-scraper');
```

```Anoboy Search```
```javascript
lolkilScraper.anime.anoboy_search('one piece')
.then(res => {
    console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```Otakudesu Search```
```javascript
lolkilScraper.anime.otakudesu_search('one piece')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```My Anime List Top Airing```
```javascript
lolkilScraper.anime.mal_top_airing()
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```My Anime List Top Anime```
```javascript
lolkilScraper.anime.mal_top_anime()
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```My Anime List Search Anime```
```javascript
lolkilScraper.anime.mal_search_anime('one piece')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```My Anime List Search Manga```
```javascript
lolkilScraper.anime.mal_search_character('luffy')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

### Downloader
| name | type | formats | require |
| :-----: | :-----: | :-----: | :-----: |
| [TikTok](https://vt.tiktok.com) | download | tiktok | url |
| [YouTube DL Mp3](https://www.youtube.com) | download | youtube_dl_mp3 | search |
| [YouTube DL Mp4](https://www.youtube.com) | download | youtube_dl_mp4 | search |
| [YouTube Play Mp3](https://www.youtube.com) | download | youtube_play_mp3 | search |
| [YouTube Play Mp4](https://www.youtube.com) | download | youtube_play_mp4 | search |

Example Code

```javascript
var lolkilScraper = require('lolkil-scraper')
```

```Tik Tok```
```javascript
lolkilScraper.download.tiktok('https://vt.tiktok.com/ZSR2vqUFY/?k=1')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```
```YouTube Download Mp3```
```javascript
lolkilScraper.download.youtube_dl_mp3('https://youtu.be/hrX2xbeKIJA')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```
```YouTube Download Mp4```
```javascript
lolkilScraper.download.youtube_dl_mp4('https://youtu.be/hrX2xbeKIJA')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```
```YouTube Play Mp3```
```javascript
lolkilScraper.download.youtube_play_mp3('ricko pillow')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```
```YouTube Play Mp4```
```javascript
lolkilScraper.download.youtube_play_mp4('ricko pillow')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

### Convert
| name | type | formats | require |
| :-----: | :-----: | :-----: | :-----: |
| [Emoji To Png](https://emojipedia.org) | convert | emoji_to_png | emoji |
| [Google Text To Speech](https://translate.google.com) | convert | gtts | text & language code |

Example Code

```javascript
var lolkilScraper = require('lolkil-scraper')
```

```Emoji To Png```
```javascript
lolkilScraper.convert.emoji_to_png('💸')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```Google Text To Speech```
```javascript
lolkilScraper.convert.gtts('Hello World', 'en')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

### Information
| name | type | formats | require |
| :------------: | :------------: | :------------: | :------------: |
| [Earthquake Info](https://www.bmkg.go.id) | info | gempa_terkini | - |

Example Code
```javascript
var lolkilScraper = require('lolkil-scraper')
```

```Earthquake Info```
```javascript
lolkilScraper.info.gempa_terkini()
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

### Search
| name | type | formats | require |
| :------------: | :------------: | :------------: | :------------: |
| [Github Repo](https://github.com) | search | github_repo | repo |
| [Film](http://167.99.31.48/) | search | film | film |
| [Kode Pos](https://carikodepos.com/) | search | kodepos | country |

Example Code
```javascript
var lolkilScraper = require('lolkil-scraper')
```

```Github Repository```
```javascript
lolkilScraper.search.github_repo('lolkil-scraper')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```Film```
```javascript
lolkilScraper.search.film('marvel')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```Kode Pos```
```javascript
lolkilScraper.search.kodepos('ponorogo')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

### Stalk
| name | type | formats | require |
| :------------: | :------------: | :------------: | :------------: |
| [Github Stalk](https://github.com) | stalk | github | username |

Example Code
```javascript
var lolkilScraper = require('lolkil-scraper')
```

```Github Stalk```
```javascript
lolkilScraper.stalk.github('LoliKillers)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

### Image
| name | type | formats | require |
| :------------: | :------------: | :------------: | :------------: |
| [Pinterest](https://id.pinterest.com) | image | pinterest | search |
| [Wallpaper Flare](https://www.wallpaperflare.com) | image | wallpaperflare | search |

Example Code
```javascript
var lolkilScraper = require('lolkil-scraper')
```

```Pinterest```
```javascript
lolkilScraper.image.pinterest('loli')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```Wallpaper Flare```
```javascript
lolkilScraper.image.wallpaperflare('loli')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

### Hentai
| name | type | formats | require |
| :------------: | :------------: | :------------: | :------------: |
| [Search](https://hentai.tv) | hentai | search | search |
| [Random](https://hentai.tv) | hentai | random | - |

Example Code
```javascript
var lolkilScraper = require('lolkil-scraper')
```

```Search Hentai```
```javascript
lolkilScraper.hentai.search('loli')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```Random Hentai```
```javascript
lolkilScraper.hentai.random()
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

### PornHub
| name | type | formats | require |
| :------------: | :------------: | :------------: | :------------: |
| [Download](https://www.pornhub.com) | pornhub | download | url |
| [Search](https://www.pornhub.com) | pornhub | search | text |
| [Model/Artis](https://www.pornhub.com) | pornhub | model | text |
| [Random/Video](https://www.pornhub.com) | pornhub | video | - |

```PornHub Downloader```
```javascript
lolkilScraper.pornhub.download('https://www.pornhub.com/view_video.php?viewkey=ph5e3d6b6065a1a')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})

//untuk result json lebih lengkap anda bisa menggunakan kata kunci
/*
const url = 'https://www.pornhub.com/view_video.php?viewkey=ph5e3d6b6065a1a'
const key = ['title', 'download_urls', 'views', 'descripton']
lolkilScraper.pornhub.download(url, key)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(error)
})
*/
```

```PornHub Search```
```javascript
lolkilScraper.pornhub.search('japanese')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
//untuk result json lebih lengkap anda bisa menggunakan kata kunci
/*
const search = 'japanese'
const key = ['title', 'views', 'descripton']
const page = 1
lolkilScraper.pornhub.search(search, key, page)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(error)
})
*/
```
```PornHub Model/Artist```
```javascript
lolkilScraper.pornhub.model('mia')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
//untuk result json lebih lengkap anda bisa menggunakan kata kunci
/*
const model = 'mia'
const key = ['title', 'rank_model', 'descripton']
lolkilScraper.pornhub.model(model, key)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(error)
})
*/
```

```PornHub Video/Random```
```javascript
lolkilScraper.pornhub.video()
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
//untuk result json lebih lengkap anda bisa menggunakan kata kunci
/*
const key = ['title', 'views', 'descripton']
const page = 1
lolkilScraper.pornhub.model(key, page)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(error)
})
*/
```


# NOTE

I will continue to update this package, so wait for my next update
For feature requests/report bugs/want to ask questions, please contact me at
* [WhatsApp](https://wa.me/6285785445412)
* [Telegram](https://t.me/Loli_Killers)
* [Instagram](https://instagram.com/ariasu.xyz)
