<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />
     <Nav />
    <!-- List posts -->
    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
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
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Author,
    PostCard,
    Nav
  },
  metaInfo: {
    title: 'Belajar Pemrograman Web'
  }
}
</script>
