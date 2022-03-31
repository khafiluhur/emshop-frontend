<template>
  <div>
    <Header />
    <div class="my-4 2xl:mx-96">
      <img
        style="width: 100%"
        :src="path_image + '/imgs/category/' + this.categories.img"
        alt=""
      />
    </div>
    <CategoryItem />
    <Description />
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header'
import CategoryItem from '../../components/CategoryItem'
import Description from '../../components/Description'
import Footer from '../../components/Footer'

const axios = require('axios').default
const headers = {
  Authorization: 'Bearer 1|3mTRZGnfTJ4wB0iX7LbAQbEKo6ZtQIbB56zxbNpA',
}
export default {
  name: 'Category',
  components: { Header, CategoryItem, Description, Footer },
  head() {
    return {
      title: this.title + ' | EMSHOP',
    }
  },
  data() {
    return {
      categories: [],
      title: '',
      slug: this.$route.params.slug,
      path: 'https://api.shobaro.com',
    }
  },
  async created() {
    try {
      const res = await axios.get(
        this.path + '/api/product/category/' + this.slug,
        { headers: headers }
      )
      this.categories = res.data.data
      this.title = res.data.data.name
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style scoped></style>
