export default ({ $axios, env }) => {
  $axios.onRequest((config) => {
    $axios.setToken(process.env.API_KEY, 'Bearer')
  })
}
