<template>
  <div>
    <Header />
    <div class="mt-10 text-center">
      <p class="font-bold" v-if="this.slug == 'bestSeller'">Best Seller</p>
      <p class="font-bold" v-else>New Item</p>
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
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
}
</script>

<style scoped></style>
