<template>
  <div style="width: 80%" class="mx-auto">
    <h3 class="mt-3 text-start">Resepku</h3>
    <button class="btn btn-warning btn-sm mb-3" v-on:click="AddResep">
      Tambah Resep
    </button>
    <div
      v-if="Object.keys(recipes).length === 0"
      class="text-muted text-center"
    >
      Kamu masih belum punya resep nih, yuk mulai berbagi resep kesukaanmu!
    </div>
    <div v-else class="container">
      <ul class="card" v-for="recipe in recipes" :key="recipe.id">
        <CobaCardRecipe :recipe="recipe" />
      </ul>
    </div>
  </div>
</template>

<script>
import CobaCardRecipe from "@/components/CobaCardRecipe.vue";
import axios from "axios";

export default {
  name: "DashboardRecipe",
  components: {
    CobaCardRecipe,
  },
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    AddResep() {
      this.$router.replace("/dashboard/tambahresep");
    },
    setRecipe(data) {
      this.recipes = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/recipes/user/" + this.$session.get("_id"))
      .then((res) => (this.recipes = res.data))
      .catch((err) => console.log(err));
  },
};
</script>
