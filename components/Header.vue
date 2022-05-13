<template>
  <div class="shadow-md sticky top-0 z-10">
    <div class="desktop">
      <div class="flex flex-row px-12 py-3 bg-header-first">
        <div class="mr-auto flex flex-row">
          <p class="text-download my-auto font-bold">Download app</p>
          <div class="vertical-line-border ml-4"></div>
          <div class="flex flex-row mx-3">
            <a
              target="__blank"
              href="https://play.google.com/store/apps/details?id=com.mncshop.id.android"
            >
              <img
                class="mx-1"
                width="100"
                src="../static/google_play.png"
                alt="google_play_emshop"
              />
            </a>
            <a
              target="__blank"
              href="https://apps.apple.com/us/app/emshop/id1529835643"
            >
              <img
                class="mx-1"
                width="100"
                src="../static/app_store.png"
                alt="app_store_emshop"
              />
            </a>
          </div>
        </div>
        <div class="my-auto">
          <NuxtLink to="/streaming" class="mx-3 font-light text-menu"
            >Streaming</NuxtLink
          >
          <NuxtLink to="/jadi-mitra" class="mx-3 font-light text-menu"
            >Jadi Mitra</NuxtLink
          >
          <NuxtLink to="/customer-care" class="mx-3 font-light text-menu"
            >Customer Care</NuxtLink
          >
        </div>
      </div>
      <div class="flex flex-row px-12 py-6 bg-header-second">
        <NuxtLink class="mr-10" to="/">
          <img width="152" src="../static/logo.png" alt="logo_emshop" />
        </NuxtLink>
        <div class="w-full">
          <form>
            <input
              v-model="myInput"
              @keyup="getLength"
              type="text"
              id="search"
              name="search"
              placeholder="Cari Produk"
              autocomplete="off"
            />
          </form>
        </div>
      </div>
    </div>
    <div
      class="fixed w-full hidden"
      style="top: 124px"
      :class="{ hidden: isSearch }"
    >
      <div class="result-search shadow-md overscroll-contain">
        <div v-for="data in datas" :key="data.id" :size="data.size">
          <div class="p-5 card-result">
            <div class="img-result text-center" style="width: 270px">
              <img
                class="w-1/2"
                :src="path + '/assets/imgs/products/' + data.img"
                alt="product"
              />
            </div>
            <div class="text-result py-8">
              <p class="font-bold">
                {{ data.name }}
              </p>
              <p>Rp {{ data.price }}</p>
              <div>
                <p class="line-through float-left mr-4">
                  Rp {{ data.disc_price }}
                </p>
                <p class="card-text-dics font-semibold">-{{ data.disc }}%</p>
              </div>
            </div>
          </div>
          <hr class="mx-10" />
        </div>
        <!-- <div>
          <div class="p-5 card-result">
            <div class="img-result text-center" style="width: 270px">
              <img
                class="w-1/2"
                src="https://api.shobaro.com/assets/imgs/products/lock-n-lock-air-fryer-rose-gold-black-knife-set.jpg"
                alt="product"
              />
            </div>
            <div class="text-result py-8">
              <p class="font-bold">
                LOCK N LOCK AIR FRYER ROSE GOLD + BLACK KNIFE SET
              </p>
              <p>Rp.799.000</p>
              <div>
                <p class="line-through float-left mr-4">Rp.1.799.000</p>
                <p class="card-text-dics font-semibold">-56%</p>
              </div>
            </div>
          </div>
          <hr class="mx-10" />
        </div>
        <div>
          <div class="p-5 card-result">
            <div class="img-result text-center" style="width: 270px">
              <img
                class="w-1/2"
                src="https://api.shobaro.com/assets/imgs/products/lock-n-lock-low-carbo-rice-cooker-v2-knife-set.jpg"
                alt="product"
              />
            </div>
            <div class="text-result py-8">
              <p class="font-bold">
                LOCK N LOCK LOW CARBO RICE COOKER V2 + KNIFE SET
              </p>
              <p>Rp.999.000</p>
              <div>
                <p class="line-through float-left mr-4">Rp.2.379.000</p>
                <p class="card-text-dics font-semibold">-59%</p>
              </div>
            </div>
          </div>
          <hr class="mx-10" />
        </div> -->
      </div>
    </div>
    <div class="mobile">
      <a
        @click="back"
        class="float-left py-6 px-6 absolute"
        v-if="this.route != 'index'"
      >
        <img src="../static/left.svg" alt="back" />
      </a>
      <div class="text-center py-5 bg-white">
        <NuxtLink to="/">
          <img width="152" src="../static/logo.png" alt="logo_emshop" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default
const headers = {
  Authorization: process.env.API_KEY,
}

export default {
  name: 'Header',
  data() {
    return {
      route: this.$route.name,
      myInput: '',
      datas: [],
      path: process.env.API_URL,
      isSearch: true,
    }
  },
  mounted() {
    // console.log(this.route)
  },
  methods: {
    getLength: function () {
      this.input = this.myInput
      if (this.input.length >= 3) {
        try {
          axios
            .get(this.path + '/api/product/search', {
              params: {
                search: this.input,
              },
              headers: headers,
            })
            .then((resp) => {
              ;(this.datas = resp.data.data.data), (this.isSearch = false)
            })
        } catch (error) {}
        if (this.datas.length != 0) {
          try {
            axios
              .get(this.path + '/api/product/search', {
                params: {
                  search: this.input,
                },
                headers: headers,
              })
              .then((resp) => {
                ;(this.datas = resp.data.data.data), (this.isSearch = false)
              })
          } catch (error) {}
        } else {
          this.isSearch = true
        }
      } else this.isSearch = true
    },
    back() {
      this.$router.go(-1)
    },
  },
}
</script>

<style>
.card-result:hover {
  background-color: var(--N50, #f3f4f5);
}
.img-result {
  float: left;
}
.result-search {
  background: white;
  margin-right: 48px;
  margin-left: 220px;
  border-radius: 8px;
  height: 400px;
  overflow: scroll;
}
#search {
  width: 100%;
  padding: 8px 20px;
  box-sizing: border-box;
  border: solid 1px var(--N75, #e5e7e9);
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.54);
}
#search:focus {
  border: solid 1px var(--N75, #e5e7e9);
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
#search:focus-visible {
  border: solid 1px var(--N75, #e5e7e9) !important;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.btn-emshop {
  font-size: 14px;
}
.bg-header-first {
  background-color: #f6f6f6;
}
.bg-header-second {
  background-color: white;
}
.text-download {
  font-size: 14px;
}
.nuxt-link-active {
  color: #f37727;
}
.vertical-line-border {
  border-left: 1px solid #ccc;
  height: 29px;
}
.text-menu:hover {
  color: #f37727;
}
@media screen and (max-width: 979px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
@media screen and (min-width: 980px) {
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
}
</style>
