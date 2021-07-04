<template>
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
        >

        <button
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
            <button
              type="button"
              class="dropdown-item"
              v-on:click="$router.push('/dashboard').catch((err) => {})"
            >
              Dashboard
            </button>
            <button
              type="button"
              class="dropdown-item"
              data-bs-toggle="modal"
              data-bs-target="#modalSetting"
            >
              Setting Akun
            </button>
            <button type="button" class="dropdown-item" v-on:click="logout">
              Logout
            </button>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  methods: {
    logout() {
      this.$session.destroy();
      location.reload();
    },
  },
};
</script>
