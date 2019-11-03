---
title: Pengetahuan Dasar Vue.js   - Bagian 1
date: 2017-09-05
author: mazipan
author_link: https://mazipan.space/
published: true
tags: ['Tutorial', 'Dasar', 'Serial']
series: true
cover_image: ./images/pengetahuan-dasar-vuejs-bagian-1/vuejs-logo.jpeg
canonical_url: false
description: Berbagai pengetahuan dasar yang perlu Anda ketahui di Vue.js.
---

> Berbagai pengetahuan dasar yang perlu Anda ketahui di Vue.js.

Artikel ini merupakan seri lanjutan dari artikel yang sebelumnya sudah di publikasikan, baca semua seri Pengetahuan Dasar Vue.js:

  1. [Pengetahuan Dasar Vue.js - Bagian 1](/pengetahuan-dasar-vuejs-bagian-1) **(Anda di sini)**
  2. Pengetahuan Dasar Vue.js - Bagian 2
  3. Pengetahuan Dasar Vue.js - Bagian 3

---

Vue.js (https://vuejs.org/) seperti di websitenya yang membawa tagline _"The Progressive JavaScript Framework"_ merupakan javascript framework yang membantu kita dalam membuat sebuah website/aplikasi yang membutuhkan banyak interaksi di dalamnya, biasanya berupa _Single Page Application_. Vue.js belakangan memiliki gaung yang lumayan kencang di kalangan web developer maupun Javascript developer karena kemudahan dalam mempelajari dan mengimplementasikan di dalam website/aplikasi kita.

Pada tulisan kali ini kita akan membahas beberapa pengetahuan dasar dan beberapa istilah yang akan sering kita temui jika belajar Vue.js, semoga pembahasan ini akan membantu saya dan kita yang sedang belajar framework ini.

## 1. Mengenai Vue Component

Vue.js seperti framework Javascript modern lainnya juga mengusung konsep _component based_ dimana setiap blok layout dianggap sebagai komponen yang independen dan memiliki style serta fungsi sendiri yang terisolir sehingga mudah untuk digunakan ulang oleh setiap halaman website kita. Setiap komponen tersebut nantinya akan kita susun menjadi blok-blok yang saling terkait dan membangun sebuah tampilan utuh sebuah halaman website.

Menggunakan komponen berarti kita akan membuat custom tag di HTML template kita, secara mudah komponen di Vue.js bisa dibuat sesederhana kode berikut :

```js
// Define a new component called todo-item
Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})
```

Dari pendefinisian diatas kita bisa menggunakan komponen tersebut dalam HTML template dengan cara yang tak kalah mudah, yakni seperti berikut:

```html
<ol>
  <!-- Create an instance of the todo-item component -->
  <todo-item></todo-item>
</ol>
```

## 2. Data Binding dalam Vue.js

Vue.js memang sangat terinspirasi dari [AngularJS](https://angularjs.org/) dalam hal _data binding_ ini, itu mengapa sangat mudah untuk belajar Vue.js bilamana kita pernah belajar AngularJS sebelumnya. Bila di AngularJS kita mengenal _ng-bind_ maka di Vue.js kita mengenal _v-bind:_, berikut beberapa data binding dalam Vue.js :

### 1. Binding data ke dalam view

```html
<div id="app">
  {{ message }}
</div>
```

Vue.js menggunakan syntax `{{ }}` seperti terlihat pada gambar diatas, dengan syntax tersebut berarti kita ingin menampilkan sebuah data yang ada dalam Javascript kita ke dalam HTML template.

### 2. Attribute Binding

```html
<div id="app-2">
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
</div>
```

Seperti disebut sebelumnya, di Vue.js kita menggunakan `v-bind` untuk melakukan binding ke dalam HTML. Maka jika kita melihat ke gambar diatas berarti kita ingin menambahkan attribute _title_ ke dalam span dengan menggunakan data dinamis dari javascript. `v-bind` pada dasarnya bisa diterapkan pada berbagai attribute di HTML sehingga kita mungkin akan menemui banyak variasi `v-bind` ini seperti `v-bind:src`, `v-bind:class`, `v-bind:alt`, dan lain sebagainya. 
Vue.js juga menyediakan shortcut untuk kita mendefinisikan `v-bind` di dalam HTML yakni dengan menghilangkan bagian `v-bind` nya, jadi kita bisa menggunakan shortcut seperti `:title`, `:src`, `:class`, `:alt` dan sebagainya.

### 3. Two way data binding

Seperti AngularJS, Vue.js juga menyediakan fitur two way data binding yang artinya setiap perubahan pada Javascript akan berpengaruh pada view HTML dan sebaliknya perubahan pada HTML view pun akan mempengaruhi atau mengubah nilai di Javascript nya.
Di Vue.js kita menggunakan `v-model` untuk melakukan two way binding yang biasanya sering ditempelkan pada sebuah elemen input HTML, seperti berikut :

```html
<div id="app-3">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```

### 4. Event binding

Untuk memanggil suatu event yang telah kita buat di Javascript, Vue.js menggunakan `v-on`di dalam HTML template diikuti hook event yang akan ditambahkan. Jadi kita bisa menggunakan berbagai variasi `v-on` seperti `v-on:click`, `v-on:blur`, `v-on:focus`, `v-on:keyup` dan sebagainya.

```html
<div id="app-4">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
```

```js
new Vue({
  el: '#app-4',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
```

Vue.js menyediakan juga shortcut untuk melakukan event binding ini yakni menggunakan `@`, sehingga kita bisa menyingkat seperti : `@click`, `@blur`,`@focus` dan sebagainya.

---

Masih akan ada beberapa hal yang ingin saya bahas di judul ini, namun sepertinya akan saya pecah saja kedalam beberapa bagian agar lebih ringan saat membacanya.

**Lanjut di Bagian 2 ya !!! Stay tuned dan follow publikasi ini 😅**

Terima kasih dan semoga bermanfaat penjelasan singkatnya.

---

<small>Gambar cover oleh [Piel Bover](https://medium.com/@Pier)</small>