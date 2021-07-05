<template>
  <div class="home">
    <NavBar />
    <Banner />
    <div class="container">
      <div class="row md-4">
        <div class="col md-6">
          <h2>Resep <strong>Populer</strong> Hari Ini</h2>
        </div>
        <div class="col-md-5"></div>
        <div class="col-md-3">
          <router-link to="/masakan"> <button class="btn btn-success float-right" v-on:click="dashboard">
            <b-icon-arrow-up></b-icon-arrow-up>
            Lihat Semua Resep <strong>DISINI </strong>
          </button></router-link>
        </div>
      </div>
    </div>
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
  methods: {
    dashboard() {
      this.$router.replace("/dashboard");
    },
  },
};
</script>
