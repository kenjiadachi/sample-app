<template lang="pug">
  div
    h3
      | {{ user.id }}
    img(:src="user.profile_image_url")
    p
      | {{ user.description || "No description" }}
    p
      nuxt-link(to="/")
        small
          b
            | TOPにもどる
    h3
      | {{ user.id }}さんの投稿一覧
    ul
      li(v-for="item in userItems" :key="item.id")
        h4
          span
            | {{ item.title }}
        div
          | {{ item.body.slice(0, 130) }}
        p
          a(target="_blank" :href="item.url")
            | {{ item.url }}
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    async asyncData({ $route, store }) {
      if (store.getters['user']) {
        return;
      }

      await store.dispatch('fetchUserInfo', { id: route.params.uid });
    },
    computed: {
      ...mapGetters(['user', 'userItems'])
    }
  };
</script>
