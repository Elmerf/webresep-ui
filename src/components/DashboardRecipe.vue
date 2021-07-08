<template>
  <div style="width: 80%" class="mx-auto">
    <div class="row mt-3">
      <h3 class="text-start">Resepku</h3>
    </div>
    <div class="mt-3 text-start">
      <button class="btn btn-success mb-3" v-on:click="AddResep">
        <strong> Tambah Resep</strong>
      </button>
    </div>
    <div
      v-if="Object.keys(recipes).length === 0"
      class="text-muted text-center"
    >
      Kamu masih belum punya resep nih, yuk mulai berbagi resep kesukaanmu!
    </div>
    <ul class="cards">
      <li class="cards_item">
        <div v-for="recipe in recipes" :key="recipe.id">
          <CardRecipeUser :recipe="recipe" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CardRecipeUser from "@/components/CardRecipeUser.vue";
import axios from "axios";

export default {
  name: "DashboardRecipe",
  components: {
    CardRecipeUser,
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

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}
.card {
  background-color: #ffffff;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
