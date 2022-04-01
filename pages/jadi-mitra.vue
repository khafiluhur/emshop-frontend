<template>
  <div>
    <Header />
    <JadiMitra />
    <Footer />
    <NavigationBar />
  </div>
</template>

<script>
import Header from '../components/Header'
import JadiMitra from '../components/JadiMitra.vue'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'

export default {
  name: 'Jadi-Mitra',
  components: { Header, JadiMitra, Footer, NavigationBar },
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
