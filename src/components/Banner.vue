<template>
  <div class="gambar">
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="6000">
          <img src="../assets/banner.jpg" width="100%" height="15%" />
        </div>
        <div class="carousel-item" data-bs-interval="6000">
          <img src="../assets/banner2.jpg" width="100%" height="15%" />
        </div>
        <div class="carousel-item">
          <img src="../assets/banner3.jpg" width="100%" height="15%" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style>
.gambar {
  width: 100%;
  height: 480p;
}
</style>
