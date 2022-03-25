<template>
  <div class="mx-12 my-5">
    <VueSlickCarousel v-bind="settings" v-if="Object.keys(banners).length">
      <div v-for="banner in banners" :key="banner.id" :size="banner.size">
        <img
              class="rounded-3xl p-3"
              :src="path + '/assets/imgs/banners/' + banner.img"
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

const axios = require('axios').default;
const headers = {'Authorization': 'Bearer 1|3mTRZGnfTJ4wB0iX7LbAQbEKo6ZtQIbB56zxbNpA'}
export default {
  name: 'Banner',
  components: { VueSlickCarousel },
  data () {
    return {
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000
      },
      banners: [],
      path: 'https://api.shobaro.com',
    }
  },
  async created() {
    try {
      const res = await axios.get(this.path + '/api/banner', {headers: headers});
      this.banners = res.data.data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>

<style>
.slick-dots {
  text-align: left;
  position: initial;
}
.slick-prev:before, .slick-next:before {
  color: black;
}
</style>