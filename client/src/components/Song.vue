<template lang="html">
  <router-link tag="div" class="song" :to="`/songs/${song.id}`">
    <aside class="album-art">
      <img :src="song.albumImageUrl" :alt="song.album">
    </aside>
    <div class="song-info">
      <div class="song-title">{{song.title}}</div>
      <div class="song-album">{{song.album}}</div>
      <div class="song-artist">{{song.artist}}</div>
      <div class="song-genre">{{song.genre}}</div>
    </div>
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
    cursor: pointer;
  }

  .album-art {
    float: left;
    width: 200px;
    display: table-cell;
    vertical-align: middle;
  }

  .song-info {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: calc(100% - 200px);
    justify-content: center;
  }

  .song:hover {
    background-color: #EEE;
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
    font-size: 12px;
  }

  img {
    max-width: 100%;
  }
</style>
