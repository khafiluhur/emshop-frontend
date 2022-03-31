<template>
  <div>
    <Header />
    <div class="mt-10 text-center">
      <p class="font-bold" v-if="this.slug == 'bestSeller'">Best Seller</p>
      <p class="font-bold" v-else-if="this.slug === 'newItem'">New Item</p>
      <p class="font-bold" v-else>Pilihan Lain Untukmu</p>
    </div>
    <ExclusiveItem />
    <Description />
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header'
import ExclusiveItem from '../../components/ExclusiveItem'
import Description from '../../components/Description'
import Footer from '../../components/Footer'

export default {
  components: {
    Header,
    ExclusiveItem,
    Description,
    Footer,
  },
  head() {
    return {
      title: this.slug + ' | EMSHOP',
    }
  },
  data() {
    return {
      title: '',
      slug: this.$route.params.slug,
    }
  },
}
</script>

<style></style>
