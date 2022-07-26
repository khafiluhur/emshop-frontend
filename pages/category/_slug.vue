<template>
  <div>
    <Header />
    <div class="desktop">
      <div class="mb-5 m-11" v-if="categories.length != 0">
        <img
          class="rounded-3xl"
          style="width: 100%"
          :src="path + '/assets/imgs/category/' + this.categories.img"
          alt=""
        />
      </div>
      <div v-else>
        <div class="banner-category"></div>
      </div>
      <div class="mx-12 mt-10 flex">
        <nuxt-link to="/">
          <p style="color: #999999">Home</p>
        </nuxt-link>
        <p class="mx-4" style="color: #999999">></p>
        <nuxt-link :to="'/category/' + this.categories.slug">
          <h1 class="font-bold" style="color: #999999">
            {{ this.categories.name }}
          </h1>
        </nuxt-link>
      </div>
    </div>
    <div class="mobile">
      <div class="mb-5" v-if="categories.length != 0">
        <img
          style="width: 100%"
          :src="path + '/assets/imgs/category/' + this.categories.img"
          alt=""
        />
      </div>
      <div v-else>
        <div class="banner-category"></div>
      </div>
    </div>
    <CategoryItem />
    <div class="mx-12 my-5">
      <div class="desktop">
        <div class="mb-10">
          <p v-html="this.categories.description"></p>
        </div>
        <div class="mb-5 m">
          <div class="striped-border"></div>
        </div>
      </div>
      <div class="mobile"></div>
    </div>
    <Footer />
    <NavigationBar />
  </div>
</template>

<script>
import Header from '../../components/Header'
import CategoryItem from '../../components/CategoryItem'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'

const axios = require('axios').default
const headers = {
  Authorization: process.env.API_KEY,
}
export default {
  name: 'Category',
  components: { Header, CategoryItem, Footer, NavigationBar },
  data() {
    return {
      categories: [],
      title: '',
      slug: this.$route.params.slug,
      path: process.env.API_URL,
    }
  },
  head() {
    return {
      title: this.title + ' | EMSHOP',
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
strong {
  font-weight: bold !important;
}
</style>
