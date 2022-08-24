<template>
  <div>
    <h1>Ini adalah Landing Page</h1>
    <router-link class="btn btn-primary" to="/login">Login</router-link>
    <button class="btn btn-success" type="button" @click="fetchData">Jokes Bapack-Bapack</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null
    }
  },
  methods: {
    fetchData() {
      axios.get("https://candaan-api.vercel.app/api/text/random").then((res) => {
        // this.data = res.data.data;
        alert(res.data.data);
      }).catch((err) => {
        console.error(err)
      })
    }
  },
  mounted() {
    // this.fetchData();
  },
}
</script>