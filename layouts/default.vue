<template>
  <div class="site">
    <nav-bar/>
    <div class="siteContent">
      <nuxt class="has-text-centered"/>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="stylus" scoped>
.site
  display flex
  min-height 100vh
  flex-direction column

.siteContent
  flex 1
</style>
