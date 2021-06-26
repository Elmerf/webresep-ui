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
      <div
        v-if="!this.$session.exists()"
        class="collapse navbar-collapse"
        id="navbarTogglerDemo01"
      >
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
      <div v-else class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto mb-1 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ this.$session.get("user") }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <button type="button" class="dropdown-item" v-on:click="logout">
                Logout
              </button>
              <button
                type="button"
                class="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#setting"
              >
                Setting Akun
              </button>
            </ul>
          </li>
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
                <div
                  v-if="password.length > 1 && password.length < 6"
                  class="text-danger"
                >
                  Password should be greater than 6
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-warning"
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
    <!-- Modal setting -->
    <div
      class="modal fade"
      id="setting"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Setting Akun</h5>
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
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="email"
                  value="email"
                />
                {{ this.$session.get("user") }}
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="password"
                />
                {{ this.$session.get("password") }}
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              v-on:click="Login"
            >
              Update
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
