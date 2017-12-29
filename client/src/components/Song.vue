<template lang="html">
  <!-- <router-link :to="{ name: '', params: {} }"></router-link> -->
  <router-link :to="{ name: 'Song', params: {id: song.id} }">
    <el-row class="song">
      <el-col :span="6">
        <img :src="song.albumImageUrl" :alt="song.album">
      </el-col>
      <el-col :span="18">
        <div class="song-title">{{song.title}}</div>
        <div class="song-album">{{song.album}}</div>
        <div class="song-artist">{{song.artist}}</div>
        <div class="song-genre">{{song.genre}}</div>
      </el-col>
    </el-row>
  </router-link>
</template>

<script>
export default {
  name: 'song',
  props: ['song']
}
</script>

<style lang="css" scoped>
  .song {
    padding: 10px;
    overflow: hidden;
    height: 200px;
  }

  .song-title {
    font-size: 30px;
  }

  .song-album {
    font-size: 24px;
  }

  .song-artist {
    font-size: 18px;
  }

  .song-genre {

  }

  img {
    max-width: 100%;
    margin: 0 auto;
  }

  h3, h4, h5 {
    margin: 4px;
  }
</style>
