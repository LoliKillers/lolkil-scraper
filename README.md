# lolkil-scraper

npm package scraper to complete your app!

# instalation
```shell
npm install lolkil-scraper
```
Or via yarn
```shell
yarn add lolkil-scraper
```

# List Scrape

* [Anime](#anime)

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
var lol = require('lolkill-scraper');
```
<details>
<summary> <b>Anoboy Search</b></summary><br/>
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
</details>
<details>
<summary><b>Otakudesu Search</b></summary><br/>
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
</details>
<details>
<summary><b>MAL Top Airing</b></summary><br/>
```javascript
lol.anime.mal_top_airing()
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```
</details>
<details>
<summary><b>MAL Top Anime</b></summary><br/>
```javascript
lol.anime.mal_top_anime()
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
```
</details>
<details>
<summary><b>MAL Search Anime</b></summary><br/>
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
</details>
<details>
<summary><b>MAL Search Manga</b></summary><br/>
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
</details>

# NOTE

I will continue to update this package, so wait for my next update
For feature requests/report bugs/want to ask questions, please contact me at
* [WhatsApp](https://wa.me/6285785445412)
* [Telegram](https://t.me/Loli_Killers)
* [Instagram](https://instagram.com/ariasu.xyz)
