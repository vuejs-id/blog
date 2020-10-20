<template>
  <footer class="footer">
    <SocialLinks />
    <span class="footer__copyright"
      >Copyright © {{ new Date().getFullYear() }}. Vue.js Indonesia, powered by
      <a href="//gridsome.org"> Gridsome </a></span
    >
  </footer>
</template>

<script>
import SocialLinks from '~/components/SocialLinks.vue'

export default {
  name: 'Footer',
  components: {
    SocialLinks,
  },
  props: {},
}
</script>

<style lang="scss">
.footer {
  display: block;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
