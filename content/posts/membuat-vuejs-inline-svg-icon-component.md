---
title: Membuat Vue.js Inline SVG Icon Component
date: 2018-02-07
author: Irfan Maulana
author_link: https://mazipan.space/
published: true
tags: ['Tutorial', 'Icon', 'SVG']
series: false
cover_image: ./images/membuat-vuejs-inline-svg-icon-component/cover.png
canonical_url: false
description: "Belajar langkah demi langkah membuat Vue.js inline SVG icon component"
---

Pada artikel kali ini kita akan belajar bagaimana membuat icon pack sendiri dari sebuah SVG icon pack. Di **awesome-vue** sendiri sudah banyak ada icon packs versi vue.js yang bisa kita gunakan, selengkapnya lihat [disini](https://github.com/vuejs/awesome-vue#icons).

Awalnya saya tertarik untuk belajar dari [vue-awesome](https://github.com/Justineo/vue-awesome)— (Font Awesome component for Vue.js) dibuat, namun setelah mencoba melihat langsung ke repository-nya sepertinya kurang scale untuk saya karena harus mapping manual SVG icon ke file .js satu persatu. Lihat kode selengkapnya [disini](https://github.com/vuejs/awesome-vue#icons).

Setelahnya saya mencoba melihat repository [vue-material-design-icons](https://gitlab.com/robcresswell/vue-material-design-icons), saya pribadi lebih cocok dengan cara repository ini. Setelah mencoba lebih memahami alur kode yang dilakukan oleh repo ini, maka saatnya belajar membuat versi sendiri.

Hal pertama yang saya pikirkan adalah mencari Icon Packs yang gratis dan tersedia di Github. Saya pilih [Ionicons](https://github.com/ionic-team/ionicons) dari Ionic Teams. Dan berikut langkah-langkah untuk membuatnya:

### Setup

Yang paling saya suka dari vue-material-design-icons yang saya sebut diatas adalah memilih menggunakan [git submodule](https://git-scm.com/docs/git-submodule) agar bisa langsung mengambil SVG dari repository utama dibandingkan melakukan mapping manual. Berikut file .gitmodule yang saya buat agar mengambil repository dari Ionicons.

![Git Submodule ke Git Repository Ionicons](./images/membuat-vuejs-inline-svg-icon-component/01.png)

### Convert file SVG ke .vue

Pada vue-material-design-icons pada dasarnya memanfaatkan File [System(fs)](https://nodejs.org/api/fs.html) pada NodeJS untuk membaca semua file SVG yang ada di dalam suatu folder untuk kemudian menggunakan [Mustache.js](https://github.com/janl/mustache.js/) untuk me-render hasil SVG string yang dibaca dan membuat file .vue berdasarkan hasil render dari mustache ini.

Namun ternyata untuk men-convert Ionicons memang lebih tricky karena SVG yang tersedia tidak seragam struktur XML string nya. Berikut beberapa penyesuaian yang harus saya lakukan untuk melakukan convert SVG Ionicons ke file .vue:

### 👉 Compress dan cleanup file SVG

Untuk melakukan compress dan cleanup SVG ini saya menggunakan library [SVGO](https://github.com/svg/svgo). Awalnya saya memutuskan untuk menggunakan versi Node.js Module dari svgo seperti bisa dilihat pada contoh [disini](https://github.com/svg/svgo/blob/master/examples/test.js). Namun ternyata muncul beberapa unexpected error karena gagal convert beberapa SVG. Akhirnya saya memutuskan untuk menggunakan versi CLI dan memanfaatkan [shelljs](https://github.com/shelljs/shelljs) untuk menjalankan perintah tersebut.

![Shell.js Menjalankan SVGO CLI](./images/membuat-vuejs-inline-svg-icon-component/02.png)

### 👉 Replace beberapa unused string

Meskipun sudah menggunakan SVGO, ternyata masih terdapat beberapa string SVG yang tidak saya inginkan. Untuk menghilangkan ini saya menggunakan cara bar-bar dengan melakukan replace manual string saya tidak inginkan serta menambahkan string yang saya butuhkan.

![Cara bar - bar menghilangkan string](./images/membuat-vuejs-inline-svg-icon-component/03.png)

### Render Menggunakan Mustache.js

![Mustache.js](./images/membuat-vuejs-inline-svg-icon-component/04.gif)

Seperti disebutkan diatas, kita menggunakan Mustache.js untuk me-render string hasil dari membaca SVG ke dalam file .vue.

Untuk bisa me-render di Mustache.js saya akan membuat Object dari setiap file SVG yang telah dibaca, berikut kurang lebih Object yang dibuat:

![Melempar parameter hasil .svg](./images/membuat-vuejs-inline-svg-icon-component/05.png)

Untuk bisa membuat file .vue kita akan membuat file mustache dengan ekstensi .mst yang fungsinya merender berdasarkan data yang ada. Berikut file mustache yang kita buat:

![.mst file](./images/membuat-vuejs-inline-svg-icon-component/06.png)

Setelah data didapat, maka kita bisa mem-render file mustache yang dibuat sebelumnya dengan data yang ada untuk kemudian membuat file .vue sebagai output-nya.

![me-render data dengan mustache.js](./images/membuat-vuejs-inline-svg-icon-component/07.png)

### Menambahkan Props

Untuk menambahkan *Props* sebenarnya mudah saja, kita tinggal tambahkan di dalam file mustache yang dibuat diawal. Misalkan saya menambahkan *props* **rootClass** sebagai custom class jika memang dibutuhkan custom style, maka saya tinggal menambahakan kode berikut:

![Props root class di vue-ionicons](./images/membuat-vuejs-inline-svg-icon-component/08.png)

Bagian yang lumayan mengesalkan adalah saya ingin menambahkan Props kedalam SVG string bukan ke *wrapper* SVG tersebut. Untuk melakukan hal ini saya melakukan *cheating* dengan *replace* manual attribut bawaan SVG dengan props yang saya inginkan.

### Dukungan Animasi

Tentu saja akan menarik bila ada sedikit animasi, apalagi setelah saya lihat ada library serupa di React yang sudah support animasi yakni [React-Ionicons](https://zamarrowski.github.io/react-ionicons/). Kita bisa belajar dari cara library ini membuat animasinya yang tentu saja akan lebih mudah diaplikasikan ke dalam kode Vue.js yang memang lebih simpel **#nooffense** 😙.

Kita cukup menambahkan props yang akan mengaktifkan masing-masing animasi:

![Props untuk mengaktifkan animasi](./images/membuat-vuejs-inline-svg-icon-component/09.png)

Setelahnya kita bisa buat CSS class dan buat fungsionalitas untuk menentukan class mana yang harus dipakai. Untuk hal ini saya menggunakan *computed* dari Vue.js, berikut kodenya:

![computed untuk menentukan class](./images/membuat-vuejs-inline-svg-icon-component/11.png)

### Menyiapkan Halaman Demo

Untuk menyiapkan halaman demo tentu saja seperti biasa kita perlu setup beberapa file seperti `webpack.config`, `main.js`, `index.html` dan `App.vue`. File-file tersebut mungkin tidak akan saya jelaskan lagi, Anda bisa langsung melihat kedalam repository Github.

Hal yang berbeda adalah bahwa file App.vue yang ada di demo merupakan hasil generate dari Mustache. Ini saya lakukan karena harus memastikan icon yang di import ke dalam App.vue sama persis dengan file SVG yang tersedia. Dengan mustache saya bisa melakukan dynamic import berdasarkan hasil membaca folder SVG di *repository* Ionicons.

![Mustache file untuk membuat App.vue](./images/membuat-vuejs-inline-svg-icon-component/10.png)

Demikian tulisan singkat dari saya, semoga bermanfaat. Semua kode yang dibagikan di artikel diatas bisa Anda temukan di Github repository berikut:

[mazipan/vue-ionicons Vue Icon Set Components from Ionic Team](https://github.com/mazipan/vue-ionicons)
