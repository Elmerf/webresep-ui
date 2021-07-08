<template>
  <div class="home">
    <NavBar />
    <Banner />
    <div class="container">
      <div class="row md-4">
        <div class="col md-6"><h2 class="text-bold">Resep Terbaru</h2></div>
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
    <ul class="cards mx-auto" style="width: 90%">
      <li class="cards_item" v-for="recipe in newestRecipes" :key="recipe.id">
        <CardRecipeUser :recipe="recipe" />
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import CardRecipeUser from "../components/CardRecipeUser.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Banner,
    // CardProductOverview,
    Footer,
    CardRecipeUser,
  },
  data() {
    return { newestRecipes: [] };
  },
  mounted() {
    axios
      .get("http://localhost:3000/recipes/newest")
      .then((res) => (this.newestRecipes = res.data))
      .catch((err) => console.log(err));
  },
};
</script>
