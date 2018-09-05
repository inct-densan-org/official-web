<template>
  <div class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container">
        <densan-logo/>
        <div class="contents">
          <h1 class="title is-1">
            一関高専 電子計算機部
          </h1>
          <h2 class="subtitle is-3">
            指先から、世界を変える。
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DensanLogo from '~/components/DensanLogo.vue'

export default {
  components: {
    DensanLogo
  }
}
</script>

<style lang="stylus" scoped>
.contents
  padding-bottom 30px
</style>
