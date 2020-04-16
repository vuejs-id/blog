<template>
  <div class="nav__vue">
  <a href="https://www.iamvue.com/tag/vuejs/" class="post-tags__nav"><i class="fab fa-vuejs"></i> Vue.js</a> 
  <a href="https://www.iamvue.com/tag/php/" class="post-tags__nav"><i class="fas fa-code"></i> PHP</a> 
  <a href="https://www.iamvue.com/tag/git/"class="post-tags__nav"><i class="fab fa-git-alt"></i> Git</a>
  <a href="https://www.iamvue.com/tag/html/"class="post-tags__nav"><i class="fab fa-html5"></i> Html</a> 
  <a href="https://www.iamvue.com/tag/laravel/" class="post-tags__nav"><i class="fab fa-laravel"></i> Laravel</a> 
  <a href="https://www.iamvue.com/tag/nodejs/"class="post-tags__nav"><i class="fab fa-node-js"></i> Node.js</a>
  <a href="https://www.iamvue.com/tag/wordpress/"class="post-tags__nav"><i class="fab fa-wordpress-simple"></i> Wordpress</a>
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
