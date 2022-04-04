<template>
  <div id="banner" class="">
    <div class="desktop mx-12 my-5">
      <VueSlickCarousel v-bind="settings" v-if="Object.keys(banners).length">
        <div v-for="banner in banners" :key="banner.id" :size="banner.size">
          <img
            class="rounded-3xl p-3"
            :src="path_image + '/imgs/banners/' + banner.img"
            :alt="banner.title"
          />
        </div>
      </VueSlickCarousel>
      <div class="flex" v-else>
        <div class="flex-1 p-3">
          <div class="image rounded-3xl"></div>
        </div>
        <div class="flex-1 p-3">
          <div class="image rounded-3xl"></div>
        </div>
        <div class="flex-1 p-3">
          <div class="image rounded-3xl"></div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <VueSlickCarousel
        v-bind="mobile_settings"
        v-if="Object.keys(banners).length"
      >
        <div v-for="banner in banners" :key="banner.id" :size="banner.size">
          <img
            class=""
            :src="path_image + '/imgs/banners/' + banner.img"
            :alt="banner.title"
          />
        </div>
      </VueSlickCarousel>
      <div class="flex" v-else>
        <div class="flex-1">
          <div class="image"></div>
        </div>
      </div>
    </div>
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
      mobile_settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
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
#banner .mobile .slick-dots {
  text-align: center;
  position: relative;
  bottom: 35px;
}
#banner .mobile .slick-dots li {
  width: 4px;
}
#banner .slick-prev:before,
#banner .slick-next:before {
  color: white;
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
.image {
  height: 240px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
@-webkit-keyframes shine {
  to {
    background-position-x: -200%;
  }
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
