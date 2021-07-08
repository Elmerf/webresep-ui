<template>
  <div class="container">
    <h1 class="text">{{ recipe.namaresep }}</h1>
    <div class="gambar-resep">
      <img :src="recipe.image" />
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="detail-ingredient">
          <h2>Bahan</h2>
          <ul>
            <li>
              {{ recipe.bahan }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="detail-tutorial">
          <h2>Cara Memasak</h2>
          <ul>
            <li>
              {{ recipe.caramasak }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailResep",
  data() {
    return {
      recipe: this.$route.params.recipe,
    };
  },
  methods: {
    setRecipe(data) {
      this.recipe = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/recipes/user/" + this.$session.get("_id"))
      .then((res) => (this.setRecipe = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.container {
  margin-top: 1%;
}

.gambar-resep {
  width: 20%;
  height: 20%;
  display: block;
  margin-left: 26%;
}

.detail-ingredient {
  width: 100%;
  margin-top: 5%;
  font-family: "Courier New";
}

.detail-tutorial {
  width: 100%;
  margin-top: 5%;
  font-family: "Courier New";
}

h1.text {
  text-transform: uppercase;
}
</style>