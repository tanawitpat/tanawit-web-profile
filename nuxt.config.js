export default {
  mode: 'universal',
  head: {
    title: 'Tanawit Pattanaveerangkoon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        property: 'og:site_name',
        content: 'Tanawit Pattanaveerangkoon'
      },
      {
        property: 'og:title',
        content: 'Tanawit Pattanaveerangkoon'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        property: 'og:image',
        content: 'https://www.tanawitp.me/images/thumbnail.png'
      },
      {
        property: 'og:url',
        content: 'https://www.tanawitp.me'
      }
    ],
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' },
      { rel: 'shoutcut icon', type: 'image/x-icon', href: '/icon.ico' },
      {
        rel: 'canonical',
        href: 'https://www.tanawitp.me'
      }
    ]
  },
  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/aos', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GA_ID || ''
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/dotenv', '@nuxtjs/style-resources', 'vue-scrollto/nuxt'],
  styleResources: {
    scss: ['~assets/scss/main.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
