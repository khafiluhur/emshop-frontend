<template>
  <div>
    <Header />
    <div class="">
      <div class="mx-12 mt-10 flex">
        <nuxt-link to="/">
          <p style="color: #999999">Home</p>
        </nuxt-link>
        <p class="mx-4" style="color: #999999">></p>
        <nuxt-link :to="'/category/' + this.products.slug_category">
          <p style="color: #999999">{{ this.products.category }}</p>
        </nuxt-link>
        <p class="mx-4" style="color: #999999">></p>
        <p class="font-bold" style="color: #999999">{{ this.products.name }}</p>
      </div>
      <div class="">
        <div class="grid grid-cols-2 mx-12 my-10">
          <div class="mx-auto">
            <img
              class="border border-1"
              width="300"
              :src="path + '/assets/imgs/products/' + this.products.img"
              :alt="this.products.sku"
            />
          </div>
          <div class="">
            <h3 class="title-product font-bold mb-2">
              {{ this.products.name }}
            </h3>
            <h3 class="text-code-item text-start pb-3 mb-2">
              Kode item: {{ this.products.sku }}
            </h3>
            <div class="row">
              <div class="col-2" style="width: 84px">
                <div class="dicount font-bold">
                  <p class="py-2 px-2">-{{ this.products.disc }}%</p>
                </div>
              </div>
              <div class="col-10 text-start mb-5">
                <h4
                  class="text-price font-bold mb-0"
                  style="color: red; font-size: 18px"
                >
                  Rp{{ this.products.price }}
                </h4>
                <a class="text-price pe-2">Hemat:</a>
                <a class="text-price" style="text-decoration: line-through"
                  >Rp{{ this.products.disc_price }}</a
                >
              </div>
            </div>
            <div class="">
              <hr />
            </div>
            <p
              class="text-start"
              style="font-size: 16px; white-space: pre-line"
            >
              {{ this.products.short_desc }}
            </p>
            <div class="my-5">
              <hr />
            </div>
            <nav
              class="navbar navbar-expand-lg navbar-light bg-social d-none d-sm-none d-lg-block"
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
                          class="shadow-sm"
                          style="
                            background-color: white;
                            border-radius: 50%;
                            width: 52px;
                            height: 52px;
                            border: 1px solid #f37727;
                          "
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
                          class="shadow-sm border border-1"
                          style="
                            background-color: white;
                            border-radius: 50%;
                            width: 52px;
                            height: 52px;
                          "
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
                    <li class="nav-item5" v-if="this.links.shopee != 'shopee'">
                      <a target="_blank" :href="this.links.shopee">
                        <div
                          class="shadow-sm border border-1"
                          style="
                            background-color: white;
                            border-radius: 50%;
                            width: 52px;
                            height: 52px;
                          "
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
                        class="shadow-sm border border-1"
                        style="
                          background-color: white;
                          border-radius: 50%;
                          width: 52px;
                          height: 52px;
                        "
                      >
                        <img
                          class="p-1 mt-1 mx-auto block"
                          width="40"
                          src="../../static/product/lazada.svg"
                          alt=""
                        />
                      </div>
                    </li>
                    <li class="nav-item5" v-if="this.links.blibli != 'blibli'">
                      <div
                        class="shadow-sm border border-1"
                        style="
                          background-color: white;
                          border-radius: 50%;
                          width: 52px;
                          height: 52px;
                        "
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
                        class="shadow-sm border border-1"
                        style="
                          background-color: white;
                          border-radius: 50%;
                          width: 52px;
                          height: 52px;
                        "
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
          </div>
        </div>
      </div>
      <div
        class="d-none d-md-none d-sm-block"
        style="height: 20px; background-color: #f6f6f6; margin-bottom: 40px"
      ></div>
      <div class="mx-12 my-10">
        <h1
          class="text-start font-bold"
          style="font-size: 18px; marign-bottom: 16px"
        >
          Deskripsi Produk
        </h1>
        <p
          class="text-start mb-0"
          style="font-size: 16px; white-space: pre-line"
        >
          {{ this.products.full_desc }}
        </p>
        <p class="text-start font-bold" style="font-size: 18px; color: #f37727">
          Lihat lebih banyak
        </p>
      </div>
      <div
        class="d-none d-md-none d-sm-block"
        style="height: 20px; background-color: #f6f6f6; margin-bottom: 40px"
      ></div>
    </div>
    <RandomItem />
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header'
import RandomItem from '../../components/RandomItem'
import Footer from '../../components/Footer'

const axios = require('axios').default
const headers = {
  Authorization: 'Bearer 1|3mTRZGnfTJ4wB0iX7LbAQbEKo6ZtQIbB56zxbNpA',
}
export default {
  name: 'Product',
  components: { Header, RandomItem, Footer },
  data() {
    return {
      products: [],
      links: [],
      slug: this.$route.params.slug,
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
      console.log()
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
  color: red;
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
  background-color: red;
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
</style>
