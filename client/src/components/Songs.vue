<template lang="html">
  <el-container>
    <el-header style="text-align: right;">
      <!-- <h2 style="display: inline;">Songs</h2> -->
      <router-link to="/songs/create">
        <el-button icon="el-icon-plus"/>
      </router-link>
    </el-header>
    <el-main>
      <song v-for="song in songs" :song="song" :key="song.id"/>
    </el-main>
  </el-container>
</template>

<script>
import SongsServices from '@/services/SongsServices'
import Song from './Song'

export default {
  components: {
    Song
  },
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    this.songs = (await SongsServices.index()).data
  }
}
</script>

<style lang="css" scoped>
  .el-header {
    line-height: 60px;
  }
</style>
