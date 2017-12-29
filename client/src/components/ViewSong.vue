<template lang="html">
  <el-tabs>
    <el-tab-pane label="Song Metadata">
      <h3>{{song.title}} - {{song.album}}</h3>
      <h5>{{song.artist}}</h5>
      <img :src="song.albumImageUrl" :alt="song.album">
      <h6>{{song.genre}}</h6>
    </el-tab-pane>
    <el-tab-pane label="Video">
      <youtube
          player-width="100%"
          player-height="500px"
          :video-id="song.youtubeId"/>
    </el-tab-pane>
    <el-tab-pane label="Lyrics">
      <p v-if="song.lyrics" v-html="song.lyrics.replace(/\n/g, '<br>')"/>
    </el-tab-pane>
    <el-tab-pane label="Tabs">
      <pre>{{song.tabs}}</pre>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import SongsServices from '@/services/SongsServices'
  import VueYouTubeEmbed from 'vue-youtube-embed'

  export default {
    components: {
      VueYouTubeEmbed
    },
    data () {
      return {
        song: {}
      }
    },
    mounted () {
      SongsServices.get(this.$store.state.route.params.id)
        .then(res => {
          this.song = res.data
        })
        .catch(console.error)
    }
  }
</script>

<style lang="css" scoped>
  img {
    max-width: 50%;
  }
</style>
