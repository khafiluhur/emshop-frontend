<template>
  <div>
    <Header />
    <Banner />
    <Category />
    <BestSeller />
    <NewItem />
    <RelateItem />
    <Description />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header"
import Banner from "../components/Banner"
import Category from "../components/Category"
import BestSeller from "../components/BestSeller"
import NewItem from "../components/NewItem"
import RelateItem from "../components/RelateItem"
import Description from "../components/Description"
import Footer from "../components/Footer"

export default {
  name: 'IndexPage',
  components: { Header, Banner, Category, BestSeller, NewItem, RelateItem, Description, Footer },
}
</script>

<style>
</style>