<template>
  <div class="mx-12 2xl:mx-96 my-5">
    <div class="flex flex-row mb-10">
      <div class="basis-full" v-for="category in categories" :key="category.id">
        <NuxtLink :to="'/category/' + category.slug">
          <div class="icon-category text-center">
            <img
              class="mx-auto"
              width="56"
              :src="path_image + '/imgs/category/' + category.icon"
              :alt="category.icon"
            />
          </div>
          <p class="text-category fw-bold text-center" style="color: black">
            {{ category.name }}
          </p>
        </NuxtLink>
      </div>
    </div>
    <div class="line-border"></div>
  </div>
</template>

<script>
const axios = require('axios').default
const headers = {
  Authorization: 'Bearer 1|3mTRZGnfTJ4wB0iX7LbAQbEKo6ZtQIbB56zxbNpA',
}
export default {
  name: 'Category',
  data() {
    return {
      categories: [],
      path_image: 'https://image.shobaro.com',
      path: 'https://api.shobaro.com',
    }
  },
  async created() {
    try {
      const res = await axios.get(this.path + '/api/category', {
        headers: headers,
      })
      this.categories = res.data.data
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
.basis-full {
  width: 100%;
}
.text-category {
  font-size: 14px;
}
.icon-category {
  margin-bottom: 24px;
}
.line-border {
  height: 1px;
  background-color: #cccccc;
}
</style>
