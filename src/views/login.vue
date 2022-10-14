<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col md:flex-row gap-16 p-3">
      <img
        src="../assets/login.png"
        alt=""
        class="transform hover:scale-105" />
      <div class="flex items-center justify-center">
        <Login @on-submit="handleSubmit">
          <UserName name="username" />
          <Password name="password" />
          <div class="mb-2">
            <Checkbox v-model="autoLogin" size="large">自动登录</Checkbox>
            <a class="float-right">忘记密码</a>
          </div>
          <Submit />
        </Login>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data: function () {
    return {
      autoLogin: true,
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit: function (valid, { username, password }) {
      // console.log('this.$store', this.$store.state.user)
      if (valid) {
        // 去store中验证用户，如正确跳转index，不正确返回错误提示
        this.$store
          .dispatch('GetUser', {
            username,
            password
          })
          .then((res) => {
            console.log('res111111', res)
            if (res.state === 'success') {
              this.$router.push('/index')
            }
          })
        // this.$Modal.info({
        //   title: '输入的内容如下：',
        //   content: 'username: ' + username + ' | password: ' + password
        // })
      }
    }
  }
}
</script>
<style>
/* .demo-login {
  width: 400px;
} */
/* .demo-auto-login {
  margin-bottom: 24px;
  text-align: left;
} */
/* .demo-auto-login a {
  float: right;
} */
</style>
