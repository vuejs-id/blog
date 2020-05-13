<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.author.title }}
    </h1>

    <div class="posts">
      <PostCard
        v-for="edge in $page.author.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Author ($id: ID!) {
  author (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D MMM YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: `Articles written by ${this.$page.author.title} in Blog Vuejs-ID`
  }
}
</script>

<style lang="scss"></style>
