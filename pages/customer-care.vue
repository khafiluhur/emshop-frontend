<template>
    <div>
        <Header />
        <div class="my-5">
            <img class="mx-auto" src="../static/contact-us.jpeg" />
        </div>
        <div class="mx-96">
            <p class="mb-5 font-bold">PT MNC GS HOMESHOPPING</p>
            <p class="mb-5">MNC Tower Lt.20 Jl. Kebon Sirih No.17-19 Menteng Jakarta Pusat 10340 Indonesia</p>
            <p class="mb-5">Tel. +62 21 1500887</p>
            <div class="mb-5">
                <p>Email :</p>
                <p >cs.mncshop@mncgroup.com</p>
            </div>
        </div>
        <div class="mb-5 mx-12">
            <div class="striped-border"></div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
    name: "Customer Care",
    components : { Header, Footer },
    created () {
        console.log(this.$route);
    }
}
</script>