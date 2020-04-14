<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        About Us
      </h1>
      <PostMeta :post="$page.post" />
    </div>
    <div class="post content-box">

      <div class="post__content"/>

     iamVue adalah blog yang membahas seputar pemrograman web. Kami menyediakan ebrbagai tips dan tutorial yang mungkin bisa kalian jadikan referensi.
        
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->       
    </div>

    <Author class="post-author" />
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'
export default {
  components: {
    Author,
    PostMeta,
    PostTags
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D MMM YYYY")
    timeToRead
    author {
      id
      name
      link
      title
      avatar
      path
    }
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}
.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
.post-comments {
  padding: calc(var(--space) / 2);
  &:empty {
    display: none;
  }
}
.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
