<template>
  <div class="contain">
    <NavBar />
    <br />
    <div class="row">
      <div class="col-md-6">
        <img
          src="https://thumbs.dreamstime.com/b/forgot-password-computer-concept-unhappy-man-near-account-login-flat-vector-male-character-design-landing-page-web-poster-184010038.jpg"
          width="100%"
          height="460px"
        />
        <h1>Create an Account</h1>
      </div>
      <div class="col-md-5">
        <form @submit="registerUser">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="username"
              required
              placeholder="Username"
              v-model="username"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              required
              v-model="email"
              placeholder="Email Address"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              required
              v-model="password"
              placeholder="Password"
            />
            <div
              v-if="password.length > 1 && password.length < 6"
              class="text-danger"
            >
              Password should be greater than 6
            </div>
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="reenterPassword"
              required
              v-model="reenterPassword"
              placeholder="Reenter Password"
            />
            <div v-if="password != reenterPassword" class="text-danger">
              Password dont match
            </div>
          </div>
          <button type="submit" class="btn btn-warning">Daftar</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  nama: "Daftar",
  components: {
    NavBar,
  },
  //ini hanya nyoba :v
  data() {
    return {
      username: "",
      email: "",
      password: "",
      reenterPassword: "",
    };
  },
  methods: {
    registerUser(e) {
      e.preventDefault();
      axios
        .post("http://localhost:3000/user", {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          if (res.status == 200) {
            this.$session.start();
            this.$router.replace("/dashboard");
          }
        })
        .catch((error) => alert(error.response.data.message));
    },
  },
};
</script>

<style>
.contain {
  height: 100%;
}
.row {
  height: 100%;
  height: 480p;
}
</style>
