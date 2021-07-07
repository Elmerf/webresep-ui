<template>
  <div class="add-resep">
    <NavBar />
    <div class="container">
      <div class="row mt-3">
        <div class="col">
          <ol class="breadcrumb" style="--bs-breadcrumb-divider: '>'">
            <li class="breadcrumb-item">
              <router-link to="/dashboard" class="text-dark"
                >Kembali</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Tambah Resep
            </li>
          </ol>
        </div>
      </div>

      <!--form tambahresep-->
      <div class="form">
        <div class="row mt-3"></div>
        <form @submit="AddResep">
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label"
              >Nama Resep</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="namaResep"
                v-model="namaresep"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label"
              >Deskripsi</label
            >
            <div class="col-sm-10">
              <textarea
                class="form-control"
                aria-label="With textarea"
                v-model="deskripsi"
              ></textarea>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label"
              >Bahan</label
            >
            <div class="col-sm-10">
              <textarea
                class="form-control"
                aria-label="With textarea"
                v-model="bahan"
              ></textarea>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label"
              >Cara Memasak</label
            >
            <div class="col-sm-10">
              <textarea
                class="form-control"
                aria-label="With textarea"
                v-model="caramasak"
              ></textarea>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label"
              >Gambar Resep</label
            >
            <div class="col-sm-10">
              <input type="file" class="form-control" id="inputGroupFile02" />
            </div>
          </div>
          <button type="submit" class="btn btn-warning">Tambah Resep</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
//import axios from 'axios';

export default {
  name: "AddResep",
  components: {
    NavBar,
  },
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      namaresep: "",
      deskripsi: "",
      bahan: "",
      caramasak: "",
      image: "",
    };
  },
  methods: {
    AddResep(){
      //tidak tau
      //axios
      //.post("http://localhost:3000/user", {
        //  username: this.username,
        //  email: this.email,
        //  password: this.password,
        //})
    },
    logout() {
      this.$session.destroy();
      this.$router.push("/");
    },
  }
};
</script>

<style>
.breadcrumb-item.active {
  font-weight: bold;
  color: black;
}
.form {
  text-align: left;
}
</style>