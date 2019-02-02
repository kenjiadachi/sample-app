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
      li(v-for="item in items" :key="item.id")
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
export default {
  async asyncData({ route, app }) {
    const user = await app.$axios.$get(`https://qiita.com/api/v2/users/${route.params.uid}`)
    const items = await app.$axios.$get(`https://qiita.com/api/v2/items?query=user:${route.params.uid}`)
    return { user, items }
  }
}
</script>
