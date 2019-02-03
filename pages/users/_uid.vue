<template lang="pug">
  section.container
    div
      h3 {{user.id}}
      img(:src="user.profile_image_url")
      p {{user.description || 'No description'}}
      p
        nuxt-link(to="/")
          small
            b トップへ戻る
      h3 {{user.id}}さんの投稿一覧
      ul
        li(v-for="item in items" :key="item.id")
          h4
            span {{item.title}}
          div {{item.body.slice(0, 130)}}……
          p
            a(target="_blank" :href="item.url") {{ item.url }}

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  head() {
    return {
      title: this.user.uid
    }
  },
  async asyncData({ route, store, redirect }) {
    if (store.getters['users'][route.params.uid]) {
      return;
    }
    try {
      await store.dispatch('fetchUserInfo', { id: route.params.uid });
    } catch (e) {
      
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
  }
};
</script>
