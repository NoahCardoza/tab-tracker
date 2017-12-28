<template>
  <div class="register">
    <h1>Register</h1>
    <form validate @submit.prevent="register">
      <input
        autocomplete="email"
        name="email"
        type="email"
        placeholder=":Email"
        v-model="email">
      <br>
      <input
        autocomplete="password"
        name="password"
        type="password"
        required
        title="You need at least 8 characters with one number and one capital"
        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
        placeholder=":Password" v-model="password">
      <br>
      <button type="submit" name="button">Register</button>
    </form>
  </div>
</template>

<script>
import Auth from '@/services/Authentication.js'
const { register } = Auth

export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      register({
        email: this.email,
        password: this.password
      })
      .then(res => res.data)
      .then(console.log)
    }
  }
}
</script>

<style scoped>

</style>
