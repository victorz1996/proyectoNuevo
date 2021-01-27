export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'proyectoNuevo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: '', // Add `white-content` class here to enable "white" mode.
    },
  },
  router: {
    linkExactActiveClass: 'active',
    middleware: ['auth'],
  },
  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/demo.css',
    'assets/css/nucleo-icons.css',
    'assets/sass/black-dashboard.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    `~/plugins/dashboard-plugin.js`,
    '~/plugins/axios.js',
    { src: '~/plugins/leaflet.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/fontawesome'],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      // brands: true
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/auth-next',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-leaflet',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  axios: {
    host: '127.0.0.1',
    port: '8080',
    prefix: '/api',
    https: false,
    retry: false,
    debug: false,
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/authenticate',
            method: 'post',
            propertyName: 'id_token',
          },
          logout: false,
          user: { url: '/account', method: 'get', propertyName: false },
        },
        tokenRequired: true,
        tokenName: 'Authorization',
        tokenType: 'Bearer',
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/',
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js',
      },
      {
        code: 'es',
        file: 'es.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'es',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
