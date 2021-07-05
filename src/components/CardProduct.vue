<template>
  <div class="container">
    <ul class="cards">
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/gule.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">GULAI</h2>
            <p class="card_text">
              Gulai memiliki rasa yang khas, kunci sajiannya terletak pada
              olahan bumbu rempah yang kuat dan santan
            </p>
            <button class="btn card_btn" href="../components/DetailResep.vue">
              Lihat Resep
            </button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/soto.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">SOTO LAMONGAN</h2>
            <p class="card_text">
              Soto Lamongan adalah soto ayam dengan ciri khas kuah kuning dengan
              campuran koya dari krupuk udang dan bawang putih
            </p>
            <router-link to="/resep"
              ><button class="btn card_btn">Lihat Resep</button></router-link
            >
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/sate.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">SATE</h2>
            <p class="card_text">
              Sate Ayam merupakan campuran bumbu kacang dan kecap yang di balur
              pada daging ayam, yang akan dibakar
            </p>
            <button class="btn card_btn">Lihat Resep</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/miaceh.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">MIE ACEH</h2>
            <p class="card_text">
              Mie Aceh, hidangan tradisional khas Serambi Mekah yang terkenal
              dengan rasa pedas, segar dan lezat ternyata mudah untuk dibuat
            </p>
            <button class="btn card_btn">Lihat Resep</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/rendang.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">RENDANG</h2>
            <p class="card_text">
              Rendang menjadi olahan daging sapi yang cocok dinikmati bersama
              keluarga, mudah dibuat dan bahan-bahan yang gampang didapat
            </p>
            <button class="btn card_btn">Lihat Resep</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/satelilit.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">SATE LILIT AYAM BALI</h2>
            <p class="card_text">
              Kuliner yang dicari saat berwisata ke Bali, banyak keistimewaan
              yang membedakan dengan sate lainnya lohh..
            </p>
            <button class="btn card_btn">Lihat Resep</button>
          </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div ><img class="card_image" src="../assets/rawon.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">RAWON</h2>
          <p class="card_text">Rawon adalah masakan Indonesia berupa sup daging berkuah hitam dengan campuran bumbu khas yang menggunakan kluwek</p>
          <button class="btn card_btn">Lihat Resep</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div ><img class="card_image" src="../assets/sopbuntut.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">SOP BUNTUT</h2>
          <p class="card_text">Sop buntut merupakan makanan yang terdiri dari buntut atau ekor sapi sebagai bagian utamanya</p>
          <button class="btn card_btn">Lihat Resep</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div><img class="card_image" src="../assets/gadogado.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">GADO-GADO</h2>
          <p class="card_text">Gado-gado, Makanan khas Jawa yang dicampur dengan bumbu kacang tanah. Biasanya disebut salad versi Indonesia. </p>
          <button class="btn card_btn">Lihat Resep</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div ><img class="card_image" src="../assets/perkedel.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">PERKEDEL</h2>
          <p class="card_text"> Perkedel adalah makanan yang terbuat dari kentang yang digoreng atau direbus sebelum dilumatkan</p>
          <button class="btn card_btn">Lihat Resep</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div ><img class="card_image" src="../assets/bakmijawa.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">BAKMI JAWA</h2>
          <p class="card_text">Bakmi jawa atau mie jawa dengan rasa gurih yang kuat dengan pelengkap acar timun dan kerupuk</p>
          <button class="btn card_btn">Lihat Resep</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div><img class="card_image" src="../assets/opor.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">OPOR AYAM</h2>
          <p class="card_text">Opor ayam merupakan masakan sejenis kari ayam yang sangat dikenal di Indonesia berkuah pekat dan berwarna kuning </p>
          <button class="btn card_btn">Lihat Resep</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/nasikrawu.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">NASI KRAWU GRESIK</h2>
            <p class="card_text">
              Olahan Khas Kota Gresik ini begitu nikmat, Daging suwir
              dengan daun pisang menambah rasa kangen akan cita rasanya
            </p>
            <button class="btn card_btn">Lihat Resep</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/nasiboran.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">NASI BORAN LAMONGAN</h2>
            <p class="card_text">
              Olahan khas Kota Lamongan ini susah banget ditemuin
              di kota lain, namun dengan resep ini, kalian bisa menikmati masakan nikmat ini
            </p>
            <button class="btn card_btn">Lihat Resep</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div><img class="card_image" src="../assets/gudeg.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">GUDEG JOGJA</h2>
            <p class="card_text">
              Rasa kangen kota Jogja bisa kamu tebus dengan menikmati gudeg dengan resep mudah dan gampang loo...
            </p>
            <button class="btn card_btn">Lihat Resep</button>
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

.card_btn {
  background: #000000;
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
