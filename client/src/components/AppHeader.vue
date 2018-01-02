<template lang='html'>
  <el-row style='border-bottom: solid 1px #e6e6e6;'>
    <el-col style='min-width: 120px;' :span='2'>
      <router-link to='/'>
        <el-button type='text' style='height: 60px;'>
        <h2 style='margin: auto;'>Tab Tracker</h2>
        </el-button>
      </router-link>
    </el-col>
    <el-col class='long-col' style='float: right;' :span='22'>
      <el-menu style='border-bottom: none;' :default-active='$route.path' mode='horizontal' router>
        <!-- class='menu hidden-sm-only' -->
        <el-menu-item v-show='!isLoggedIn' index='/login'>Login</el-menu-item>
        <el-menu-item v-show='!isLoggedIn' index='/register'>Register</el-menu-item>
        <el-menu-item v-show='isLoggedIn' index='/songs'>Songs</el-menu-item>
        <el-menu-item v-show='isLoggedIn' index='/bookmarks'>Bookmarks</el-menu-item>
        <el-menu-item v-show='isLoggedIn' index='/' @click='logout'>Logout</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-header',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  },
  computed: mapState([
    'isLoggedIn'
  ])
}
</script>

<style lang='css' scoped>
  .long-col {
    width: unset !important;
  }
</style>
