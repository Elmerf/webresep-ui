<template>
  <div id="contain">
    <NavBar />
    <br />
    <div class="row">
      <div class="col-md-6">
        <img
          src="https://thumbs.dreamstime.com/b/forgot-password-computer-concept-unhappy-man-near-account-login-flat-vector-male-character-design-landing-page-web-poster-184010038.jpg"
          class="image"
        />
        <h1>Creat an Account</h1>
      </div>
      <div class="col-md-5">
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="username"
              required
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              placeholder="Email Address"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              required
              placeholder="Password"
            />
            <div
              v-if="password.lenght > 1 && password.lenght < 6"
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
              placeholder="Reenter Password"
            />
            <div v-if="password != reenterPassword" class="text-danger">
              Password dont match
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
      <div class="col-md-3"></div>
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
            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
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
                <label for="recipient-name" class="col-form-label"
                  >Recipient:</label
                >
                <input type="text" class="form-control" id="recipient-name" />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label"
                  >Message:</label
                >
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
            <router-link to="/dashboard">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Login
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  nama: "Daftar",
  components: {
    NavBar,
  },
  //ini hanya nyoba :v
  data() {
    return {
      password: "password",
      reenterPassword: "password",
    };
  },
};
</script>

<style scoped>
.image {
  width: 600px;
}

#contain {
  height: 100%;
}
</style>