<template>
    <div>
        <Header />
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
    name: "404",
    components : { Header, Footer },
    created () {
        console.log(this.$route);
    }
}
</script>