<template>
  <!-- Modal setting -->
  <div
    class="modal fade"
    id="modalSetting"
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
              <form-data-diri
                :username="user.username"
                :email="user.email"
              ></form-data-diri>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <form-ubah-password
                :password="user.password"
              ></form-ubah-password>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FormDataDiri from "./settings/FormDataDiri.vue";
import FormUbahPassword from "./settings/FormUbahPassword.vue";

export default {
  name: "ModalSetting",
  components: {
    FormDataDiri,
    FormUbahPassword,
  },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    if (this.$session.exists()) {
      axios
        .get(`http://localhost:3000/user/${this.$session.get("_id")}`)
        .then((res) => {
          this.user = res.data.data;
        })
        .catch((error) => console.log(error));
    }
  },
};
</script>
