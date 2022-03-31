<template>
  <div class="shadow-md sticky top-0 z-10">
    <div class="desktop">
      <div class="flex flex-row px-12 2xl:px-96 py-3 bg-header-first">
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
          <NuxtLink to="/jadi-mitra" class="mx-3 font-light"
            >Jadi Mitra</NuxtLink
          >
          <NuxtLink to="/customer-care" class="mx-3 font-light"
            >Customer Care</NuxtLink
          >
          <NuxtLink to="/streaming" class="font-light">Streaming</NuxtLink>
        </div>
      </div>
      <div class="flex flex-row px-12 2xl:px-96 py-6 bg-header-second">
        <NuxtLink to="/">
          <img width="152" src="../static/logo.png" alt="logo_emshop" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      route: this.$route.name,
    }
  },
}
</script>

<style scoped>
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
</style>
