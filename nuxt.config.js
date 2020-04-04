export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
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
        property: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        property: 'og:image',
        content: 'https://tanawitp.me/images/thumbnail.png'
      },
      {
        property: 'og:url',
        content: 'https://tanawitp.me'
      }
    ],
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap'
      },
      {
        rel: 'canonical',
        href: 'https://tanawitp.me'
      }
    ]
  },
  render: {
    static: {
      maxAge: 1000 * 60 * 60
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
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
