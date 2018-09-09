<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <a
          :href="val.contestURL"
          target="_blank"
          class="subtitle is-5 zero-space">
          {{ val.contestName }}
        </a>
        <p>
          <i class="fa-fw fas fa-crown"/>
          {{ val.result }}
        </p>
        <p>
          <i class="fa-fw far fa-calendar-alt"/>
          {{ val.year }}年
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['val']
}
</script>

<style lang="stylus" scoped>
.subtitle
  word-wrap break-word

.zero-space
  margin-bottom 0
  padding-bottom 0
</style>
