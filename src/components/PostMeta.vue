<template>
   <div class="post-meta">
      Posted {{ post.date }}.
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read.</strong>
      </template>
      <template v-if="post.author && post.author_link">
        Dituliskan Oleh
        <a :href="post.author_link">
          {{ post.author }}
        </a>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: .8;
}
</style>