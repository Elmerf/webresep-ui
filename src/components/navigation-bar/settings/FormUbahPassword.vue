<template>
  <form style="text-align: left">
    <div class="mb-3">
      <label for="current-password" class="form-label">Current Password</label>
      <input
        type="password"
        class="form-control"
        id="current-password"
        v-model="currentPassword"
        required
      />
      <div v-if="!isSamePassword" class="text-danger">
        Doesn't match with current password
      </div>
    </div>
    <div class="mb-3">
      <label for="change-password" class="form-label">New Password</label>
      <input
        type="password"
        class="form-control"
        id="change-password"
        v-model="newPassword"
        required
      />
      <div
        v-if="newPassword.length > 1 && newPassword.length < 6"
        class="text-danger"
      >
        Password should be greater than 6
      </div>
    </div>
    <div class="mb-3">
      <label for="current-password" class="form-label"
        >Re-enter New Password</label
      >
      <input
        type="password"
        class="form-control"
        id="current-password"
        v-model="reNewPassword"
        required
      />
      <div
        v-if="newPassword !== reNewPassword && reNewPassword.length > 1"
        class="text-danger"
      >
        Password doesn't match
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-warning" v-on:click="updatePassword">
        Update Password
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "FormUbahPassword",
  props: ["password"],
  data() {
    return {
      isNewPasswordSame: false,
      isSamePassword: true,
      readyToSend: false,
      currentPassword: "",
      newPassword: "",
      reNewPassword: "",
    };
  },
  methods: {
    updatePassword() {
      this.password === this.currentPassword
        ? (this.isSamePassword = true)
        : (this.isSamePassword = false);

      this.newPassword === this.reNewPassword
        ? (this.isNewPasswordSame = true)
        : (this.isNewPasswordSame = false);

      this.isNewPasswordSame && this.isSamePassword
        ? (this.readyToSend = true)
        : (this.readyToSend = false);

      if (this.readyToSend) {
        axios
          .put(`http://localhost:3000/user/${this.$session.get("_id")}`, {
            password: this.newPassword,
          })
          .then((res) => {
            alert(res.data.messages);
          })
          .catch((error) => console.log(error));
        this.currentPassword = "";
        this.newPassword = "";
        this.reNewPassword = "";
      }
    },
  },
};
</script>
