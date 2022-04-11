<template>
  <div class="">
    <div class="desktop mx-12 my-10">
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
              :src="path_image + '/assets/imgs/products/' + product.img"
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
    <div class="mobile mx-2 mb-20">
      <div class="grid grid-cols-2 gap-4 mb-10" v-if="products.length > 0">
        <div
          class="card shadow-md"
          v-for="product in products"
          :key="product.id"
          :size="product.size"
        >
          <NuxtLink :to="'/product/' + product.slug">
            <img
              class="card-img-top"
              :src="path_image + '/assets/imgs/products/' + product.img"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title-mobile font-bold">{{ product.name }}</h5>
              <div class="grid grid-cols-3 mb-2">
                <h5 class="card-text-promo-mobile line-through col-span-2">
                  Rp.{{ product.disc_price }}
                </h5>
                <p class="card-text-dics-mobile font-semibold">
                  -{{ product.disc }}%
                </p>
              </div>
              <h5 class="card-text-mobile font-bold">Rp.{{ product.price }}</h5>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default
const headers = {
  Authorization: 'Bearer 1|3mTRZGnfTJ4wB0iX7LbAQbEKo6ZtQIbB56zxbNpA',
}

export default {
  name: 'BestSeller',
  data() {
    return {
      products: [],
      slug: this.$route.params.slug,
      path_image: 'https://api.shobaro.com',
      path: 'https://api.shobaro.com',
    }
  },
  async created() {
    try {
      const res = await axios.get(
        this.path + '/api/product/category/' + this.slug,
        { headers: headers }
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
  margin-bottom: 0.75rem;
  font-size: 14px;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 25px;
  height: 46px;
}
</style>
