<template>
  <div class="container">
    <h1><br>Macam Resepnya Kakak</h1>
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div ><img class="card_image" src="../assets/gule.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">GULAI</h2>
          <p class="card_text">Gulai memiliki rasa yang khas, kunci sajiannya terletak pada olahan bumbu rempah yang kuat dan santan</p>
          <button class="btn card_btn" href="#">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div ><img class="card_image" src="../assets/soto.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">SOTO LAMONGAN</h2>
          <p class="card_text">Soto Lamongan adalah soto ayam dengan ciri khas kuah kuning dengan campuran koya dari krupuk udang dan bawang putih</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div ><img class="card_image" src="../assets/sate.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">SATE</h2>
          <p class="card_text">Sate Ayam merupakan campuran bumbu kacang dan kecap yang di balur pada daging ayam, yang akan dibakar </p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div ><img class="card_image" src="../assets/miaceh.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">MIE ACEH</h2>
          <p class="card_text">Mie Aceh, hidangan tradisional khas Serambi Mekah yang terkenal dengan rasa pedas, segar dan lezat ternyata mudah untuk dibuat</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div ><img class="card_image" src="../assets/rendang.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">RENDANG</h2>
          <p class="card_text">Rendang menjadi olahan daging sapi yang cocok dinikmati bersama keluarga, mudah dibuat dan bahan-bahan yang gampang didapat</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div><img class="card_image" src="../assets/satelilit.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">SATE LILIT AYAM BALI</h2>
          <p class="card_text">Kuliner yang dicari saat berwisata ke Bali, banyak keistimewaan yang membedakan dengan sate lainnya lohh..</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div ><img class="card_image" src="../assets/miaceh.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">MIE ACEH</h2>
          <p class="card_text">Mie Aceh, hidangan tradisional khas Serambi Mekah yang terkenal dengan rasa pedas, segar dan lezat ternyata mudah untuk dibuat</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div ><img class="card_image" src="../assets/rendang.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">RENDANG</h2>
          <p class="card_text">Rendang menjadi olahan daging sapi yang cocok dinikmati bersama keluarga, mudah dibuat dan bahan-bahan yang gampang didapat</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div><img class="card_image" src="../assets/satelilit.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">SATE LILIT AYAM BALI</h2>
          <p class="card_text">Kuliner yang dicari saat berwisata ke Bali, banyak keistimewaan yang membedakan dengan sate lainnya lohh..</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "CardProduct",
  methods: {
    resep() {
      this.$router.replace("/resep");
    },
  },
};
</script>

<style>
/* Font */
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

/* Design */
*,
*::before,
*::after {
  box-sizing: border-box;
}

h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}

.card_image{
  max-height: 12rem;
  max-width: auto;
  vertical-align: middle;
}


.btn {
  background: #000000;
  padding: 0.8rem;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: bold;
  width: 100%;
  display: flex;
  cursor: pointer;
}

.btn:hover {
  background-color: #70983f;
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
