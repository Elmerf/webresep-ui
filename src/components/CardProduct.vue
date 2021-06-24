<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card shadow" style="width: 20rem">
          <div class="inner">
            <img src="../assets/banner.jpg" class="card-img-top" alt="..." />
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">Gule</h5>
            <p class="card-text">Lezat ya bun, jadi laper.</p>
            <a href="#" class="btn btn-success">Lihat Resep</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow" style="width: 20rem">
          <div class="inner">
            <img src="../assets/banner2.jpg" class="card-img-top" alt="..." />
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">Soto Lamongan</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-success">Lihat Resep</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow" style="width: 20rem">
          <div class="inner">
            <img src="../assets/banner3.jpg" class="card-img-top" alt="..." />
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">Sate</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-success">Lihat Resep</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
};
</script>

<style>
.container {
  margin-top: 8%;
}

.inner {
  overflow: hidden;
}

.inner img {
  transition: all 1.5s ease;
}

.inner:hover img {
  transform: scale(1.5);
}
</style>
