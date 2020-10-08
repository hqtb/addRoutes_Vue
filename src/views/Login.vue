<template>
  <div class="logo">
    <el-input v-model="username" placeholder="用户名"></el-input>
    <el-input v-model="password" placeholder="密码"></el-input>
    <el-button type="primary" @click="tosend">登陆</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    tosend() {
      localStorage.setItem('islogin', 1)
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style scoped>
</style>