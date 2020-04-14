<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <Footer />
      <SocialLinks />
      <span class="footer__copyright"
        >Copyright © {{ new Date().getFullYear() }}. iamVue</span
      >
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import SocialLinks from '~/components/SocialLinks.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Logo,
    ToggleTheme,
    SocialLinks,
    Footer
  },
  props: {
    showLogo: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

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
