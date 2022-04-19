<template>
  <div>
    <Header />
    <div class="desktop">
      <div class="mx-12 mt-10 flex" v-if="this.categories.length != 0">
        <nuxt-link to="/">
          <p style="color: #999999">Home</p>
        </nuxt-link>
        <p class="mx-4" style="color: #999999">></p>
        <nuxt-link :to="'/category/' + this.categories.slug">
          <p class="font-bold" style="color: #999999">
            {{ this.categories.name }}
          </p>
        </nuxt-link>
      </div>
      <div v-else>
        <div class="banner-category"></div>
      </div>
    </div>
    <div class="mobile">
      <div class="mb-5" v-if="categories.length != 0">
        <img
          style="width: 100%"
          :src="path_image1 + '/imgs/category/' + this.categories.img"
          alt=""
        />
      </div>
      <div v-else>
        <div class="banner-category"></div>
      </div>
    </div>
    <CategoryItem />
    <Description />
    <Footer />
    <NavigationBar />
  </div>
</template>

<script>
import Header from '../../components/Header'
import CategoryItem from '../../components/CategoryItem'
import Description from '../../components/Description'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'

const axios = require('axios').default
const headers = {
  Authorization: 'Bearer 1|3mTRZGnfTJ4wB0iX7LbAQbEKo6ZtQIbB56zxbNpA',
}
export default {
  name: 'Category',
  components: { Header, CategoryItem, Description, Footer, NavigationBar },
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
      path_image: 'https://image.shobaro.com',
      path_image1: 'https://api.shobaro.com/assets',
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
    } catch (error) {}
  },
}
</script>

<style>
.banner-category {
  height: 400px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.img-category {
  width: 100%;
  height: 560px;
  background-size: 100% 100%;
}
</style>
