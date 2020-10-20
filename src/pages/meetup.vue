<template>
  <Layout :is-home="true">
    <div class="posts">
      <PostCard v-for="edge in $page.meetupPost.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query {
	meetupPost: tag (id: "Meetup") {
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
        		cover_image (width: 770, height: 380, blur: 10)
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

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard,
  },
  metaInfo: {
    title: 'Meetup | Vue.js Indonesia',
  },
}
</script>
