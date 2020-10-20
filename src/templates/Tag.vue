<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom"># {{ $page.tag.title }}</h1>

    <div class="posts">
      <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard,
  },
  metaInfo() {
    return {
      title: `Artikel dengan label ${this.$page.tag.title} | Vue.js Indonesia`,
    }
  },
}
</script>

<style lang="scss"></style>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
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
            author {
              id
              name
              link
              title
              avatar
              path
            }
          }
        }
      }
    }
  }
}
</page-query>
