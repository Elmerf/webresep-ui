<template>
  <form style="text-align: left">
    <div class="mb-3">
      <label for="username" class="form-label">Username</label>
      <input
        type="text"
        class="form-control"
        id="username"
        aria-describedby="emailHelp"
        v-model="username"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email</label>
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
        data-bs-toggle="modal"
        data-bs-target="#modalSetting"
        v-on:click="updateUser"
      >
        Update Data
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "FormDataDiri",
  props: ["username", "email"],
  methods: {
    updateUser() {
      if (this.$session.exists()) {
        axios
          .put(`http://localhost:3000/user/${this.$session.get("_id")}`, {
            email: this.email,
            username: this.username,
          })
          .then((res) => {
            alert(res.data.messages);
          })
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>
