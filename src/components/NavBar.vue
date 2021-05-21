<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Let's Cook!</a>
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
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Kategori
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Menu Utama</a></li>
              <li><a class="dropdown-item" href="#">Cemilan</a></li>
              <li><a class="dropdown-item" href="#">Dessert</a></li>
            </ul>
          </li> -->
          <button type="button" class="btn btn-warning">Daftar</button>
          <button type="button" class="btn btn-outline-dark">Login</button>
        </ul>
      </div>
    </div>
  </nav>
</template>

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
