<template>
  <div>
    <NavBar />
    <DashboardRecipe />
    <!-- <div class="container">
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
    <CardProduct /> -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import DashboardRecipe from "@/components/DashboardRecipe";

// import CardProduct from "@/components/CardProduct";

export default {
  name: "Dashboard",
  components: {
    NavBar,
    DashboardRecipe,
    // CardProduct,
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
