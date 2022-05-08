---
title: Mengenal Monorepo dan Keuntungannya
date: 2022-05-9
author: mandaputtra
published: false
tags: ['Tutorial', 'Dasar']
series: false
cover_image: ./images/shared/vuejs-id-logo.jpeg
canonical_url: false
description: Mengenal apa itu monorepo dan kegunaannya untuk frontend development
---

Siapa nih yang kira - kira kalau membuat proyek baru dan masih dalam satu organisasi dibedakan repositorinya? Semisal saya mempunyai perusahaan A, nah aplikasi dari perusahaan A terdiri dari admin dashboard, user dashboard, backend, mobile dan landing page.

Jika semua aplikasi tersebut ditaruh di dalam repositori berbeda - semisal seperti ini :


```txt
- Admin : https://github.com/a-company/admin-panel
- Landing Page : https://github.com/a-company/landing
- Backend : https://github.com/a-company/backend
...
```

Selamat anda telah menerapkan multi repo. Lalu apa itu monorepo?

## Apa Itu Monorepo?

Monorepo merupakan sebuah teknik menyimpan seluruh aplikasi yang berkaitan dengan sebuah entitas (dalam hal ini bisa perusahaan, produk dll) kedalam satu `git`.

Jadi daripada kita harus menghapalkan aplikasi backend ada di repo ini dan frontend ada di repo yang berbeda, kita menempatkannya kedalam satu alamat saja. Semisal `https://github.com/a-company/a-product`.

Jadi banyak kode dong dalam satu folder? Iya!. Inilah beberapa keuntungan mengadopsi Monorepo :

- *Berbagi kode dengan mudah*, misalkan kita mempunyai fungsi yang sama di backend dan frontendkita dapat dengan mudah saling berbagi. Sehingga menghemat waktu untuk menulis implementasi yang aslinya sudah ada.

- *Mudah mengenalkan perubahan*, saat mempunyai UI yang sama antara beberapa aplikasi kita bisa membuat UI tersebut sebagai _shared library_. Sehingga satu perubahan yang kita lakukan dengan mudah dapat berefek juga pada aplikasi lain.

- *Mobilitas programmer*, programmer akan mudah melihat secara garis besar perubahan yang dia lakukan mempengaruhi aplikasi mana saja. Memungkinkan kita juga untuk menyatukan cara kita testing maupun deployment dalam satu repo.
