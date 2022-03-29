export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EMSHOP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon_app.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: '',
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'EMSHOP',
      author: 'EMSHOP',
    },
    manifest: {
      name: 'EMSHOP',
      app_name: 'EMSHOP',
      short_name: 'EMSHOP',
      lang: 'en',
      display: 'standalone',
      description:
        'OFFICIAL MOBILE APPS OF eMSHOP Kami hadir memberikan produk inovatif dengan kualitas dan harga terbaik, hadir 24 jam melalui channel 79 & 88 Indovision, MNC Play channel 79&88, Indihome channel 110 dan First Media channel 12. Untuk anda dengan aktifitas beragam, kami memberikan kemudahan akses melalui website https://emshop.id maupun mobile apps yang dapat di download di Google Store serta App Store. Beragam produk kami tawarkan untuk memenuhi kebutuhan anda seperti produk Kesehatan, Kecantikan, Fashion, Elektronik &Gadget, Perlengkapan Rumah Tangga, Perlengkapan Dapur sampai Peralatan Olah Raga. Jadilah bagian dari kami dan dapatkan produk-produk eksklusif hanya untuk anda karena eMSHOP THE BEST ONLINE SPECIALTY STORE',
      icons: [
        {
          src: '/icon-72x72.png',
          sizes: '72x',
          type: 'image/png',
        },
        {
          src: '/icon-96x96.png',
          sizes: '96x',
          type: 'image/png',
        },
        {
          src: '/icon-144x144.png',
          sizes: '144x',
          type: 'image/png',
        },
        {
          src: '/icon-192x192.png',
          sizes: '192x',
          type: 'image/png',
        },
      ],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
