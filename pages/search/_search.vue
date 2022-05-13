<template>
  <div>
    <Header />
    <div class="py-6 px-12">
      <p>Search "{{ this.slug }}"</p>
    </div>
    <div class="desktop mx-12 my-3">
      <div class="grid grid-cols-5 gap-4 mb-10" v-if="products.length > 0">
        <div
          class="card shadow-md"
          v-for="product in products"
          :key="product.id"
          :size="product.size"
        >
          <NuxtLink :to="'/product/' + product.slug">
            <img
              class="card-img-top"
              :src="path + '/assets/imgs/products/' + product.img"
              alt="Card image cap"
            />
            <div
              class="card-body"
              v-if="product.disc != '0' && products.price != '0'"
            >
              <h5 class="card-title font-bold">{{ product.name }}</h5>
              <h5 class="card-text font-bold">Rp.{{ product.price }}</h5>
              <div class="grid grid-cols-2">
                <h5 class="card-text-promo line-through">
                  Rp.{{ product.disc_price }}
                </h5>
                <p class="card-text-dics font-semibold">-{{ product.disc }}%</p>
              </div>
            </div>
            <div class="card-body" v-else>
              <h5 class="card-title font-bold">{{ product.name }}</h5>
              <h5 class="card-text font-bold">Rp.{{ product.disc_price }}</h5>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="" v-else>
        <div class="flex">
          <div class="flex-1 p-3">
            <div class="product rounded-3xl"></div>
          </div>
          <div class="flex-1 p-3">
            <div class="product rounded-3xl"></div>
          </div>
          <div class="flex-1 p-3">
            <div class="product rounded-3xl"></div>
          </div>
          <div class="flex-1 p-3">
            <div class="product rounded-3xl"></div>
          </div>
          <div class="flex-1 p-3">
            <div class="product rounded-3xl"></div>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="striped-border"></div>
      </div>
    </div>
    <Description />
    <Footer />
    <NavigationBar />
  </div>
</template>

<script>
import Header from '../../components/Header'
import Description from '../../components/Description'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'

const axios = require('axios').default
const headers = {
  Authorization: process.env.API_KEY,
}
export default {
  name: 'SearchPage',
  components: {
    Header,
    Description,
    Footer,
    NavigationBar,
  },
  data() {
    return {
      products: [],
      slug: this.$route.query.search,
      path: process.env.API_URL,
    }
  },
  async created() {
    try {
      axios
        .get(this.path + '/api/product/search', {
          params: {
            q: this.slug,
          },
          headers: headers,
        })
        .then((resp) => {
          this.products = resp.data.data.data
          console.log(this.product)
        })
    } catch (error) {}
  },
}
</script>
