---
title: Pengetahuan Dasar Vue.js   - Bagian 3
date: 2017-09-08
author: mazipan
published: true
tags: ['Tutorial', 'Dasar', 'Serial']
series: true
cover_image: ./images/shared/vuejs-logo.jpeg
canonical_url: false
description: Berbagai pengetahuan dasar yang perlu Anda ketahui di Vue.js.
---

> Berbagai pengetahuan dasar yang perlu Anda ketahui di Vue.js.

Artikel ini merupakan seri lanjutan dari artikel yang sebelumnya sudah di publikasikan, baca semua seri Pengetahuan Dasar Vue.js:

  1. [Pengetahuan Dasar Vue.js - Bagian 1](/pengetahuan-dasar-vuejs-bagian-1)
  2. [Pengetahuan Dasar Vue.js - Bagian 2](/pengetahuan-dasar-vuejs-bagian-2)
  3. [Pengetahuan Dasar Vue.js - Bagian 3](/pengetahuan-dasar-vuejs-bagian-3) **(Anda di sini)**

---

Kali ini kita akan melanjutkan dengan membahas hal dasar lainnya dalam Vue.js, silahkan siapkan kopi dan simak artikel berikut :

## 1. Filter, Computed dan Watch

### 👉 Filter

_Filter_ merupakan fitur yang juga diadopsi dari AngularJS dan memiliki fungsi yang hampir sama. _Filter_ di dalam Vue.js digunakan untuk melakukan transformasi atau pun formatting data secara _real-time_ berdasarkan rule yang telah ditetapkan di dalam kode kita.

Keuntungan menggunakan _filter_ adalah kita tidak perlu melakukan _formatting_ secara manual dari setiap data yang ingin kita ubah, namun cukup membuat satu _filter_ dan bisa digunakan berulang-ulang dengan cara yang sangat simple dan mudah.

Filter dapat digunakan di dalam template html dengan menambahkan _pipe_ (|) pada data yang ingin kita lakukan transformasi, seperti terlihat pada gambar dibawah ini :

```html
<!-- in mustaches -->
{{ message | capitalize }}

<!-- in v-bind -->
<div v-bind:id="rawId | formatId"></div>
```

_Filter_ harus mengembalikan nilai yang merupakan hasil dari data yang telah di transformasi ke bentuk yang diinginkan, contohnya bisa dilihat pada kode berikut :

```js
new Vue({
  // ...
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.chartAt(0).toUpperCase() + value.slice(1)
    }
  }
})
```

### 👉 Computed

_Computed_ merupakan satu method yang akan dijalankan secara otomatis setiap kali variable/object yang ada dibawah function didalamnya mengalami perubahan. _Computed_ sendiri akan/harus mengembalikan suatu nilai yang bisa kita panggil lagi baik di html template maupun javascript.

Balikan nilai dari _computed_ ini bersifat mirip dengan variabel di dalam _data_ yang telah dijelaskan pada Bagian 2 sebelumnya. Sehingga bila dilihat di contoh potongan kode pada gambar dibawah ini maka bisa dijelaskan bahwa kita punya variabel di dalam _data_ dengan nama “message” dan setiap perubahan yang terjadi pada nilainya maka otomatis akan men-_trigger_ suatu computed dan akan menghasilkan _data virtual_ dengan nama “reversedMessage".

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```

### 👉 Watch

Watch memiliki fungsi yang hampir mirip dengan _computed_ namun memiliki persepsi yang berbeda. Jika menggunakan _computed_ maka kita ingin menghasilkan suatu data baru menggunakan _function_ yang jika di dalamnya terjadi perubahan pada variabel nya maka akan dilakukan kalkulasi ulang untuk menghasilkan data baru tersebut, maka dengan menggunakan _watch_ kita berarti ingin memantau perubahan dari suatu variabel yang terdapat didalam Data dan setiap kali terjadi perubahan pada variabel yang kita pantau maka akan otomatis menjalankan _function_ yang ada di dalam _watch_ bersangkutan. _Watch_ juga tidak mengembalikan nilai seperti yang diharuskan pada _computed_.

Conth membuat _watch_ bisa dilihat pada cuplikan kode berikut:

```js
var vm = new Vue({
  el: 'example-2',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...',
      this.getAnswer()
    }
  }
})
```

## 2. Mengenal Vue.js Plugins

_Vue.js Plugin_ pada dasarnya memiliki tujuan untuk menambahkan suatu fungsi yang bersifat global dan mudah untuk digunakan ulang. Contoh paling mudah adalah ketika kita di Vue.js sering kali menggunakan sintaks `Vue.use(MyPlugin)`, ini sebenarnya kita sedang ingin menggunakan suatu _plugin_ lewat sintaks ini. Semua logika dari _plugin_ sudah dibungkus di dalamnya sehingga kita bisa menggunakan dengan mudah dan tidak perlu susah-susah untuk inisialisasi ulang disetiap tempat yang membutuhkan melainkan cukup diinisialisasi di _root_ dari aplikasi kita.

Sintaks dasar untuk membuat _plugin_ di dalam Vue.js bisa dilihat pada cuplikan kode di bawah ini:

```js
MyPlugin.install = function(Vue, options) {
  // 1. add global method or property
  Vue.myGlobalMethod = function () {
    // someting logic ...
  }

  // 2. add a global asset
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // something logic ...
    }
    ...
  })

  // 3. inject some component options
  Vue.mixin({
    created: function () {
      // something logic ...
    }
    ...
  })

  // 4. add an instance method
  Vue.prototype.$myMethod = function (methodOptions) {
    // something logic ...
  }
}
```

Pengetahuan membuat _plugin_ di Vue.js ini akan sangat membantu apalagi bila membangun aplikasi yang lumayan kompleks dengan banyak komponen dan saling berkomunikasi antar mereka. Dengan _plugin_ kita bisa membuat satu logika untuk semua tempat, seperti contoh kita membuat beberapa _filter_ yang bisa digunakan di semua komponen dalam aplikasi kita menggunakan _plugin_. Hal seperti ini tentu menghemat banyak waktu kita karena menghindarkan kita dari membuat duplikasi kode di banyak tempat.

---

Demikian sedikit penjelasan tentang beberapa hal dasar di Vue.js.

Terima kasih dan semoga bermanfaat penjelasan singkatnya.

---

<small>Gambar cover oleh [Piel Bover](https://medium.com/@Pier)</small>