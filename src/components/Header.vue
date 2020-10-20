<template>
  <header class="header">
    <div class="header__left">
      <Logo v-if="isHome" />
    </div>

    <div class="header__right">
      <g-link class="header__link" to="/kode-etik"> Kode Etik </g-link>
      <ToggleTheme />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  components: {
    Logo,
    ToggleTheme,
  },
  props: {
    isHome: { type: Boolean, default: true },
  },
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

  &__link {
    padding: 1em;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}
</style>
