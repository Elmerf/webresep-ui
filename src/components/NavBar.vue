<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nyok Masak</a>
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
          <router-link to='/daftar'><button type="button" class="btn btn-warning navbar-login">Daftar</button></router-link>
          <router-link to='/login'><button type="button" class="btn btn-outline-dark navbar-login">Login</button></router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>


<style lang="scss">
nav {
  width: 100%;
  background-image: linear-gradient(to right, #fbac19, #f47620);

  .container-fluid {
    margin: 0 6%;
  }

  .navbar-brand {
    font-family: "Pattaya", sans-serif;
    font-size: 2em;
  }

  .navbar-login {
    font-family: "Helvetica", sans-serif;
    font-size: 1.2em;
  }
}

.btn {
  margin: 5px;
}
</style>
