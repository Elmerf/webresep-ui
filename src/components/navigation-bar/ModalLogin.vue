<template>
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
          <h5 class="modal-title" id="exampleModalLabel">Login to continue</h5>
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
</template>

<script>
import axios from "axios";

export default {
  name: "ModalLogin",
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
            this.$session.set("_id", res.data._id);
            this.$session.set("user", this.email);
            this.$router.replace("/dashboard");
          }
        })
        .catch((err) => alert(err.response.data.message));
    },
  },
};
</script>
