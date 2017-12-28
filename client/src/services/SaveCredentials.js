export default function (res) {
  return res
    .then(res => res.data)
    .then(({ token, user }) => {
      this.$store.dispatch('setToken', token)
      this.$store.dispatch('setUser', user)
      this.$router.push('/songs')
    }).catch(err => {
      this.error = err.response.data.error
    })
}
