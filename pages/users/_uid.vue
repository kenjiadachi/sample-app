<template lang="pug">
  div
    p
      | /users/_id.vue
      | User ID: {{ userId }}
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.uid
    }
  }
}
</script>
