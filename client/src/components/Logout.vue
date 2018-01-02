<template>
</template>

<script>
export default {
  name: 'logout',
  mounted () {
    this.$store.dispatch('setToken', null)
    this.$store.dispatch('setUser', null)
    this.$router.push('/songs')
  }
}
</script>

<style scoped>

</style>
