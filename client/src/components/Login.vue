<template>
  <div class="login">
    <h1>Login</h1>
    <h3 v-if="error" :style="{
        color: '#f04'
      }">
      {{error}}
    </h3>
    <el-form validate>
      <el-form-item label="Email">
        <el-input
          autoComplete="email"
          name="email"
          type="email"
          placeholder=":Email"
          v-model="email"/>
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          autoComplete="password"
          name="password"
          type="password"
          required
          title="You need at least 8 characters with one number and one capital"
          placeholder=":Password" v-model="password"/>
          <!-- pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Auth from '@/services/Authentication.js'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login () {
      Auth.login({
        email: this.email,
        password: this.password
      })
      .then(res => res.data)
      .then(console.log)
      .catch(({ response }) => {
        this.error = response.data.error
      }
    )
    }
  }
}
</script>

<style scoped>

</style>
