<template>
  <div class="post-meta">
    <PostAuthor class="post-card__author" :post="post" />
    <div>
      {{ post.date }} -
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read</strong>
      </template>
    </div>
  </div>
</template>

<script>
import PostAuthor from '~/components/PostAuthor'

export default {
  components: {
    PostAuthor
  },
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.post-meta {
  margin: 1em auto 0 auto;
  max-width: var(--content-width);

  font-size: 0.7em;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
}
</style>
