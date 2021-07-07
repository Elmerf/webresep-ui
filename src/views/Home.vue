<template>
  <div class="home">
    <NavBar />
    <Banner />
    <div class="container">
      <div class="row md-4">
        <div class="col md-6">
        </div>
        <div class="col-md-5"></div>
        <div class="col-md-3">
          <router-link to="/masakan">
            <button class="btn btn-success float-right">
              <b-icon-arrow-up></b-icon-arrow-up>
              Lihat Semua Resep <strong>DISINI </strong>
            </button></router-link
          >
        </div>
      </div>
    </div>
    
    <CardProductOverview />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import NavBar from "@/components/NavBar.vue";
import CardProductOverview from "@/components/CardProductOverview.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Banner,
    CardProductOverview,
    Footer,
  },
};
</script>
