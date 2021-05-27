<template>
  <div class="home">    
    <NavBar/>
    <Banner/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Banner,
  },
};
</script>
