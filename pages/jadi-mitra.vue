<template>
  <div>
    <Header />
    <div class="mx-12 2xl:mx-96 my-20 text-center">
      <img class="my-2" src="../static/coming_soon.svg" />
      <p class="font-bold">Coming Soon</p>
      <p class="my-2">
        Jadi Mitra Saat ini belum tersedia silahkan kembali nanti.
      </p>
    </div>
    <div class="mb-5 mx-12 2xl:mx-96">
      <div class="striped-border"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Jadi-Mitra',
  components: { Header, Footer },
  data() {
    return {
      slug: this.$route.name,
    }
  },
  head: {
    title: 'Jadi Mitra | EMSHOP',
  },
}
</script>

<style>
.striped-border {
  border: 1px dashed #ccc;
}
</style>
