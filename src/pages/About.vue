<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
     
     <p>
        iamVue adalah blog yang membahas seputar pemrograman web. Kami menyediakan ebrbagai tips dan tutorial yang mungkin bisa kalian jadikan referensi.
     </p>
     
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D MMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
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
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Belajar Pemrograman Web'
  }
}
</script>
