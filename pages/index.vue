<template lang="pug">
  section.container
    div
      h3
        | Nuxt.jsのタグがつけられた投稿の一覧
      ul
        li(v-for="item in items" :key= "item.id")
          h4
            span
              | {{ item.title }}
            small
              span
                | by
              nuxt-link(:to="{ name : 'users-uid', params : { uid : item.user.id }}")
                | {{ item.user.id }}
          div
            | {{ item.body.slice(0, 130) }}
          p
            a(:href = "item.url")
              | {{ item.url }}
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    async asyncData( { store } ) {
      if (store.getters['items'].length) {
        return
      }
      await store.dispatch('fetchItems')
    },
    computed: {
      ...mapGetters(['items'])
    }
  }
</script>
