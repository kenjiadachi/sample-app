<template lang="pug">
.box
  article.media
    .media-left
      img.image.is-128x128(:src="item.user.profile_image_url")
    .media-content
      .content
        p
          strong
            | {{ item.title }}
          small
            span
              | by
            nuxt-link(:to="{ name : 'users-uid', params : { uid : item.user.id }}")
              | {{ item.user.id }}
          br
          | {{ item.body.slice(0, 130) }}
        p
          a(:href = "item.url")
            | {{ item.url }}
</template>

<script>
export default {
  props: ['item']
}

</script>
