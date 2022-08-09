<template>
  <div>
    <Header />
    <div class="">
      <div class="desktop">
        <div class="mx-12 mt-10 flex" v-if="this.products.length != 0">
          <nuxt-link to="/">
            <p style="color: #999999">Home</p>
          </nuxt-link>
          <p class="mx-4" style="color: #999999">></p>
          <nuxt-link :to="'/category/' + this.products.slug_category">
            <p style="color: #999999">{{ this.products.category }}</p>
          </nuxt-link>
          <p class="mx-4" style="color: #999999">></p>
          <p class="font-bold" style="color: #999999">
            {{ this.products.name }}
          </p>
        </div>
        <div class="mx-12 mt-10 flex" v-else>
          <div class="breadcrumb"></div>
        </div>
        <div class="">
          <div class="grid grid-cols-2 mx-12 my-10">
            <div class="mx-auto" v-if="this.products.length != 0">
              <img
                class="border border-1"
                width="300"
                :src="path + '/assets/imgs/products/' + this.products.img"
                :alt="this.products.sku"
              />
            </div>
            <div class="mx-auto" v-else>
              <div class="image-product"></div>
            </div>
            <div class="">
              <h1
                class="title-product font-bold mb-2"
                v-if="this.products.length != 0"
              >
                {{ this.products.name }}
              </h1>
              <div class="mb-2 title-product-loading" v-else></div>
              <h3
                class="text-code-item text-start pb-3 mb-2"
                v-if="this.products.length != 0"
              >
                Kode item: {{ this.products.sku }}
              </h3>
              <div class="pb-3 mb-2 title-code-product-loading" v-else></div>
              <div
                class="row"
                v-if="this.products.disc != '0' && this.products.price != '0'"
              >
                <div class="col-2 disc-col" v-if="this.products.length != 0">
                  <div class="dicount font-bold">
                    <p class="py-2 px-2">-{{ this.products.disc }}%</p>
                  </div>
                </div>
                <div class="col-2 disc-col" v-else>
                  <div class="disc-loading rounded">
                    <p class="py-2 px-2"></p>
                  </div>
                </div>
                <div class="col-10 text-start mb-5">
                  <h4
                    class="text-price font-bold mb-0 text-special-price"
                    v-if="this.products.length != 0"
                  >
                    Rp{{ this.products.price }}
                  </h4>
                  <div class="mb-1" v-else>
                    <div class="product-price-loading"></div>
                  </div>
                  <div v-if="this.products.length != 0">
                    <a class="text-price pe-2">Hemat:</a>
                    <a class="text-price text-special-disc-price">
                      Rp{{ this.products.disc_price }}
                    </a>
                  </div>
                  <div v-else>
                    <div class="product-disc-price"></div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="col-10 text-start mb-5">
                  <h4
                    class="text-price font-bold mb-0 text-normal-price"
                    v-if="this.products.length != 0"
                  >
                    Rp{{ this.products.disc_price }}
                  </h4>
                  <div class="mb-1" v-else>
                    <div class="product-price-loading"></div>
                  </div>
                </div>
              </div>
              <div class="mb-6">
                <hr />
              </div>
              <span v-if="this.products.length != 0">
                <p
                  v-html="this.products.short_desc"
                  class="text-start title-product-desc"
                  :class="{ container_desc: isActive }"
                ></p>
                <p
                  class="btnSee"
                  :class="{ hidden: isActive }"
                  @click="isActive = !isActive"
                >
                  Lihat Lebih Sedikit
                </p>
                <p v-if="this.desc_length <= 341"></p>
                <p
                  v-else
                  class="btnSee"
                  :class="{ hidden: !isActive }"
                  @click="isActive = !isActive"
                >
                  Lihat Selengkapnya
                </p>
              </span>
              <div v-else>
                <div class="product-desc-loading mt-5"></div>
              </div>
              <div class="my-5">
                <hr />
              </div>
              <nav
                class="navbar navbar-expand-lg navbar-light bg-social d-none d-sm-none d-lg-block"
                v-if="this.products.length != 0"
              >
                <div class="container-fluid ps-0">
                  <a class="navbar-brand text-download fw-bold" href="#">
                    Pesan disini:
                  </a>
                  <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-3">
                      <li
                        class="nav-item mx-3"
                        v-if="this.links.aladin != 'aladin'"
                      >
                        <a
                          target="_blank"
                          :href="this.links.aladin"
                          v-on:click="viewclik('aladin_mall')"
                        >
                          <div
                            class="shadow-sm border border-1 aladin-order btn-order"
                          >
                            <img
                              class="mx-auto block"
                              width="61"
                              src="../../static/product/1.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item mx-3"
                        v-if="this.links.tokopedia != 'tokopedia'"
                      >
                        <a
                          target="_blank"
                          :href="this.links.tokopedia"
                          v-on:click="viewclik('tokopedia')"
                        >
                          <div
                            class="shadow-sm border border-1 tokopedia-order btn-order"
                          >
                            <img
                              class="mx-auto block"
                              width="61"
                              src="../../static/product/2.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item5 mx-3"
                        v-if="this.links.shopee != 'shopee'"
                      >
                        <a
                          target="_blank"
                          :href="this.links.shopee"
                          v-on:click="viewclik('shopee')"
                        >
                          <div
                            class="shadow-sm border border-1 shopee-order btn-order"
                          >
                            <img
                              class="mx-auto block"
                              width="61"
                              src="../../static/product/3.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item5 mx-3"
                        v-if="this.links.lazada != 'lazada'"
                      >
                        <a
                          target="_blank"
                          :href="this.links.lazada"
                          v-on:click="viewclik('lazada')"
                        >
                          <div
                            class="shadow-sm border border-1 lazada-order btn-order"
                          >
                            <img
                              class="mx-auto block"
                              width="61"
                              src="../../static/product/4.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item5 mx-3"
                        v-if="this.links.blibli != 'blibli'"
                      >
                        <a
                          target="_blank"
                          :href="this.links.blibli"
                          v-on:click="viewclik('blibli')"
                        >
                          <div
                            class="shadow-sm border border-1 blibli-order btn-order"
                          >
                            <img
                              class="mx-auto block"
                              width="61"
                              src="../../static/product/5.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item5 mx-3"
                        v-if="this.links.bukalapak != 'bukalapak'"
                      >
                        <a
                          target="_blank"
                          :href="this.links.bukalapak"
                          v-on:click="viewclik('bukalapak')"
                        >
                          <div
                            class="shadow-sm border border-1 bukalapak-order btn-order text-center"
                          >
                            <img
                              class="mx-auto"
                              width="61"
                              src="../../static/product/61.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <!-- <li class="nav-item5 mx-3">
                        <a
                          target="_blank"
                          :href="
                            'https://wa.me/6281585312144?text=Saya%20tertarik%20dengan%20produk%20ini%3A' +
                            '%0A' +
                            'nama produk%3A' +
                            '%20' +
                            this.products.name +
                            '%0A' +
                            'sku produk%3A' +
                            '%20' +
                            this.products.sku +
                            '%0A' +
                            'harga produk%3A' +
                            '%20' +
                            'Rp.' +
                            this.products.price +
                            '%0A' +
                            'link produk%3A' +
                            '%20' +
                            'https://beta.emshop.id' +
                            this.$route.fullPath
                          "
                        >
                          <div
                            class="shadow-sm border border-1 bukalapak-order btn-order text-center"
                          >
                            <img
                              class="p-1 mx-auto"
                              width="50"
                              src="../../static/product/whatsapp.svg"
                              alt=""
                            />
                          </div>
                        </a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </nav>
              <div v-else>
                <div class="product-order-loading"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-none d-md-none d-sm-block"
          style="height: 20px; background-color: #f6f6f6; margin-bottom: 40px"
        ></div>
      </div>
      <div class="mobile">
        <div class="">
          <div class="grid grid-cols-1">
            <div class="" v-if="this.products.length != 0">
              <img
                class="w-full"
                :src="path + '/assets/imgs/products/' + this.products.img"
                :alt="this.products.img"
              />
            </div>
            <div class="" v-else>
              <div class="image-product-mobile"></div>
            </div>
            <div class="mx-2 mt-5">
              <div
                v-if="this.products.disc != '0' && this.products.price != '0'"
              >
                <div class="flex" v-if="this.products.length != 0">
                  <p class="text-price-mobile pe-2">
                    <s>Rp{{ this.products.disc_price }}</s>
                  </p>
                  <p class="text-disc-mobile font-bold ml-3">
                    -{{ this.products.disc }}%
                  </p>
                </div>
                <div v-else>
                  <div class="product-disc-price"></div>
                </div>
              </div>
              <div class="grid grid-cols-4 gap-4">
                <div
                  class="text-start mb-3 col-span-3"
                  v-if="this.products.disc != '0' && this.products.price != '0'"
                >
                  <h4
                    class="text-price font-bold mb-0 text-special-price-mobile"
                    v-if="this.products.length != 0"
                  >
                    Rp{{ this.products.price }}
                  </h4>
                  <div class="mb-1" v-else>
                    <div class="product-price-loading"></div>
                  </div>
                </div>
                <div class="text-start mb-3 col-span-3" v-else>
                  <h4
                    class="text-price font-bold mb-0 text-special-price-mobile"
                    v-if="this.products.length != 0"
                  >
                    Rp{{ this.products.disc_price }}
                  </h4>
                  <div class="mb-1" v-else>
                    <div class="product-price-loading"></div>
                  </div>
                </div>
              </div>
              <h1
                class="text-code-item text-start mb-2"
                v-if="this.products.length != 0"
              >
                Kode item: {{ this.products.sku }}
              </h1>
              <div class="pb-3 mb-2 title-code-product-loading" v-else></div>
              <h3
                class="title-product-mobile font-bold mb-2"
                v-if="this.products.length != 0"
              >
                {{ this.products.name }}
              </h3>
              <div class="mb-2 title-product-loading" v-else></div>
              <div class="">
                <hr />
              </div>
              <span v-if="this.products.length != 0">
                <p
                  v-html="this.products.short_desc"
                  class="text-start title-product-desc-mobile"
                  :class="{ container_desc: isActive }"
                ></p>
                <p
                  class="btnSee-mobile"
                  :class="{ hidden: isActive }"
                  @click="isActive = !isActive"
                >
                  Lihat Lebih Sedikit
                </p>
                <p v-if="this.desc_length <= 341"></p>
                <p
                  v-else
                  class="btnSee-mobile"
                  :class="{ hidden: !isActive }"
                  @click="isActive = !isActive"
                >
                  Lihat Selengkapnya
                </p>
              </span>
              <div v-else>
                <div class="product-desc-loading mt-5"></div>
              </div>
              <div class="mt-5 mb-1">
                <hr />
              </div>
              <nav
                class="navbar navbar-expand-lg navbar-light bg-social d-none d-sm-none d-lg-block"
                v-if="this.products.length != 0"
              >
                <div class="font-bold mb-2 text-order-mobile">
                  Pesan disini :
                </div>
                <div class="container-fluid ps-0">
                  <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li
                        class="nav-item mx-1"
                        v-if="this.links.aladin != 'aladin'"
                      >
                        <a target="_blank" :href="this.links.aladin">
                          <div
                            class="shadow-sm border border-1 aladin-order btn-order"
                          >
                            <img
                              class="mx-auto block"
                              width="61"
                              src="../../static/product/1.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item mx-1"
                        v-if="this.links.tokopedia != 'tokopedia'"
                      >
                        <a target="_blank" :href="this.links.tokopedia">
                          <div
                            class="shadow-sm border border-1 tokopedia-order btn-order"
                          >
                            <img
                              class="mx-auto block"
                              width="61"
                              src="../../static/product/2.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item5 mx-1"
                        v-if="this.links.shopee != 'shopee'"
                      >
                        <a target="_blank" :href="this.links.shopee">
                          <div
                            class="shadow-sm border border-1 shopee-order btn-order"
                          >
                            <img
                              class="mx-auto block"
                              width="61"
                              src="../../static/product/3.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item5 mx-1"
                        v-if="this.links.lazada != 'lazada'"
                      >
                        <a target="_blank" :href="this.links.lazada">
                          <div
                            class="shadow-sm border border-1 lazada-order btn-order"
                          >
                            <img
                              class="mx-auto block"
                              width="61"
                              src="../../static/product/4.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item5 mx-1"
                        v-if="this.links.blibli != 'blibli'"
                      >
                        <a target="_blank" :href="this.links.blibli">
                          <div
                            class="shadow-sm border border-1 blibli-order btn-order"
                          >
                            <img
                              class="mx-auto block"
                              width="61"
                              src="../../static/product/5.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item5 mx-1"
                        v-if="this.links.bukalapak != 'bukalapak'"
                      >
                        <a target="_blank" :href="this.links.bukalapak">
                          <div
                            class="shadow-sm border border-1 bukalapak-order btn-order text-center"
                          >
                            <img
                              class="mx-auto"
                              width="61"
                              src="../../static/product/61.png"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div v-else>
                <div class="product-order-loading"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="line-border-mobile"></div>
      </div>
    </div>
    <div class="mobile mb-5">
      <div>
        <div class="flex flex-row py-3 mx-2" v-if="product_category.length > 0">
          <div class="mr-auto flex flex-row">
            <p class="text-title-mobile font-bold">Lainnya di kategori ini</p>
          </div>
          <div class="my-auto">
            <nuxt-link
              :to="'/category/' + products.slug_category"
              class="mx-3 font-bold mobile-more-all"
            >
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
      <div class="mb-5" id="bestSeller" v-if="product_category.length > 0">
        <VueSlickCarousel
          v-bind="mobile_settings"
          v-if="Object.keys(product_category).length"
        >
          <div
            class="card shadow-md"
            v-for="product in product_category"
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
                <h5 class="card-title-mobile font-bold">{{ product.name }}</h5>
                <div class="grid grid-cols-3 mb-2">
                  <h5 class="card-text-promo-mobile line-through col-span-2">
                    Rp.{{ product.disc_price }}
                  </h5>
                  <p class="card-text-dics-mobile font-semibold">
                    -{{ product.disc }}%
                  </p>
                </div>
                <h5 class="card-text-mobile font-bold">
                  Rp.{{ product.price }}
                </h5>
              </div>
            </NuxtLink>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="flex" v-else>
        <div class="flex-1 p-3">
          <div class="product rounded-3xl"></div>
        </div>
        <div class="flex-1 p-3">
          <div class="product rounded-3xl"></div>
        </div>
      </div>
    </div>
    <div class="line-border-mobile mobile"></div>
    <RandomItem />
    <Footer />
    <NavigationBar />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import Header from '../../components/Header'
import RandomItem from '../../components/RandomItem'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'

const axios = require('axios').default
const headers = {
  Authorization: process.env.API_KEY,
}
export default {
  name: 'Product',
  components: { Header, RandomItem, Footer, NavigationBar, VueSlickCarousel },
  data() {
    return {
      mobile_settings: {
        arrows: false,
        slidesToShow: 2,
      },
      isActive: true,
      desc_length: '',
      product_category: [],
      products: [],
      links: [],
      title: '',
      slug: this.$route.params.slug,
      path: process.env.API_URL,
      eco: '',
    }
  },
  computed: {
    libText: function () {
      // return directly html
      var str = '<div><p>some html</p></div>'
      return str
    },
  },
  head() {
    return {
      title: this.title + ' | EMSHOP',
    }
  },
  async created() {
    try {
      const res = await axios.get(this.path + '/api/product/' + this.slug, {
        headers: headers,
      })
      const res_category = await axios.get(
        this.path + '/api/product/category/' + res.data.data.slug_category,
        {
          headers: headers,
        }
      )

      this.products = res.data.data
      this.links = res.data.data.link
      this.title = res.data.data.name
      this.desc_length = res.data.data.short_desc.length
      this.product_category = res_category.data.data.data.slice(0, 5)
    } catch (error) {}
  },
  methods: {
    viewclik(eco) {
      axios
        .get(this.path + '/api/product/click/' + this.slug + '?eco=' + eco, {
          headers: headers,
        })
        .then((response) => {
          this.Data = response.data
        })
        .catch((e) => {
          this.errors.push(e)
        })
    },
  },
}
</script>

<style>
.title-product {
  font-size: 20px;
}
.title-product-mobile {
  font-size: 14px;
}
.card-text-disc {
  font-size: 14px;
  font-weight: bold;
  color: #ff0000;
}
.text-code-item {
  font-size: 14px;
  color: #444;
}
.col-2 {
  flex: 0 0 auto;
  width: 80px;
}
.dicount {
  background-color: #ff0000;
  color: white;
  border-radius: 4px;
}
.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}
.text-price {
  font-size: 14px;
  color: #444;
}
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-lg,
.navbar > .container-md,
.navbar > .container-sm,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}
.navbar-expand-lg .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-expand-lg .navbar-nav {
  flex-direction: row;
}
.aladin-order {
  background-color: white;
  border-radius: 50%;
  width: 52px;
  height: 52px;
}
.tokopedia-order {
  background-color: white;
  border-radius: 50%;
  width: 52px;
  height: 52px;
}
.shopee-order {
  background-color: white;
  border-radius: 50%;
  width: 52px;
  height: 52px;
}
.lazada-order {
  background-color: white;
  border-radius: 50%;
  width: 52px;
  height: 52px;
}
.blibli-order {
  background-color: white;
  border-radius: 50%;
  width: 52px;
  height: 52px;
}
.bukalapak-order {
  background-color: white;
  border-radius: 50%;
  width: 52px;
  height: 52px;
}
.btn-order:hover {
  border: 1px solid #f37727;
}
.breadcrumb {
  width: 500px;
  height: 20px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.image-product {
  width: 300px;
  height: 300px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.title-product-loading {
  width: 500px;
  height: 30px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.title-code-product-loading {
  width: 200px;
  height: 20px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.disc-loading {
  width: 60px;
  height: 40px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.disc-col {
  width: 84px;
}
.text-special-price {
  color: #ff0000;
  font-size: 18px;
}
.text-special-price-mobile {
  font-size: 24px;
}
.text-special-disc-price {
  text-decoration: line-through;
}
.product-price-loading {
  width: 120px;
  height: 20px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.product-disc-price {
  width: 200px;
  height: 15px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.title-product-desc {
  font-size: 16px;
  line-height: 20px;
  white-space: pre-line;
  word-break: break-word;
}
.title-product-desc-mobile {
  font-size: 14px;
  white-space: pre-line;
}
.product-desc-loading {
  width: 100%;
  height: 150px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.product-order-loading {
  width: 100%;
  height: 50px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.image-product-mobile {
  width: 100%;
  height: 300px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
.text-price-mobile {
  font-size: 14px;
}
.text-disc-mobile {
  font-size: 14px;
  color: #ff0000;
}
.text-order-mobile {
  font-size: 14px;
}
.btnSee {
  margin: 10px 0;
  color: #f37727;
  font-weight: bold;
  cursor: pointer;
}
.btnSee-mobile {
  font-size: 14px;
  margin: 10px 0;
  color: #f37727;
  font-weight: bold;
  cursor: pointer;
}
.container_desc {
  max-height: 163px;
  overflow: hidden;
}
.text-normal-price {
  color: black;
  font-size: 18px;
}
title-product-desc-mobile p iframe {
  width: 100%;
  height: 100%;
}
.title-product-desc .container_desc ul {
  list-style-type: circle;
}
</style>
