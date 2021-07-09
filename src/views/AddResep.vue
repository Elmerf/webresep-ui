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
                placeholder="Pisahkan dengan Enter"
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
                placeholder="Pisahkan dengan Enter"
                v-model="caramasak"
              ></textarea>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label"
              >Gambar Resep</label
            >
            <div class="col-sm-10">
              <input
                type="file"
                accept="image/*"
                class="form-control"
                id="inputGroupFile02"
                v-on:change="onFileChange"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-success">Tambah Resep</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

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
    AddResep(e) {
      e.preventDefault();
      const form = new FormData();
      form.append("namaresep", this.namaresep);
      form.append("deskripsi", this.deskripsi);
      form.append("bahan", JSON.stringify(this.bahan.split("\n")));
      form.append("caramasak", JSON.stringify(this.caramasak.split("\n")));
      form.append("image", this.image.split(",")[1]);
      form.append("iduser", this.$session.get("_id"));
      axios({
        method: "POST",
        url: "http://localhost:3000/recipe",
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          alert(res.data.message);
          this.$router.push("/dashboard");
        })
        .catch((err) => console.log(err));
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      let vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
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