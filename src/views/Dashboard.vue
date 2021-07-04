<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="colom">
        <div class="input-group input-group-lg">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Cari Resep Kesukaanmu Disini"
            aria-label="Cari"
            aria-describedby="basic-addon1"
            @keyup="search"
          />
        </div>
      </div>
    </div>
    <CardProduct />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import CardProduct from "@/components/CardProduct";

export default {
  name: "Dashboard",
  components: {
    NavBar,
    CardProduct,
  },
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push("/");
    },
  },
};
</script>

<style>
.colom {
  margin-top: 2%;
}
</style>