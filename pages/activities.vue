<template>
  <div class="contents">
    <div class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Activities
          </h1>
          <h2 class="subtitle">
            最近の受賞歴・大会参加歴等
          </h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-centered is-multiline">
        <activity
          v-for="activity in activities"
          :key="activity.title"
          :val="activity"/>
      </div>
    </div>
  </div>
</template>

<script>
import Activity from '~/components/Activity.vue'

export default {
  components: {
    Activity
  },
  fetch ({store}) {
    store.commit('resetMenu')
  },
  data: () => ({
    activities: [
      { contestName: '全国高校スーパーコンピューティングコンテスト', contestURL: 'http://www.gsic.titech.ac.jp/supercon/main/attwiki/index.php', year: 2013, result: '本選' },
      { contestName: 'U18 リケメン・リケジョのIT夢コンテスト2013', contestURL: 'http://yumecon.ic.kanagawa-it.ac.jp/', year: 2013, result: '神奈川県私立中学校高等学校協会理事長賞' },
      { contestName: 'U18 リケメン・リケジョのIT夢コンテスト2014', contestURL: 'http://yumecon.ic.kanagawa-it.ac.jp/', year: 2014, result: '本選出場' },
      { contestName: 'パソコン甲子園 プログラミング部門', contestURL: 'http://web-ext.u-aizu.ac.jp/pc-concours/', year: 2014, result: '新人賞' },
      { contestName: 'パソコン甲子園 プログラミング部門', contestURL: 'http://web-ext.u-aizu.ac.jp/pc-concours/', year: 2014, result: '本選出場' },
      { contestName: '日本情報オリンピック', contestURL: 'https://www.ioi-jp.org/', year: 2014, result: '本選出場' },
      { contestName: '全国高専プログラミングコンテスト 課題部門', contestURL: 'http://www.procon.gr.jp/', year: 2015, result: '敢闘賞' },
      { contestName: '全国高専プログラミングコンテスト 課題部門', contestURL: 'http://www.procon.gr.jp/', year: 2016, result: '敢闘賞 / パテント審査優秀賞' },
      { contestName: '全国高専プログラミングコンテスト 課題部門', contestURL: 'http://www.procon.gr.jp/', year: 2017, result: '特別賞 / パテント審査優秀賞' },
      { contestName: '全国高専プログラミングコンテスト 自由部門', contestURL: 'http://www.procon.gr.jp/', year: 2017, result: '敢闘賞 / パテント審査優良賞' },
      { contestName: 'KOSENセキュリティコンテスト2017', contestURL: 'http://sckosen2017.kisarazu.ac.jp/', year: 2017, result: '35チーム中17位' },
      { contestName: '日本情報オリンピック', contestURL: 'https://www.ioi-jp.org/', year: 2017, result: '本選出場' },
      { contestName: '全国高専プログラミングコンテスト 課題部門', contestURL: 'http://www.procon.gr.jp/', year: 2018, result: '敢闘賞 / パテント審査優良賞' },
      { contestName: 'KOSENセキュリティコンテスト2018', contestURL: 'https://sckosen2018.sasebo.ac.jp/', year: 2018, result: '35チーム中17位' },
      { contestName: '全国高専プログラミングコンテスト 自由部門', contestURL: 'http://www.procon.gr.jp/', year: 2019, result: '敢闘賞 / パテント審査優良賞' },
      { contestName: '日本情報オリンピック　第19回', contestURL: 'https://www.ioi-jp.org/', year: 2019, result: '本選出場' },
      { contestName: '全国高専プログラミングコンテスト 課題部門', contestURL: 'http://www.procon.gr.jp/', year: 2020, result: '特別賞' },
      { contestName: 'パソコン甲子園2020　プログラミング部門', contestURL: 'http://web-ext.u-aizu.ac.jp/pc-concours/', year: 2020, result: '総合10位' },
      { contestName: '日本情報オリンピック　第20回', contestURL: 'https://www.ioi-jp.org/', year: 2020, result: '本選出場' },
      { contestName: '全国高専プログラミングコンテスト 課題部門', contestURL: 'http://www.procon.gr.jp/', year: 2022, result: '本選出場' },
      { contestName: 'ICPC 2022 Asia Yokohama Regional', contestURL: 'https://icpc.iisf.or.jp/2022-yokohama/', year: 2022, result: 'アジア地区大会出場' }

    ].reverse()
  }),
  head: {
    title: 'Activities | 一関高専 電算部',
    meta: [
      { hid: 'description', name: 'description', content: '最近の受賞歴・大会参加歴等' },
      { hid: 'og:description', name: 'og:description', content: '最近の受賞歴・大会参加歴等' },
      { hid: 'og:url', name: 'og:url', content: 'https://inct-densan.club/activities' }
    ]
  }
}
</script>

<style lang="stylus" scoped>
.hero
  margin-top 3.23rem

.contents
  margin-bottom 30px

.container
  margin-top 20px
  padding-left 1rem
  padding-right 1rem
</style>
