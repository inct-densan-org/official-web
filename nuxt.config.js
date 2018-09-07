module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '一関高専 電子計算機部',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '独立行政法人国立高等専門学校機構一関工業高等専門学校 電子計算機部オフィシャルウェブ' },
      { hid: 'og:title', name: 'og:title', content: '一関高専電子計算機部' },
      { hid: 'og:description', name: 'og:description', content: '独立行政法人国立高等専門学校機構一関工業高等専門学校 電子計算機部オフィシャルウェブ' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://inct-densan.club' },
      { hid: 'og:image', name: 'og:image', content: 'https://media.inct-densan.club/site/densan-circle-logo.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@inct_densan' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@inct_densan' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#ffffff' },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
    ]
  },
  css: [
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
  ],
  modules: [
    '@nuxtjs/bulma',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
