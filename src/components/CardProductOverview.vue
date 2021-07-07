<template>
  <div class="container">
    <ul class="cards">
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/gule.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">GULAI</h2>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/soto.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">SOTO LAMONGAN</h2>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/sate.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">SATE</h2>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/miaceh.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">MIE ACEH</h2>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/rendang.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">RENDANG</h2>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/satelilit.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">SATE LILIT AYAM BALI</h2>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CardProductOverview",
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

.card_image {
  max-height: 12rem;
  max-width: auto;
  vertical-align: middle;
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
</style>
