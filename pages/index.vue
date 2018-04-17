<template>
  <section class="container">
    <div>
      <h1 class="title">一関高専 電子計算機部</h1>
      <h2 class="subtitle">指先から、世界を変える。</h2>
      <div class="links">
        <a
          href="https://twitter.com/inct-densan/"
          target="_blank"
          class="button--green">Official Twitter</a>
        <a
          href="https://github.com/inct-densan-org"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss">
.container {
  background-color: #ff8c4f;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
