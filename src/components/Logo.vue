<template>
  <g-link class="logo" to="/">
    <span class="logo__text">
      <g-image
        alt="Vue.js Indonesia"
        class="logo__img"
        src="~/assets/images/vuejs-id.png"
        width="50"
        height="50"
        blur="5"
      />
    </span>
  </g-link>
</template>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>
