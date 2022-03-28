<template>
  <div>
    <Header />
    <div class="mx-12 my-5">
      <p>{{ this.slug }}</p>
    </div>
    <div class="mb-5 mx-12">
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
}
</script>

<style>
.striped-border {
  border: 1px dashed #ccc;
}
</style>
