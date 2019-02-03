<template lang="pug">
.container
  .columns
    .column.is-one-third
      img.image.is-128x128(:src="user.profile_image_url")
    .column
      h1.title {{user.id}}
      p {{user.description || 'No description'}}
      nuxt-link(to="/")
        small
          b トップへ戻る
  h2.subtitle {{user.id}}さんの投稿一覧
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
  head() {
    return {
      title: this.user.id
    }
  },
  async asyncData({ route, store, redirect }) {
    if (store.getters['users'][route.params.uid]) {
      return;
    }
    try {
      await store.dispatch('fetchUserInfo', { id: route.params.uid });
    } catch (e) {
      redirect('/')
    }
  },
  computed: {
    user() {
      return this.users[this.$route.params.uid];
    },
    items() {
      return this.userItems[this.$route.params.uid] || [];
    },
    ...mapGetters(['users', 'userItems'])
  },
  components: {
    ArticleCard
  }
};
</script>
