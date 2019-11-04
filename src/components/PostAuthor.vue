<template>
  <div class="post-author">
    <span class="tooltiptext">
      {{ post.author.id }}
    </span>
    <g-link class="post-author__link" :to="post.author.path">
      <g-image
        alt="Author"
        v-if="post.author.avatar"
        class="post-author__avatar"
        :src="post.author.avatar"
      />
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="scss">
.post-author {
  position: relative;

  .tooltiptext {
    text-transform: none;
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    top: 100%;
    left: 50%;
    margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */

    position: absolute;
    z-index: 2;
  }

  &:hover .tooltiptext {
    visibility: visible;
  }

  &__link {
    display: block;
    width: 34px;
    height: 34px;
    overflow: hidden;
    border-image: initial;
    border-radius: 100%;
  }

  &__avatar {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: rgb(228, 234, 237);
    border-radius: 100%;
  }
}
</style>