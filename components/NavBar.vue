<template>
  <nav class="navbar has-background-light is-fixed-top">
    <div class="navbar-brand">
      <nuxt-link
        class="navbar-item"
        to="/">
        <p>一関高専 電算部</p>
      </nuxt-link>
      <div
        :class="{'is-active': showNav}"
        class="navbar-burger burger burger-font-icon"
        @click="showNav = !showNav">
        <img src="@/assets/menu.svg">
      </div>
    </div>
    <div
      id="navbarExampleTransparentExample"
      :class="{'is-active':showNav}"
      class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link
          v-for="item in items"
          :key="item.title"
          :to="item.url"
          class="navbar-item">
          <i
            :class="item.fa"
            class="fa-fw"/>&nbsp;
          {{ item.title }}
        </nuxt-link>
        <a
          class="navbar-item"
          href="https://blog.inct-densan.club"
          target="blank">
          <i class="far fa-newspaper fa-fw"/>&nbsp;
          Blog
        </a>
        <a
          class="navbar-item"
          href="https://twitter.com/inct_densan"
          target="_blank">
          <i class="fab fa-twitter fa-fw"/>&nbsp;
          Twitter
        </a>
        <a
          class="navbar-item"
          href="https://github.com/inct-densan-org"
          target="_blank">
          <i class="fab fa-github fa-fw"/>&nbsp;
          GitHub
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    showNav: false,
    items: [
      { fa: 'fas fa-home', title: 'Home', url: '/' },
      { fa: 'fas fa-info-circle', title: 'About', url: '/about' },
      { fa: 'fas fa-user-secret', title: 'Privacy', url: '/privacy' }
    ]
  })
}
</script>

<style lang="stylus" scoped>
.navbar
  margin-bottom 20px

.burger-font-icon img
  height 30px
  margin 10px 0 0 12px

.fa-home
  color #23d160

.fa-info-circle
  color #209cee

.fa-newspaper
  color #3F51B5

.fa-user-secret
  color #6846A5

.fa-twitter
  color #1da1f2

.fa-github
  color #333
</style>
