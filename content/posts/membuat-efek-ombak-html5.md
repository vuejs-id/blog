---
title: Membuat Efek Ombak di Dengan HTML5
date: 2020-04-16
author: iamvue
published: true
tags: ['html']
series: false
cover_image: ./images/membuat-efek-ombak-html5/efek-ombak-html.jpg
canonical_url: false
description: 'Membuat efek ombak atau wave effect dengan HTML5+CSS3'
---

Kali ini kita akan belajar membuat efek ombak atau Wave Form dengan HMTMl5 dan CSS3. Efek ini biasanya digunakan di beberapa landing page pada bagian bawah Header atau bagian atas Footer. Tampilan landing page akan semakin menarik dan eye-catching di mata pengunjung.

Pertama tambahkan kode berikut pada `style.css` situsmu


<pre><code>
@keyframes move_wave {
    0% {
        transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
        transform: translateX(-50%) translateZ(0) scaleY(1)
    }
}
.waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
}
.waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -1px;
    background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);
}
.bgTop {
    z-index: 15;
    opacity: 0.5;
}
.bgMiddle {
    z-index: 10;
    opacity: 0.75;
}
.bgBottom {
    z-index: 5;
}
.wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
}
.waveTop {
    background-size: 50% 100px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
   -webkit-animation: move-wave 3s;
   -webkit-animation-delay: 1s;
   animation-delay: 1s;
}
.waveMiddle {
    background-size: 50% 120px;
}
.waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
}
.waveBottom {
    background-size: 50% 100px;
}
.waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
}
</code></pre>


Lalu buat efek ombak pada bagian `<body>` di website mu.


<pre><code>
&lt;div class=&quot;waveWrapper waveAnimation&quot;&gt;
  &lt;div class=&quot;waveWrapperInner bgTop&quot;&gt;
    &lt;div class=&quot;wave waveTop&quot; style=&quot;background-image: url(&#039;http://front-end-noobs.com/jecko/img/wave-top.png&#039;)&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;waveWrapperInner bgMiddle&quot;&gt;
    &lt;div class=&quot;wave waveMiddle&quot; style=&quot;background-image: url(&#039;http://front-end-noobs.com/jecko/img/wave-mid.png&#039;)&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;waveWrapperInner bgBottom&quot;&gt;
    &lt;div class=&quot;wave waveBottom&quot; style=&quot;background-image: url(&#039;http://front-end-noobs.com/jecko/img/wave-bot.png&#039;)&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>

Lihat hasilnya di [Live Demo](https://jsfiddle.net/hamknw/0pLy7xge/7/)