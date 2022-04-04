<template>
  <div class="relative">
    <div class="desktop"></div>
    <div class="mobile">
      <div class="fixed bottom-0 left-0 right-0">
        <div
          class="h-14 mx-3.5 my-3.5 rounded-3xl shadow-xl bg-white grid grid-cols-4 gap-4 text-center"
        >
          <div class="my-auto">
            <nuxt-link to="/">
              <img
                src="../static/navbar/beranda.svg"
                alt=""
                v-if="this.url != 'index'"
              />
              <img src="../static/navbar/beranda-active.svg" alt="" v-else />
              <p class="text-xs mobile-text-nav" v-if="this.url != 'index'">
                Beranda
              </p>
              <p class="text-xs active" v-else>Beranda</p>
            </nuxt-link>
          </div>
          <div class="my-auto">
            <nuxt-link to="/streaming">
              <img
                src="../static/navbar/streaming.svg"
                alt=""
                v-if="this.url != 'streaming'"
              />
              <img src="../static/navbar/streaming-active.svg" alt="" v-else />
              <p class="text-xs mobile-text-nav" v-if="this.url != 'streaming'">
                Streaming
              </p>
              <p class="text-xs active" v-else>Streaming</p>
            </nuxt-link>
          </div>
          <div class="my-auto">
            <nuxt-link to="/jadi-mitra">
              <img
                src="../static/navbar/wishlist.svg"
                alt=""
                v-if="this.url != 'jadi-mitra'"
              />
              <img src="../static/navbar/wishlist-active.svg" alt="" v-else />
              <p
                class="text-xs mobile-text-nav"
                v-if="this.url != 'jadi-mitra'"
              >
                Jadi Mitra
              </p>
              <p class="text-xs active" v-else>Jadi Mitra</p>
            </nuxt-link>
          </div>
          <div class="my-auto">
            <nuxt-link to="/customer-care">
              <img
                src="../static/navbar/account.svg"
                alt=""
                v-if="this.url != 'customer-care'"
              />
              <img src="../static/navbar/account-active.svg" alt="" v-else />
              <p
                class="text-xs mobile-text-nav"
                v-if="this.url != 'customer-care'"
              >
                About
              </p>
              <p class="text-xs active" v-else>About</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      url: this.$route.name,
    }
  },
  async created() {
    try {
      console.log(this.url)
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
.active {
  color: #3374dd;
}
.mobile-text-nav {
  color: #999;
}
</style>
