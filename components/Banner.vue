<template>
  <div id="banner" class="mx-12 2xl:mx-96 my-5">
    <VueSlickCarousel v-bind="settings" v-if="Object.keys(banners).length">
      <div v-for="banner in banners" :key="banner.id" :size="banner.size">
        <img
          class="rounded-3xl p-3"
          :src="path_image + '/imgs/banners/' + banner.img"
          :alt="banner.title"
        />
      </div>
    </VueSlickCarousel>
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
  name: 'Banner',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
      },
      banners: [],
      path_image: 'https://image.shobaro.com',
      path: 'https://api.shobaro.com',
    }
  },
  async created() {
    try {
      const res = await axios.get(this.path + '/api/banner', {
        headers: headers,
      })
      this.banners = res.data.data
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
#banner .slick-dots {
  text-align: left;
  position: initial;
}
#banner .slick-prev:before,
#banner .slick-next:before {
  color: black;
  font-size: 32px;
}
#banner .slick-arrow {
  border-radius: 20px;
  z-index: 1;
}
#banner .slick-prev {
  left: 22px;
}
#banner .slick-next {
  right: 22px;
}
#banner .slick-prev,
#banner .slick-next {
  width: 42px;
  height: 42px;
}
#banner .slick-dots li button:before {
  font-size: 8px;
}
</style>
