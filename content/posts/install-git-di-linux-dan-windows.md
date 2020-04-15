---
title: Tutorial Install Git di Linux dan Windows
date: 2020-04-15
author: iamvue
published: true
tags: ['Git']
series: false
cover_image: ./images/install-git-di-linux-dan-windows/git-cover.png
canonical_url: false
description: 'Git adalah salah satu sistem pengontrol versi (Version Control System) pada proyek perangkat lunak yang diciptakan oleh Linus Torvalds. Ini cara install Git di Linux dan Windows'
---

Git adalah salah satu tool yang populer digunakan dalam berbagai proyek pengembangan software.

Git sendiri merupakan sistem pengontrol versi atau Version Control System yang diciptakan oleh Linus Torvalds.

Tugas git adalah mengontrol dan mencatat setiap perubahan pada file proyek yang sedang dikerjakan oleh banyak orang maupun dikerjakan sendiri.

Git dikenal juga dengan distributed revision control (VCS terdistribusi), artinya penyimpanan database Git tidak hanya berada dalam satu tempat saja.

Untuk memulai menggunakan Git, mari kita install Git terlebih dahulu.

## Cara install Git di Linux

Untuk distro turunan debian bisa menggunakan perintah

`sudo apt install git`

atau

`sudo apt-get install git`

Sedangkan untuk Fedora, menggunakan perintah berikut

`yum install git`

Tunggu hingga proses install selesai, lalu periksa versi yang terinstal dengan perintah berikut

`git --version`

## Cara install Git di Windows

Cara installasi Git di Windows juga cukup mudah. Pertama kunjungi halaman website resminya Git (git-scm.com). Kemudian unduh Git sesuai dengan arsitektur komputer kita. Kalau menggunakan 64bit, unduh yang 64bit. Begitu juga kalau menggunakan 32bit.

Tinggal kita ikuti prosedur instalasi seperti pada umumnya.

## Konfigurasi awal

Beberapa konfigurasi harus disiapkan sebelum memulai menggunakan Git, seperti name dan email.

Lakukan konfigurasi dengan perintah berikut ini.

`git config --global user.name "Username Kamu"`

`git config --global user.email contoh@contoh.com`

Setelah melakukan konfigurasi, kamu bisa periksa konfigurasinya dengan perintah berikut

`git config --list`

Jika kamu memiliki akun Github, Gitlab, Bitbucket, atau yang lainnya, maka username dan email harus sesuai akun tersebut.

Selesai sudah, sekarang kita bisa langsung membuat repositori git.
