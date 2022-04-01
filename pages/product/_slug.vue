<template>
  <div>
    <Header />
    <div class="2xl:mx-96">
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
                :src="path_image + '/imgs/products/' + this.products.img"
                :alt="this.products.sku"
              />
            </div>
            <div class="mx-auto" v-else>
              <div class="image-product"></div>
            </div>
            <div class="">
              <h3
                class="title-product font-bold mb-2"
                v-if="this.products.length != 0"
              >
                {{ this.products.name }}
              </h3>
              <div class="mb-2 title-product-loading" v-else></div>
              <h3
                class="text-code-item text-start pb-3 mb-2"
                v-if="this.products.length != 0"
              >
                Kode item: {{ this.products.sku }}
              </h3>
              <div class="pb-3 mb-2 title-code-product-loading" v-else></div>
              <div class="row">
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
              <div class="">
                <hr />
              </div>
              <p
                class="text-start title-product-desc"
                v-if="this.products.length != 0"
              >
                {{ this.products.short_desc }}
              </p>
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
                      <li class="nav-item" v-if="this.links.aladin != 'aladin'">
                        <a target="_blank" :href="this.links.aladin">
                          <div
                            class="shadow-sm border border-1 aladin-order btn-order"
                          >
                            <img
                              class="p-1 mx-auto block"
                              width="35"
                              src="../../static/product/aladin.svg"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item mx-3"
                        v-if="this.links.tokopedia != 'tokopedia'"
                      >
                        <a target="_blank" :href="this.links.tokopedia">
                          <div
                            class="shadow-sm border border-1 tokopedia-order btn-order"
                          >
                            <img
                              class="p-1 mt-1 mx-auto block"
                              width="35"
                              src="../../static/product/tokopedia.svg"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item5"
                        v-if="this.links.shopee != 'shopee'"
                      >
                        <a target="_blank" :href="this.links.shopee">
                          <div
                            class="shadow-sm border border-1 shopee-order btn-order"
                          >
                            <img
                              class="p-1 mt-1 mx-auto block"
                              width="35"
                              src="../../static/product/shopee.svg"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item5 mx-3"
                        v-if="this.links.lazada != 'lazada'"
                      >
                        <div
                          class="shadow-sm border border-1 lazada-order btn-order"
                        >
                          <img
                            class="p-1 mt-1 mx-auto block"
                            width="40"
                            src="../../static/product/lazada.svg"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        class="nav-item5"
                        v-if="this.links.blibli != 'blibli'"
                      >
                        <div
                          class="shadow-sm border border-1 blibli-order btn-order"
                        >
                          <img
                            class="p-1 mt-1 mx-auto block"
                            width="35"
                            src="../../static/product/blibli.svg"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        class="nav-item5 mx-3"
                        v-if="this.links.bukalapak != 'bukalapak'"
                      >
                        <div
                          class="shadow-sm border border-1 bukalapak-order btn-order"
                        >
                          <img
                            class="p-1 mt-1 mx-auto"
                            width="40"
                            src="../../static/product/bukalapak.svg"
                            alt=""
                          />
                        </div>
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
                class="border border-1 w-full"
                :src="path_image + '/imgs/products/' + this.products.img"
                :alt="this.products.sku"
              />
            </div>
            <div class="" v-else>
              <div class="image-product-mobile"></div>
            </div>
            <div class="mx-2 mt-5">
              <h3
                class="title-product font-bold mb-2"
                v-if="this.products.length != 0"
              >
                {{ this.products.name }}
              </h3>
              <div class="mb-2 title-product-loading" v-else></div>
              <h3
                class="text-code-item text-start pb-3 mb-2"
                v-if="this.products.length != 0"
              >
                Kode item: {{ this.products.sku }}
              </h3>
              <div class="pb-3 mb-2 title-code-product-loading" v-else></div>
              <div class="grid grid-cols-4 gap-4">
                <div class="disc-col" v-if="this.products.length != 0">
                  <div class="dicount font-bold">
                    <p class="py-2 px-2">-{{ this.products.disc }}%</p>
                  </div>
                </div>
                <div class="disc-col" v-else>
                  <div class="disc-loading rounded">
                    <p class="py-2 px-2"></p>
                  </div>
                </div>
                <div class="text-start mb-5 col-span-3">
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
                    <p class="text-price pe-2">
                      Hemat: <s>Rp{{ this.products.disc_price }}</s>
                    </p>
                  </div>
                  <div v-else>
                    <div class="product-disc-price"></div>
                  </div>
                </div>
              </div>
              <div class="">
                <hr />
              </div>
              <p
                class="text-start title-product-desc"
                v-if="this.products.length != 0"
              >
                {{ this.products.short_desc }}
              </p>
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
                <div class="font-bold mb-2">Pesan disini :</div>
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
                              class="p-1 mx-auto block"
                              width="35"
                              src="../../static/product/aladin.svg"
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
                              class="p-1 mt-1 mx-auto block"
                              width="35"
                              src="../../static/product/tokopedia.svg"
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
                              class="p-1 mt-1 mx-auto block"
                              width="35"
                              src="../../static/product/shopee.svg"
                              alt=""
                            />
                          </div>
                        </a>
                      </li>
                      <li
                        class="nav-item5 mx-1"
                        v-if="this.links.lazada != 'lazada'"
                      >
                        <div
                          class="shadow-sm border border-1 lazada-order btn-order"
                        >
                          <img
                            class="p-1 mt-1 mx-auto block"
                            width="40"
                            src="../../static/product/lazada.svg"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        class="nav-item5 mx-1"
                        v-if="this.links.blibli != 'blibli'"
                      >
                        <div
                          class="shadow-sm border border-1 blibli-order btn-order"
                        >
                          <img
                            class="p-1 mt-1 mx-auto block"
                            width="35"
                            src="../../static/product/blibli.svg"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        class="nav-item5 mx-1"
                        v-if="this.links.bukalapak != 'bukalapak'"
                      >
                        <div
                          class="shadow-sm border border-1 bukalapak-order btn-order text-center"
                        >
                          <img
                            class="p-1 mt-1 mx-auto"
                            width="40"
                            src="../../static/product/bukalapak.svg"
                            alt=""
                          />
                        </div>
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
    <RandomItem />
    <Footer />
    <NavigationBar />
  </div>
</template>

<script>
import Header from '../../components/Header'
import RandomItem from '../../components/RandomItem'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'

const axios = require('axios').default
const headers = {
  Authorization: 'Bearer 1|3mTRZGnfTJ4wB0iX7LbAQbEKo6ZtQIbB56zxbNpA',
}
export default {
  name: 'Product',
  components: { Header, RandomItem, Footer, NavigationBar },
  head() {
    return {
      title: this.title + ' | EMSHOP',
    }
  },
  data() {
    return {
      products: [],
      links: [],
      title: '',
      slug: this.$route.params.slug,
      path_image: 'https://image.shobaro.com',
      path: 'https://api.shobaro.com',
    }
  },
  async created() {
    try {
      const res = await axios.get(this.path + '/api/product/' + this.slug, {
        headers: headers,
      })
      this.products = res.data.data
      this.links = res.data.data.link
      this.title = res.data.data.name
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
.title-product {
  font-size: 20px;
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
</style>
