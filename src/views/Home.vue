<template>
  <div class="home">
    <NavBar />
    <Banner />
    <CardProduct />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import NavBar from "@/components/NavBar.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Banner,
    CardProduct,
  },
};
</script>
