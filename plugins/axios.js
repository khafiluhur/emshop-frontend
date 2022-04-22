export default ({ $axios }) => {
  $axios.setHeader('Authorization', 'Bearer' + process.env.API_KEY)
}
