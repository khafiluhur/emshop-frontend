<template>
  <div class="mx-12 2xl:mx-96 my-5">
    <div>
      <div class="flex flex-row py-3" v-if="products.length > 0">
        <div class="mr-auto flex flex-row">
          <p class="text-title font-bold">Terlaris</p>
        </div>
        <div class="my-auto">
          <nuxt-link to="/exclusive/bestSeller" class="mx-3 font-light">
            Lihat Semua
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-row py-3" v-else>
        <div class="mr-auto flex flex-row">
          <div class="title-section"></div>
        </div>
        <div class="my-auto">
          <div class="title-section"></div>
        </div>
      </div>
    </div>
    <div class="mb-10" id="bestSeller">
      <VueSlickCarousel v-bind="settings" v-if="Object.keys(products).length">
        <div
          class="card shadow-md"
          v-for="product in products"
          :key="product.id"
          :size="product.size"
        >
          <NuxtLink :to="'/product/' + product.slug">
            <img
              class="card-img-top"
              :src="path_image + '/imgs/products/' + product.img"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title font-bold">{{ product.name }}</h5>
              <h5 class="card-text font-bold">Rp.{{ product.price }}</h5>
              <div class="grid grid-cols-2">
                <h5 class="card-text-promo line-through">
                  Rp.{{ product.disc_price }}
                </h5>
                <p class="card-text-dics font-semibold">-{{ product.disc }}%</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </VueSlickCarousel>
      <div class="flex" v-else>
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
    <div class="line-border"></div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

const axios = require('axios').default
const headers = {
  Authorization: 'Bearer 1|3mTRZGnfTJ4wB0iX7LbAQbEKo6ZtQIbB56zxbNpA',
}
export default {
  name: 'BestSeller',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        slidesToShow: 5,
      },
      products: [],
      path_image: 'https://image.shobaro.com',
      path: 'https://api.shobaro.com',
    }
  },
  async created() {
    try {
      const res = await axios.get(
        this.path + '/api/product/exclusive/bestSeller',
        {
          headers: headers,
        }
      )
      this.products = res.data.data.data
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
.text-title {
  font-size: 26px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
#bestSeller > .slick-slider > .slick-list > .slick-track > .slick-slide {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.card-text {
  font-size: 18px;
  font-weight: bold;
  text-align: start;
  margin-bottom: 8px;
}
.card-text-promo {
  font-size: 14px;
  text-align: start;
}
.card-text-disc {
  font-size: 14px;
  font-weight: bold;
  color: #ff0000;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
.card-img-top {
  height: 200px;
  width: 100%;
  display: block;
  object-fit: contain;
}
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}
.card-title {
  font-size: 14px;
  text-align: start;
  font-weight: 700;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 25px;
  height: 46px;
}
.card-text-dics {
  font-size: 14px;
  font-weight: 700;
  color: #ff0000;
}
#bestSeller .slick-arrow {
  border-radius: 20px;
  z-index: 1;
}
#bestSeller .slick-prev {
  left: -6px;
}
#bestSeller .slick-next {
  right: -6px;
}
#bestSeller .slick-prev,
#bestSeller .slick-next {
  width: 42px;
  height: 42px;
}
#bestSeller .slick-dots li button:before {
  font-size: 8px;
}
#bestSeller .slick-prev:before {
  color: black;
  font-size: 32px;
}
#bestSeller .slick-next:before {
  color: black;
  font-size: 32px;
}
.title-section {
  width: 100px;
  height: 39px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.product {
  height: 330px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
</style>
