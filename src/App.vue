<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import {mapState} from 'vuex'

export default {
  data() {
    return {
      routes: []
    }
  },
  computed: {
    routess() {
      return this.$store.state.getRouterTree
    }
  },
  watch: {
    routess: {
      deep: true,
      handler: function(newVal, oldVal) {
        console.log('---')
        this.getSession()
      }
    }
  },
  methods: {
    getSession(value) {
      this.routes = [
        ...this.$store.state.getRouterTree,
        {
          path: '*',
          name: 'NotFund',
          component: () => import('@/views/NotFund.vue')
        }
      ]
      if (this.$router.options.routes.length <= 2) {
        // this.$router.options.routes.push(this.routes)
        this.$router.addRoutes(this.routes)
      }
    }
  },
  mounted() {
    console.log(this.$store.state)
    let token = localStorage.getItem('token')
    if (token) {
      this.getSession()
    }
  }
}
</script>
<style lang="scss">
</style>
