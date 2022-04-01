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
              <img src="../static/navbar/beranda.svg" alt="" />
              <p class="text-xs active">Beranda</p>
            </nuxt-link>
          </div>
          <div class="my-auto">
            <nuxt-link to="/streaming">
              <img src="../static/navbar/streaming.svg" alt="" />
              <p class="text-xs">Streaming</p>
            </nuxt-link>
          </div>
          <div class="my-auto">
            <nuxt-link to="/jadi-mitra">
              <img src="../static/navbar/wishlist.svg" alt="" />
              <p class="text-xs">Jadi Mitra</p>
            </nuxt-link>
          </div>
          <div class="my-auto">
            <nuxt-link to="/customer-care">
              <img src="../static/navbar/account.svg" alt="" />
              <p class="text-xs">Care</p>
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
}
</script>

<style>
.active {
  color: #3374dd;
}
</style>
