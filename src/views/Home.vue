<template>
  <div class="home">
    <Navbar/> <Banner/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,Banner,
  },
};
</script>
