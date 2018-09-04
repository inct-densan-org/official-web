<template>
  <section>
    <div class="head">
      <div class="container">
        <div>
          <app-logo/>
          <h1 class="title">
            official-web
          </h1>
          <h2 class="subtitle">
            独立行政法人国立高等専門学校機構一関工業高等専門学校 電子計算機部オフィシャルウェブ
          </h2>
          <div class="links">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              class="button--green">Documentation</a>
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              class="button--grey">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="stylus">
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
  color hsl(0, 0%, 86%)
  letter-spacing 1px

.subtitle
  font-weight 300
  font-size 42px
  color hsl(0, 0%, 71%)
  word-spacing 5px
  padding-bottom 15px

.links
  padding-top 15px
</style>
