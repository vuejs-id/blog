---
title: Membuat Static Blog dengan Gridsome di Netlify
date: 2020-04-13
author: iamvue
published: true
tags: ['vuejs', 'netlify', 'static blog']
series: false
cover_image: ./images/membuat-blog-statis-dengan-gridsome-dan-netlify/cover.jpg
canonical_url: false
description: 'Cara mudah membuat static blog menggunakan Gridsome dan melakukan Deploy ke Netlify'
---

[Netlify](https://netlify.com/?ref=iamvue.com)  adalah salah satu tempat terbaik untuk membuat blog statis, selain di Github. Netlify adalah platform terpadu yang memudahkan kita dalam membuat situs dan aplikasi web dengan fitur deploy otomatisnya. Selain itu, platform ini juga menyediakan Global CDN, fitur DNS lengkap (termasuk domain khusus jika kamu punya), HTTPS otomatis, akselerasi aset, dan banyak lagi. 

Kita bisa membuat project pribadi dan aplikasi web tanpa batas, salah satunya adalah untuk membuat static blog dengan Gridsome di Netlify. Sebelum beranjak ke cara membuat blog statis dengan Gridsome, mari kita berkenalan sebentar dengan Gridsome

## Apa itu gridsome?

[Gridsome](https://gridsome.org/?ref=iamvue.com) adalah framework dari ekosistem Vue.js yang khusus untuk membuat halaman statis (Static Site Generator). Mungkin kalian mengenal React.js? Di React.js ada Gatsby sebagai pembuat halaman statis, nah di Vue.js ada Gridsome.

Gridsome menjadi alternatif yang baik bagi kamu yang ingin membuat blog statis atau aplikasi web statis, Selain Gatsby, Nuxt.js, ataupun Hugo.

## Kenapa memilih Gridsome?

![Alur kerja Gridsome](./images/how-it-works.webp)

Ada banyak static site generator, lalu kneapa memilih Gridsome? Gridsome merupakan spesialis dalam bidang static site generator, dengan berbagai fitur built-in yang kita butuhkan untuk membuat blog statis seperti otomatis melakukan_code-splitting_, melakukan kompresi gambar, mendukung PWA secara penuh, dan tentunya sangat bersahabat dengan SEO.

Kita juga akan dimudahkan mengorganisir konten blog kita dengan Markdown tanpa perlu konfigurasi lagi. 

## Cara membuat blog statis dengan Gridsome

Saat ini membuat blog statis sangatlah mudah, karena sudah banyak sekali starter template yang bisa kita gunakan langsung. 

Di Gridsome, kita bisa menggunakan [Gridsome Blog Starter](https://gridsome.org/starters/gridsome-blog-starter/) untuk membuat blog statis dengan mudah.

Berikut ini langkah-langkah membuat blog statis dengan Gridsome.

### Install menggunakan CLI

Pertama, masukkan perintah berikut ini.
````bash
$ npm install --global @gridsome/cli
````
Lanjutkan dengan membuat project baru.
````bash
$ gridsome create gridsome-blog https://github.com/gridsome/gridsome-starter-blog.git
````
Jalankan untuk melihat hasilnya.
````bash
$ gridsome develop
````

Selanjutnya, kreasikan sesuai selera. Kalian bisa lihat repositorynya di [GitHub](https://github.com/gridsome/gridsome-starter-blog).

### Install Gridsome dan Deploy langsung ke Netlify

Untuk membuat Gridsome dan melakukan Deploy langsung ke Netlify sangatlah mudah, pertama pastikan kamu sudah memiliki akun Github dan Netlify.

Selanjutnya buka halaman **[Gridsome Blog Starter](https://gridsome.org/starters/gridsome-blog-starter/)**

![Gridsome STarter Blog](./images/gridsome-starter-blog.png)

Klik tombol **Install Now** yang ada pada pojok kanan atas, lalu pilih **Deploy to Netlify**.

![Deploy to Netlify](./images/deploy-to-netlify.png)

Lakukan sedikit konfigurasi dengan menambahkan perintah `gridsome build` pada kolom build command. Dan tambahkan direktori `dist` pada kolom publish directory.

Selanjutnya, kamu bisa melihat hasilnya pada url yang telah digenerate secara otomatis oleh Netlify, kamu juga bisa mengubah url tersebut.
