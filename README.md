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

Example Code

```javascript
var lol = require('lolkill-scraper');
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

# NOTE

I will continue to update this package, so wait for my next update
For feature requests/report bugs/want to ask questions, please contact me at
* [WhatsApp](https://wa.me/6285785445412)
* [Telegram](https://t.me/Loli_Killers)
* [Instagram](https://instagram.com/ariasu.xyz)
