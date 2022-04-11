<template>
  <div class="">
    <div class="desktop mx-12 my-5">
      <div class="flex flex-row mb-10" v-if="categories.length > 0">
        <div
          class="basis-full"
          v-for="category in categories"
          :key="category.id"
        >
          <NuxtLink :to="'/category/' + category.slug">
            <div class="icon-category text-center">
              <img
                class="mx-auto"
                width="56"
                :src="path_image + '/assets/imgs/category/' + category.icon"
                :alt="category.icon"
              />
            </div>
            <p class="text-category fw-bold text-center" style="color: black">
              {{ category.name }}
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-row mb-10" v-else>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
      </div>
      <div class="line-border"></div>
    </div>
    <div class="mobile">
      <div class="grid grid-cols-4 gap-4 mb-10" v-if="categories.length > 0">
        <div
          class="basis-full"
          v-for="category in categories"
          :key="category.id"
        >
          <NuxtLink :to="'/category/' + category.slug">
            <div class="icon-category text-center w-11 mx-auto">
              <img
                class="mx-auto"
                width="56"
                :src="path_image + '/assets/imgs/category/' + category.icon"
                :alt="category.icon"
              />
            </div>
            <p
              class="text-category-mobile fw-bold text-center"
              style="color: black"
            >
              {{ category.name }}
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-row mb-10 mt-5" v-else>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
        <div class="basis-full px-3">
          <div class="icon rounded-3xl"></div>
        </div>
      </div>
      <div class="line-border-mobile"></div>
    </div>
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
.line-border-mobile {
  height: 12px;
  background: #f6f6f6;
}
.basis-full {
  width: 100%;
}
.text-category {
  font-size: 14px;
}
.text-category-mobile {
  font-size: 12px;
}
.icon-category {
  margin-bottom: 24px;
}
.line-border {
  height: 1px;
  background-color: #cccccc;
}
.icon {
  height: 130px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
</style>
