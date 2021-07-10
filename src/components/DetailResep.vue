<template>
  <div>
    <div class="container">
      <h1 class="text mt-4">{{ recipe.namaresep }}</h1>
      <div class="row mt-4">
        <div class="col-md-6">
          <img :src="recipe.image" class="img" />
          <p class="mx-5">Created: {{ dateCreated }}</p>
          <p>{{ recipe.deskripsi }}</p>
        </div>
        <div class="col-md-6 text-start">
          <h2><strong> Bahan </strong></h2>
          <hr />
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="(bahan, index) in recipe.bahan"
              :key="index"
            >
              {{ bahan }}
            </li>
          </ul>
          <h2 class="mt-5"><strong> Cara Memasak </strong></h2>
          <hr />
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="(caramasak, index) in recipe.caramasak"
              :key="index"
            >
              {{ caramasak }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "DetailResep",
  components: {
    Footer,
  },
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
  beforeCreate() {
    axios
      .get("http://localhost:3000/recipes/user/" + this.$session.get("_id"))
      .then((res) => (this.setRecipe = res.data))
      .catch((err) => console.log(err));
  },
  computed: {
    dateCreated() {
      let date = new Date(this.recipe.createdAt);
      const localDateString = date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      return localDateString;
    },
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

img {
  border: 1px solid #d8d8d8;
  width: 80%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

p {
  text-align: justify;
}
</style>
