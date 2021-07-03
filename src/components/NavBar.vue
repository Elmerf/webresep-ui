<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <buttons></buttons>
    <modal-login></modal-login>
    <modal-setting></modal-setting>
  </nav>
</template>

<script>
import axios from "axios";
import ModalLogin from "./navigation-bar/ModalLogin.vue";
import ModalSetting from "./navigation-bar/ModalSetting.vue";
import Buttons from "./navigation-bar/Buttons.vue";

export default {
  name: "NavBar",
  components: {
    Buttons,
    ModalLogin,
    ModalSetting,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Login() {
      axios
        .get("http://localhost:3000/user", {
          params: {
            email: this.email,
            password: this.password,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.$session.start();
            this.$session.set("user", this.email);
            this.$session.set("password", this.password);
            this.$router.replace("/dashboard");
          }
        })
        .catch((err) => alert(err.response.data.message));
    },
    logout() {
      this.$session.destroy();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
nav {
  width: 100%;
  background-image: linear-gradient(to right, #fbac19, #f47620);

  .container-fluid {
    margin: 0 10%;
  }

  .navbar-brand {
    font-family: "Pattaya", sans-serif;
    font-size: 2em;
  }
}

.btn {
  margin: 5px;
}
</style>
