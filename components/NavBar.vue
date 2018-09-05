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
            class="fa-fw"/>
          {{ item.title }}
        </nuxt-link>
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
      { fa: 'fas fa-info-circle', title: 'About', url: '/about' }
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

.button-github
  background-color #333
  color #fff
</style>
