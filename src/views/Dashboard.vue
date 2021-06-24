<template>
  <div><NavBar /> <CardProduct /></div>
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
  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
