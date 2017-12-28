<template lang="html">
  <el-row style="border-bottom: solid 1px #e6e6e6;">
    <el-col style="min-width: 120px;" :span="2"><h3>Tab Tracker</h3></el-col>
    <el-col class="long-col" style="float: right;" :span="22">
      <el-menu style="border-bottom: none;" :default-active="$route.path" mode="horizontal" router>
        <!-- class="menu hidden-sm-only" -->
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/login">Login</el-menu-item>
        <el-menu-item index="/register">Register</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'app-header'
  // data(){
  //   return {
  //     links: [
  //       {
  //         title: 'Home',
  //         path: '/'
  //       },
  //       {
  //         title: 'Login',
  //         path: '/login'
  //       },
  //       {
  //         title: 'Register'
  //         path: '/register'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style lang="css">
  .long-col {
    width: unset !important;
  }
</style>
