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
        <el-menu-item v-for="link in links" :key="link.path" :index='link.path'>{{link.name}}</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { verifyPage } from '@/router'

export default {
  name: 'app-header',
  data () {
    return {
      links: []
    }
  },
  watch: {
    '$store.state.isLoggedIn': {
      immediate: true,
      handler () {
        this.links = this.$router.options.routes.filter(({ meta }) => meta.header && verifyPage(meta.viewableBy))
      }
    }
  }
}
</script>

<style lang='css' scoped>
  .long-col {
    width: unset !important;
  }
</style>
