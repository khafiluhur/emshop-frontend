<template>
  <div>
    <Header />
    <Streaming />
    <Footer />
    <NavigationBar />
  </div>
</template>

<script>
import Header from '../components/Header'
import Streaming from '../components/Streaming'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'

export default {
  name: 'Streaming-view',
  components: { Header, Streaming, Footer, NavigationBar },
  data() {
    return {
      slug: this.$route.name,
    }
  },
  head: {
    title: 'Streaming | EMSHOP',
  },
}
</script>

<style>
.striped-border {
  border: 1px dashed #ccc;
}
</style>
