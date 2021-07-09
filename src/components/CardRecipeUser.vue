<template>
  <div class="card">
    <div><img class="card_image" :src="recipe.image" /></div>
    <div class="card_content">
      <h2 class="card_title">{{ recipe.namaresep }}</h2>
      <p class="card_text">
        {{ recipe.deskripsi }}
      </p>
      <router-link :to="{ name: 'Resep', params: { recipe } }">
        <button class="btn card_btn" href="../components/DetailResep.vue">
          Lihat Resep
        </button>
      </router-link>
      <router-link :to="{ name: 'EditResep', params: { recipe } }">
        <button class="btn btn-warning">Edit Resep</button></router-link
      >
      <button class="btn btn-danger" v-on:click="DeleteResep">
        Delete Resep
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CardRecipeUser",
  props: ["recipe"],
  methods: {
    DeleteResep() {
      axios
        .delete(`http://localhost:3000/recipe/${this.recipe._id}`)
        .then((res) => {
          alert(res.data.message);
          location.reload();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
/* Font */
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,700");

/* Design */
*,
*::before,
*::after {
  box-sizing: border-box;
}
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

.card {
  background-color: #ffffff;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: #ffffff;
}

.card_title {
  color: #000000;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.card_text {
  color: #000000;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}

.card_image {
  max-height: 12rem;
  max-width: auto;
  vertical-align: middle;
}
.card_btn {
  background: #ffffff;
  padding: 0.8rem;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: bold;
  width: 70%;
  display: flex;
  cursor: pointer;
}

.btn:hover {
  background-color: #70983f;
}
</style>
