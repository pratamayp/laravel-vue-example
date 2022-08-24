<template>
  <div>
    <h1 class="text-center">Ini adalah Login</h1>
    <div class="containter mt-2">
      <div class="card col-8 p-4 offset-2 rounded">
        <form @submit.prevent="postLogin">
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email" v-model="email">
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Password</label>
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password"
              v-model="password">
          </div>
          <button class="btn btn-primary" type="submit">LOGIN</button>
          <router-link class="ml-4" to="/">Kembali</router-link>
        </form>
      </div>
      <div v-if="show">
        <div>Email : {{ email }}</div>
        <div>Password : {{ password }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: null,
      password: null,
      show: false
    }
  },
  methods: {
    postLogin() {
      this.show = true;
    }
  },
}
</script>