<template>
  <div class="container">
    <h1>SOTO LAMONGAN</h1>
    <div class="gambar-resep">
      <img src="../assets/soto.jpg" />
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="detail-ingredient">
          <h2>Bahan</h2>
          <ul>
            <li v-for="ingredient in ingredients" :key="ingredient">
              {{ ingredient }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="detail-tutorial">
          <h2>Cara Memasak</h2>
          <ul>
            <li v-for="tutorial in tutorials" :key="tutorial">
              {{ tutorial }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailResep",
  data() {
    return {
      ingredients: [
        "6-8 siung bawang putih",
        "8 siung bawang merah",
        "6 buah kemiri",
        "1-2 buah kunyit bakar kupas",
        "Minyak goreng",
        "4 batang daun bawang",
        "4 batang serai",
        "10 lembar daun salam",
        "10 lembar daun jeruk",
        "1 sdm garam",
        "½ sdt merica",
        "½ sdt gula",
        "1 sdt penyedap",
        "1 sdt kaldu ayam",
        "Kol iris",
        "Telur rebus",
        "Soun, rendam air",
        "Seledri, iris",
        "4 pcs fillet paha ayam",
        "Jeruk nipis",
        "Cabai rawit, rebus",
        "Kecap manis",
        "Serbuk koya",
      ],
      tutorials: [
        "Blender bumbu halus dengan minyak, lalu tumis sampai minyak keluar",
        "Masukkan daun bawang, aduk rata",
        "Tambahkan air, rebus dengan api besar selama 30 menit-60 menit",
        "Tambahkan gula, garam, merica, kaldu ayam, dan penyedap",
        "Tambahkan air jika air kuah soto menyusut",
        "Masukkan paha ayam fillet ke dalam kuah, masak hingga 20 menit ",
        "Untuk sohun, bilas dengan air panas sampai empuk, lalu bilas kembali dengan air dingin",
        "Keluarkan paha ayam, goreng lalu suwir, sisihkan",
        "Sajikan kuah soto dengan kol, soun, irisan paha ayam, telur rebus, cabai rawit, seledri, jeruk nipis, serbuk koya, dan kecap manis sebagai pelengkap",
      ],
    };
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

.row{

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
</style>