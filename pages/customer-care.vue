<template>
  <div>
    <Header />
    <CustomerCare />
    <Footer />
    <NavigationBar />
  </div>
</template>

<script>
import Header from '../components/Header'
import CustomerCare from '../components/CustomerCare'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'

export default {
  name: 'Customer-Care',
  components: { Header, CustomerCare, Footer, NavigationBar },
  data() {
    return {
      slug: this.$route.name,
    }
  },
  head: {
    title: 'Customer Care | EMSHOP',
  },
}
</script>

<style></style>
