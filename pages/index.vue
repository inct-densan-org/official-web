<template>
  <section class="has-text-centered">
    <hero />
  </section>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Hero
  }
}
</script>

<style lang="stylus" scoped>
.head
  background-image url('https://media.inct-densan.club/site/head/head.jpg')
  min-width 100vw
  min-width 100vh

.container
  min-height 100vh
  display flex
  justify-content center
  align-items center
  text-align center

.title
  font-family "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  display block
  font-weight 300
  font-size 100px
  color #35495e
  letter-spacing 1px

.subtitle
  font-weight 300
  font-size 42px
  color #526488
  word-spacing 5px
  padding-bottom 15px
</style>
