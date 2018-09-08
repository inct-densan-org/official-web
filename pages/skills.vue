<template>
  <div class="contents">
    <div class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Skills
          </h1>
          <h2 class="subtitle">
            私達が扱える技術など
          </h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="title is-3">言語</h2>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>C#</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Java(Kotlin)</li>
          <li>Ruby</li>
        </ul>
        <h2 class="title is-3">フレームワーク・技術</h2>
        <ul>
          <li>Web</li>
          <ul>
            <li>Vue.js(Nuxt.js)</li>
            <li>Node Express</li>
            <li>Django</li>
            <li>Ruby on Rails</li>
            <li>WebRTC</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul>
        </ul>
        <ul>
          <li>Game</li>
          <ul>
            <li>Unity</li>
            <li>DXライブラリ</li>
          </ul>
        </ul>
        <ul>
          <li>Infrastructure</li>
          <ul>
            <li>Microsoft Azure</li>
            <li>Ubuntu</li>
            <li>CentOS</li>
            <li>Arch Linux</li>
            <li>Docker</li>
            <li>IOS(Cisco)</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch ({store}) {
    store.commit('resetMenu')
  }
}
</script>

<style lang="stylus" scoped>
.hero
  margin-top 3.23rem

.contents
  margin-bottom 30px

.container
  padding-left 1rem
  padding-right 1rem
.title
  margin-top 20px

ul
  list-style disc
  padding-left 1rem
</style>
