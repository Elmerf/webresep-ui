<template>
  <div>
    <NavBar />
    <DetailResep />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import DetailResep from "@/components/DetailResep";

export default {
  name: "Resep",
  components: {
    NavBar,
    DetailResep,
  },
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
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
</style>