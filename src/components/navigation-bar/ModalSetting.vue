<template>
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
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Data Diri
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Ubah Password
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Username</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    v-model="username"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                    v-model="email"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-warning"
                    v-on:click="updateUser"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ModalSetting",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      user: {},
    };
  },
  methods: {
    updateUser() {},
  },
  beforeCreate() {
    if (this.$session.exists()) {
      axios
        .get(`http://localhost:3000/user/${this.$session.get("_id")}`)
        .then((res) => {
          this.user = res.data.data;
          this.email = this.user.email;
          this.username = this.user.username;
        })
        .catch((error) => console.log(error));
    }
  },
};
</script>
