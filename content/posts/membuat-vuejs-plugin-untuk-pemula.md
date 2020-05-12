---
title: Membuat Vue.js Plugin untuk pemula
date: 2017-09-20
author: mazipan
published: true
tags: ['Tutorial', 'Dasar', 'Serial']
series: true
cover_image: ./images/shared/vuejs-id-logo.jpeg
canonical_url: false
description: Beberapa cara untuk berkomunikasi antar komponen di Vue.js
---

Belajar membuat Vue.js Plugin yang ditujukan untuk para pemula dari awal sampai publish ke npm registry.

Setelah di artikel ini kita sedikit membahas soal apa itu Vue.js Plugin maka kali ini kita akan langsung belajar membuat Vue.js Plugin dari awal sampai bisa publish ke npm registry. Langsung saja, silahkan disimak beberapa langkah-langkahnya.

Pertama adalah siapkan environment untuk development Vue.js project sederhana, untuk hal ini saya menggunakan beberapa dependency berikut yang mungkin saja ada beberapa yang tidak dibutuhkan namun tidak sempat lagi inspeksi mana yang tidak digunakan, berikut contoh snippet dari dependency yang saya gunakan di **package.json** :

```json
"devDependencies": {
    "autoprefixer": "^7.1.4",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "babel-register": "^6.26.0",
    "compression": "^1.7.0",
    "compression-webpack-plugin": "^1.0.0",
    "cross-env": "^5.0.5",
    "css-loader": "^0.28.7",
    "es6-promise": "^4.1.1",
    "extract-text-webpack-plugin": "^3.0.0",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "vue": "^2.4.4",
    "node-sass": "^4.5.3",
    "sass-loader": "^6.0.6",
    "vue-loader": "^13.0.4",
    "vue-template-compiler": "^2.4.4",
    "webpack": "^3.6.0",
    "webpack-dev-server": "^2.8.2",
    "webpack-merge": "^4.1.0",
    "webpack-shell-plugin": "^0.5.0"
  }
```

Setelah menambahkan dependency dan menginstall semuanya maka dalam rangka menyiapkan environment ini, kita akan buat `webpack.config.js`, beberapa loader yang kita gunakan adalah `babel`, `vue-loader` dan `sass-loader`, berikut contoh konfigurasi webpack yang kita buat untuk kebutuhan development kita :

```
var path = require('path');
var webpack = require('webpack');

require('es6-promise').polyfill();

module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js',
    jsonpFunction: 'WebpackJsonp'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [      
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
```

Untuk menjalankan webpack ini di development kita bisa menambahkan script di package.json kita dengan key apapun, seperti “dev” sehingga kita bisa menggunakan shortcut untuk menjalankan script ini lewat `npm run nama_key`. Berikut sedikit contoh script untuk menjalankan webpack tersebut dalam mode development :

```bash
$ cross-env NODE_ENV=development webpack-dev-server  —- hot --open
```

Bila anda memutuskan untuk mengganti nama file dari konfigurasi ini, maka anda perlu menambahkan  `—- config nama_file.js` di dalam script tersebut.

Setelah environment siap, maka kita akan masuk pada fase development kita.
Seperti terlihat dari konfigurasi webpack, bahwa kita menggunakan file main.js sebagai entry dari aplikasi kita. Maka file tersebut adalah file pertama yang harus kita buat agar webpack bisa berjalan tanpa error. File main.js ini akan berisi instance dari Vue.js kita. berikut contoh file main.js tersebut :

```js
import Vue from 'vue'
import App from './App.vue'

/* global process */
if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

File main.js tersebut akan menarik dependency dari file App.vue sebagai root dari aplikasi Vue.js kita, maka kita bisa membuat file .vue kosong terlebih dahulu untuk mengakomodir hal ini. Berikut contoh file App.vue kosong yang kita buat :

```html
<template>
  <div id="app" class="app"> 
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue world!!!'
    }
  }
}
</script>

<style lang="scss">
</style>
```

Untuk memastikan aplikasi vue kita berjalan dan semua setup environment kita bisa berjalan maka kita perlu buat index.html sebagai halaman awal, berikut adalah contoh index.html buatan kita :

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=7">
  
  <title>Vue Currency Filter | Irfan Maulana</title>
  
</head>

<body>
    <noscript><p>Please use the latest browser and enable javascript.</p></noscript>

    <div id="app"></div>

    <script src="dist/bundle.js"></script>
</body>

</html>
```

Seharusnya sampai sini, aplikasi kita paling tidak sudah bisa di running dan akan menampilkan index.html hasil buatan kita yang kemudian div dengan id app akan di-inject dengan kode yang ada di file App.vue kita.

Langkah selanjutnya, kita bisa fokus membuat Vue.js Plugin kita. Anggap saja kita akan membuat Plugin yang berupa Filter untuk mem-format sebuah angka menjadi sebuah currency atau format mata uang. Kita harus membuat file tersendiri untuk ini, karena nantinya file ini akan kita jadikan library yang independen dan bisa digunakan oleh orang lain juga.

Kita akan membuat file baru dengan nama VueCurrencyFilter.js, file ini merupakan Plugin kita. Ada beberapa dasar untuk bisa membuat Plugin di Vue.js, berikut adalah kode utama untuk membuat Plugin :

```js
const VueCurrencyFilter = {
  install(Vue, options) {
    // put your plugin code here
  }
}
export default VueCurrencyFilter
```
Seperti bisa kita lihat bahwa dasar dari membuat Plugin adalah menambahkan install dengan parameter Vue Instance dan bisa juga ditambahkan parameter object konfigurasi lainnya.

Karena kita akan membuat sebuah Filter sebagai Plugin maka akan kita tambahkan sintaks dasar untuk membuat Filter di Vue.js, seperti berikut :

```js
const VueCurrencyFilter = {
  install(Vue, options) {
    Vue.filter('currency', function(value) {
      let result = value
      // put your logic to transform result here
      return result
    })
  }
}
export default VueCurrencyFilter
```

Kita bisa menambahkan sendiri logic untuk men-format/transform data inputan menjadi balikan yang sudah dalam bentuk format mata uang di tanda komentar yang sudah saya buat. Tentu ada banyak alternatif solusi di luar sana, kita akan coba cari di stackoverflow.com saja. Berikut adalah link dari [stackoverflow](https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string/14428340#14428340)

Berikut adalah setelah kita meng-implementasikan logika yang kita temukan di stackoverflow.com tersebut :

```js
const VueCurrencyFilter = {
  install(Vue, options) {
    Vue.filter('currency', function(value) {
      let result = '$ ' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      return result
    })
  }
}
export default VueCurrencyFilter
```
Sampai disini harusnya kode tersebut sudah bisa digunakan, namun saya akan mencontohkan bila symbol dari currency yang di kode tersebut masih hardcode maka akan kita jadikan parameter yang bisa di set tergantung kebutuhan. Berikut contoh kodenya :


```js
const VueCurrencyFilter = {
  install(Vue, options) {
    if (typeof options === 'undefined') options = {}
    let symbol = options.symbol || 'Rp'

    Vue.filter('currency', function(value, _symbol) {
      if (typeof _symbol !== 'undefined') symbol = _symbol

      let result =
        symbol + ' ' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      return result
    })
  }
}
export default VueCurrencyFilter
```

Selesai sudah Plugin sederhana kita, berikutnya kita akan mencoba menjalankan Plugin Filter kita dengan memanggil di main.js kita. Berikut adalah contoh kode `main.js` yang sudah menggunakan Plugin Filter kita :

```js
import Vue from 'vue'
import App from './App.vue'

if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

// using our plugin
import VueCurrencyFilter from './VueCurrencyFilter.js'
Vue.use(VueCurrencyFilter, { symbol: '$' })

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

Setelah menambahkan kode diatas maka kita bebas menggunakan Filter yang telah kita buat dimanapun di dalam aplikasi Vue.js kita tanpa harus membuat ulang di setiap komponen. Berikut contoh App.vue yang menggunakan Plugin Filter kita tadi :

```html
<template>
  <div id="app" class="app"> 
    {{ msg }}<br>
    <span>{{ textNum | currency }}</span><br>
    <span>{{ textNum | currency('Rp') }}</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue world!!!',
      textNum: 2000
    }
  }
}
</script>

<style lang="scss">
</style>
```

Bagian terakhir dari artikel ini adalah membuat Vue.js Plugin yang telah kita buat menjadi library yang bisa digunakan ulang oleh orang lain dengan cara di bundle kemudian kita publish ke npm registry. Kita akan memanfaatkan ilmu hitam dari webpack untuk membuat output dengan target [umd](https://github.com/umdjs/umd) (Universal Module Definition) yang lebih universal terhadap berbagai macam penggunaan.

Untuk membuat output umd ini file config webpack akan saya pisah dengan membuat file baru. Berikut adalah contoh file konfigurasi webpack untuk membuat library umd tersebut :

```js
var path = require('path')
var webpack = require('webpack')
var npm = require('./package.json')

require('es6-promise').polyfill()

module.exports = {
  entry: {
    app: './VueCurrencyFilter.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'VueCurrencyFilter.bundle.js',
    library: 'VueCurrencyFilter',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    jsonpFunction: 'WebpackJsonp'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    vue: 'Vue'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.BannerPlugin({
      banner: `VueCurrencyFilter v.${npm.version}\nIrfan Maulana (https://github.com/mazipan)`
    })
  ]
}
```

Webpack konfigurasi ini bisa dijalankan dengan script :

```bash
$ cross-env NODE_ENV=production webpack — config webpack.config.dist.js
```

Dengan menjalankan script ini kita akan membuat file baru dengan nama `VueCurrencyFilter.bundle.js` di dalam folder `dist/`.

Setelah berhasil membuat file bundle dari Plugin kita, maka kita akan memulai persiapan untuk publish ke registry npm. Sebelumnya perlu kita ketahui bahwa secara default npm akan mengunggah semua kode yang ada di repository kita ke npm registry ketika kita memberikan perintah `npm publish`. Makin banyak file yang kita unggah juga akan berakibat makin lama ketika seseorang berusaha mendownload dan menggunakan library kita lewat npm. Maka dari itu kita perlu pilih-pilih terlebih dahulu file mana yang akan kita unggah dan file mana yang tidak perlu. Hal ini bisa dilakukan dengan mudah dengan menambahkan `files` di `package.json`, seperti contoh berikut :

```json
"files": [
  "dist/VueCurrencyFilter.bundle.js",
  "dist/VueCurrencyFilter.bundle.js.map",
  "VueCurrencyFilter.js"
]
```

Setelah menambahkan files, kita juga perlu menambahkan main script kita di package.json, gunanya agar ketika orang melakukan import tidak perlu mencari folder tertentu namun bisa langsung ke library kita saja. Kita akan ambil file hasil build webpack sebagai main script kita seperti berikut :

```json
"main": "dist/VueCurrencyFilter.bundle.js"
```

Dan silahkan berikan perintah kepada npm untuk publish dengan
npm publish 😅 !!!

Semua kode yang saya share sudah tersedia di Github dan sudah di publish di npm.

- [mazipan/vue-currency-filter](https://github.com/mazipan/vue-currency-filter)
- [dokumentasi vue-currency-filter](https://mazipan.github.io/vue-currency-filter/#/)
