<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong> Makanan Lengkapnya </strong> Bun</h2>
        </div>
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Cari Resep Disini"
          aria-label="Cari"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <strong>CARI</strong>
        </button>
      </div>

      <CardProduct />

      <div class="row mt-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
                >Previous</a
              >
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
    name: "Masakan",
    components: {
        NavBar,
        CardProduct,
    }
}
</script>

<style>
</style>