<template>
  <div>
    Dashboard <br>
    <a href="#" @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem("token")
    }
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({name: "login-page"})
    }
  },
  mounted() {
    if (!this.token) {
      this.$router.push({name: "login-page"})
    }
  },
}
</script>