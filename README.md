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
yarn add github:LoliKillers/xyzapi
```

# List Scrape

* [Anime](#anime)
* [Download](#downloader)
* [Convert](#convert)
* [Information](#information)
* [Searching](#search)
* [Stalk](#stalk)
* [Image](#pinterest)

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
var lol = require('lolkil-scraper');
```

```Anoboy Search```
```javascript
var search = 'One Piece'

lol.anime.anoboy_search(search)
.then(res => {
    console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```Otakudesu Search```
```javascript
var search = "Jujutsu"

lol.anime.otakudesu_search(search)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```My Anime List Top Airing```
```javascript
lol.anime.mal_top_airing()
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```My Anime List Top Anime```
```javascript
lol.anime.mal_top_anime()
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```My Anime List Search Anime```
```javascript
var search = 'One Piece'

lol.anime.mal_search_anime(search)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```My Anime List Search Manga```
```javascript
var search = 'Luffy'

lol.anime.mal_search_character(search)
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

Example Code

```javascript
var lol = require('lolkil-scraper')
```

```Tik Tok```
```javascript
var url = 'https://vt.tiktok.com/ZSR2vqUFY/?k=1'

lol.download.tiktok(url)
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
var lol = require('lolkil-scraper')
```

```Emoji To Png```
```javascript
var emoji = '🤑'

lol.convert.emoji_to_png(emoji)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

```Google Text To Speech```
```javascript
var text = 'Hallo World'
var language = 'en' // Please check the list of language codes at https://cloud.google.com/speech-to-text/docs/languages

lol.convert.gtts(text, language)
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
var lol = require('lolkil-scraper')
```

```Earthquake Info```
```javascript
lol.info.gempa_terkini()
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

Example Code
```javascript
var lol = require('lolkil-scraper')
```

```Github Repository```
```javascript
var repo = 'lolkil-scraper'

lol.search.github_repo(repo)
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
var lol = require('lolkil-scraper')
```

```Github Stalk```
```javascript
var username = 'LoliKillers'

lol.stalk.github(username)
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

Example Code
```javascript
var lol = require('lolkil-scraper')
```

```Pinterest```
```javascript
var search = 'Loli'

lol.image.pinterest(search)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```

# NOTE

I will continue to update this package, so wait for my next update
For feature requests/report bugs/want to ask questions, please contact me at
* [WhatsApp](https://wa.me/6285785445412)
* [Telegram](https://t.me/Loli_Killers)
* [Instagram](https://instagram.com/ariasu.xyz)
