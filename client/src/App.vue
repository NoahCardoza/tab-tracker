<template>
  <div id="app">
  <el-container>
    <el-header>
      <app-header/>
    </el-header>
    <el-main>
      <el-row>
        <el-col :offset="2" :span="20">
          <router-view/>
        </el-col>
    </el-row>
    </el-main>
  </el-container>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
