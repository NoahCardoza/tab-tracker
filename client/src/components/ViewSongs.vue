<template lang="html">
  <el-container>
    <el-header style="text-align: right;">
      <!-- <h2 style="display: inline;">Songs</h2> -->
      <router-link v-if="isLoggedIn" to="/songs/create">
        <el-button icon="el-icon-plus"/>
      </router-link>
    </el-header>
    <el-main>
      <el-input v-model="search" placeholder=":Search" value/>
      <br><br>
      <song v-for="song in this.$store.state.songs" :song="song" :key="song.id"/>
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
import { debounce } from 'lodash'
import SongsServices from '@/services/SongsServices'
import Song from './Song'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (val) {
      const route = {
        path: '/songs'
      }
      if (val) {
        route.query = {search: val}
      }
      this.$router.push(route)
    },
    '$route.query.search': {
      immediate: true,
      handler: debounce(function (val) {
        this.search = val
        SongsServices.index(val)
          .then(res => {
            this.$store.dispatch('setSongs', res.data)
          })
      }, 500)
    }
  },
  components: {
    Song
  },
  computed: mapState([
    'isLoggedIn'
  ])
  // asyncData: {
  //   songs () {
  //     return SongsServices.index()
  //       .then(res => res.data)
  //   }
  // }
}
</script>

<style lang="css" scoped>
  .el-header {
    line-height: 60px;
  }
</style>
