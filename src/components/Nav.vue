<template>
  <div class="nav__vue">
  <a href="https://www.iamvue.com/tag/vuejs/" class="post-tags__nav"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> Vue.js</a> 
  <a href="https://www.iamvue.com/tag/php/" class="post-tags__nav">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> PHP</a> 
  <a href="https://www.iamvue.com/tag/git/"class="post-tags__nav">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> Git</a>
  <a href="https://www.iamvue.com/tag/html/"class="post-tags__nav">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> Html</a> 
  <a href="https://www.iamvue.com/tag/laravel/" class="post-tags__nav">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> Laravel</a> 
  <a href="https://www.iamvue.com/tag/nodejs/"class="post-tags__nav">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> Node.js</a>
  <a href="https://www.iamvue.com/tag/wordpress/"class="post-tags__nav">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> Wordpress</a>
  </div>
</template>
<script src="https://kit.fontawesome.com/715a166ac7.js" crossorigin="anonymous"></script>
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
.post-tags__nav {
  background: #fff;
  padding: 5px;
  border-radius: 5px;
}
</style>
