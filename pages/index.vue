<template lang="pug">
  section.container
    div
      h1.title
        | Nuxt.jsのタグがつけられた投稿の一覧
      article-card(
        v-for="item in items"
        :key= "item.id"
        :item="item"
      )

</template>

<script>
  import { mapGetters } from 'vuex';
  import ArticleCard from '~/components/ArticleCard.vue'

  export default {
    async asyncData( { store } ) {
      if (store.getters['items'].length) {
        return
      }
      await store.dispatch('fetchItems')
    },
    computed: {
      ...mapGetters(['items'])
    },
    components: {
      ArticleCard
    }
  }
</script>
