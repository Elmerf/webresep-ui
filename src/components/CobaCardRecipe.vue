<template>
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div><img class="card_image" :src=" 'assets/'+ recipe.image" /></div>
        <div class="card_content">
          <h2 class="card_title">{{ recipe.namaresep }}</h2>
          <p class="card_text">
            {{ recipe.deskripsi }}
          </p>
          <button class="btn card_btn" href="../components/DetailResep.vue">
            Lihat Resep
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CobaCardRecipe",
  props: ["recipe"],
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
  text-transform: capitalize;
  margin: 0px;
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
</style>