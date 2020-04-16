<template>
  <div class="nav__vue">
  <span style="display:inline-block"><a href="https://www.iamvue.com/tag/vuejs/" class="post-tags__nav"><ion-icon name="logo-vue"></ion-icon> Vue.js</a> </span>
  <span style="display:inline-block"><a href="https://www.iamvue.com/tag/php/" class="post-tags__nav"><ion-icon name="code-slash-outline"></ion-icon> PHP</a> </span>
   <span style="display:inline-block"><a href="https://www.iamvue.com/tag/git/"class="post-tags__nav"><ion-icon name="git-branch-outline"></ion-icon> Git</a></span>
   <span style="display:inline-block"><a href="https://www.iamvue.com/tag/html/"class="post-tags__nav"><ion-icon name="logo-html5"></ion-icon> Html</a> </span>
   <span style="display:inline-block"><a href="https://www.iamvue.com/tag/laravel/" class="post-tags__nav"><ion-icon name="logo-laravel"></ion-icon> Laravel</a></span>
  <span style="display:inline-block"><a href="https://www.iamvue.com/tag/nodejs/"class="post-tags__nav"><ion-icon name="logo-nodejs"></ion-icon> Node.js</a></span>
   <span style="display:inline-block"><a href="https://www.iamvue.com/tag/wordpress/"class="post-tags__nav"><ion-icon name="logo-wordpress"></ion-icon> Wordpress</a></span>
  </div>
</template>
<script>
export default {
  name: 'Nav'
}
</script>
<style lang="scss">
.nav__vue {
text-align: center;
  margin-bottom: 1em;
  a {
    color: #444;
    margin: 0 0.5em;
    text-decoration: none;
  }
  a:visited {
    color: #444;
    margin: 0 0.5em;
    text-decoration: none;
  }
  
}
</style>
