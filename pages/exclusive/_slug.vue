<template>
  <div>
    <Header />
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

<style>
.title-exclusive {
  width: 200px;
  height: 20px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  -webkit-animation: 1.5s shine linear infinite;
  animation: 1.5s shine linear infinite;
}
</style>
