# VuejsID Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/7afcf19c-5b2c-4b8c-9a0f-3cdb7b8dae6b/deploy-status)](https://app.netlify.com/sites/vuejsid-blog/deploys) ![Website Up](https://img.shields.io/website-up-down-green-red/https/vuejsid-blog.netlify.svg) ![Dependencies](https://img.shields.io/david/vuejs-id/blog.svg)

> Sebuah blog dari VuejsID yang membahas berbagai hal mengenai Vue.js dan ekosistemnya

## Live

- [https://vuejsid-blog.netlify.com/](https://vuejsid-blog.netlify.com/)

## Development

1. Install deps `yarn`
2. Run project `yarn develop`, open at `http://localhost:8080`
3. Build project `yarn build`

## Menerbitkan Tulisanmu pada Blog Vue.js ID

Kamu diperbolehkan menerbitkan tulisanmu di blog Vue.js ID 🎉 Berikut adalah beberapa syarat dan cara untuk menerbitkan pada blog Vuejs ID yang perlu dilakukan :

### Cara Menerbitkan Tulisanmu

Unuk *propose* tulisan yang ingin kamu terbitkan, kamu harus membuat [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) dimana nanti artikel kamu akan [disunting](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models) oleh **@vuejs-id/blogs-team**.

Tulisan akan diterbitkan jika **@vuejs-id/blogs-team** sudah sepakat. Untuk memudahkan pencarian *pull-request* / submisi artikel harap judul *pull-request* dituliskan seperti berikut.

```md
Article Submission - [Judul Artikel yang Kamu Tulis]
```

### Syarat - Syarat Artikel

Berikut adalah syarat - syarat yang **perlu** dipenuhi dan diperhatikan agar artikelmu diterbitkan:

- Isi artikel berkaitan dengan Vue.js / web development pada umumnya, baik itu studi kasus, langkah langkah (tutorial), tips dan trick, maupun opini
- Jika artikel pernah diterbitkan pada publikasi lain sematkan link publikasi tersebut **pada paragraf akhir** artikel kamu **bukan diawal** tulisan artikel kamu
- Artikel boleh merupakan translasi dari artikel berbahasa lain
- Berbahasa Indonesia
- Artikel tidak mengandung SARA, baik itu dalam konteks *jokes* atau apapun

Berikut untuk cara teknikal yang perlu diperhatikan saat menulis:

#### Judul, Tag, dan Konteks Artikelmu

Harap lengkapi konteks artikel kamu pada header markdown, contoh:

```md
---
title: Membuat Vue.js Inline SVG Icon Component
date: 2018-02-07
author: mazipan
author_link: https://www.mazipan.xyz/
published: true
tags: ['Tutorial', 'Icon', 'SVG']
series: false
cover_image: ./images/membuat-vuejs-inline-svg-icon-component/cover.png
canonical_url: false
description: "Belajar langkah demi langkah membuat Vue.js inline SVG icon component"
---
```

1. **title**: berisi judul artikel
2. **date**: tanggal penerbitan artikel
3. **author**: berisi nama penulis
4. **author_link**: berisi link sosial media/situs web penulis
5. **published**: bernilai `true` atau `false`, `true` berarti artikel yang Kamu kirim akan dipublikasi dan `false` berarti artikel yang Kamu kirim belum dipublikasi.
6. **tags**: bernilai array yang berisi tag artikel
7. **series**: bernilai `true` atau `false`, `true` berarti artikel yang Kamu kirim memiliki seri, misal _Pengetahuan Dasar Vue.js Bagian 1_, kemudian nanti Kamu akan mempublikasikan artikel baru bagian 2. Sedangkan `false` berarti artikel yang Kamu kirim tidak memiliki seri atau artikel tunggal.
8. **cover_image**: berisi url gambar sebagai cover artikel. Sebagai contoh jika Kamu mengirimkan artikel dengan judul `Pengetahuan Dasar Vue.js Bagian 1`, maka gambar untuk artikel tersebut sebaiknya berada pada:
`content/posts/images/pengetahuan-dasar-vuejs-bagian-1/cover.png` dan isi dari bagian `cover_image` adalah `./images/pengetahuan-dasar-vuejs-bagian-1/cover.png`
9. **canonical_url**: bernilai `true` atau `false`, `true` berarti artikel yang Kamu kirim pernah diterbitkan di tempat lain dan `false` berarti belum pernah diterbitkan.
10. **description**: berisi deskripsi singkat mengenai artikel yang Kamu kirimkan.

#### Image & File Markdown

Tulisan ditulis pada folder `content/post`. dalam bentuk markdown, contoh dapat kamu lihat pada repo. Harap menamai file markdown-mu sama seperti judul, *lowercase* dan spasi digantikan dengan *-* (*dash*).

```md
...
title: Membuat Vue.js Inline SVG Icon Component
___

nama file :

membuat-vuejs-inline-svg-icon-component.md
```

Jika anda menempatkan image anda pada repo blog, maka taruhlah dalam folder `content/post/images/[nama file markdown anda]`

#### Artikel terjemahan dari bahasa lain

Artikel terjemahan bahasa lain diperbolehkan, cara penulisan sama tetap mengikuti artikel pada blog ini. Kamu harus menyematkan link asli artikel tersebut pada paragraf kedua di file markdown artikelmu.

🎉 itu adalah syarat - syarat yang perlu kamu penuhi dan perhatikan untuk menerbitkan tulisan pada blog ini. Selamat menulis! Mari tingkatkan sumber literasi pemrograman berbahasa Indonesia agar mempermudah dan membantu semua orang belajar pemrograman 😄 💻

## Based on Starter

- [gridsome-starter-blog](https://github.com/gridsome/gridsome-starter-blog)

---

Copyright © 2019 by VuejsID Teams
