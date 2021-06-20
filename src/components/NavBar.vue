<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Yok Masak!!!!!</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <router-link to="/daftar"
            ><button type="button" class="btn btn-warning navbar-login">
              Daftar
            </button></router-link
          ><button
            type="button"
            class="btn btn-outline-dark navbar-login"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            to="/login"
          >
            Login
          </button>
        </ul>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Login to continue
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  placeholder="Email Address"
                  v-model="email"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                  placeholder="Password"
                  v-model="password"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              v-on:click="Login"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "NavBar",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Login() {
      axios
        .post("http://localhost:3000/user", {
          email: this.email,
          password: this.password,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally(() => {
          this.$router.replace("/dashboard");
        });
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
