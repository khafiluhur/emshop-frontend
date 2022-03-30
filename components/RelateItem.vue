<template>
  <div class="mx-12 2xl:mx-96 my-10">
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
          <div class="card-body">
            <h5 class="card-title font-bold">{{ product.name }}</h5>
            <h5 class="card-text font-bold">Rp.{{ product.price }}</h5>
            <div class="grid grid-cols-2">
              <h5 class="card-text-promo line-through">
                Rp.{{ product.disc_price }}
              </h5>
              <h5 class="card-text-dics font-bold">-{{ product.disc }}%</h5>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-else>
      <p class="my-5 text-center">Data Not Found</p>
    </div>
    <div class="mb-5">
      <div class="striped-border"></div>
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
      path: 'https://api.shobaro.com',
    }
  },
  async created() {
    try {
      const res = await axios.get(this.path + '/api/product', {
        headers: headers,
      })
      this.products = res.data.data
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
}
</style>
