<template>
  <div class="contents">
    <div class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            About
          </h1>
          <h2 class="subtitle">
            電算部の活動について
          </h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <h2 class="title is-1">電算部とは…?</h2>
        <p class="desc">
          電算部とは、一関高専の部活動の1つであり、正式名称は「電子計算機部」です。
          プログラミングやセキュリティ、ネットワーク、ゲーム開発などを行っています。
        </p>
        <div class="notification is-info">
          電算部では動画やイラスト、DTM(音楽)などの人員が不足しています！<br>
          この機会にあなたも電子計算機部に入部しませんか？
        </div>
      </div>
      <div class="contents">
        <h2 class="title is-1">活動概要</h2>
        <h3 class="subtitle is-3 top-space">活動時間</h3>
        <p class="desc">
          活動時間は平日の14:30〜17:00です。土日祝の活動は基本的にありませんが、夏休みなどに合宿を行っています。(通学可、任意参加)<br>
          チャットで連絡を取り合いながら作業をすることもあります。
        </p>
        <h3 class="subtitle is-3 top-space">活動内容</h3>
        <p class="desc">
          ソフトウェア / ゲーム開発、競技プログラミング、ネットワーク / サーバー構築・管理などを行っています。<br>
          また、毎年
          <a
            href="http://www.procon.gr.jp/"
            target="_blank">
            高専プログラミングコンテスト
            <sup><i class="fas fa-fw fa-external-link-alt"/></sup>
          </a> 、
          <a
            href="http://web-ext.u-aizu.ac.jp/pc-concours/"
            target="_blank">
            パソコン甲子園
            <sup><i class="fas fa-fw fa-external-link-alt"/></sup>
          </a>
          に出場しています。
        </p>
        <h3 class="subtitle is-3 top-space">活動場所</h3>
        <p class="desc">
          基本的に電子計算機室 第二実習室で活動しています。<br>
          必要に応じて情報セキュリティ演習室なども使用します。
        </p>
        <h3 class="subtitle is-3 top-space">環境</h3>
        <p class="desc">
          電子計算機室には40台以上のパソコンが設置してあり、基本的にはそれらを使用します。<br>
          加えてサーバー2台、VR開発用PC1台、4Kモニター、Androidタブレットなどがあり、それらを使用してサーバー運用やアプリ開発などを行うことができます。
        </p>
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
  margin-top 20px

.notification
  margin-top 20px
  margin-bottom 20px

.no-space
  margin 0
  padding 0

.desc
  padding-left 1em

.top-space
  margin-top 20px
</style>
