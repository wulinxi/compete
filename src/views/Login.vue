<template>
  <div class="login-container">
    <el-form>
      <el-form-item label="用户名" prop="username" >
        <el-input placeholder="请输入用户名" v-model="input.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="input.password" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button> `     `
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
     login() {
        //请求数据
      // this.$axios.post("http://...../api/user/login",{name:this.username,password:this.password}).then(res=>{
      //   console.log(res,data)
      // if (res.data.username === this.input.username && res.data.password === this.input.password) {
      // });
      
        if (  this.input.username=== "admin" && this.input.password === "123456") {
        this.$router.push("/home");
        console.log("Login SUCCESSS");
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto;
}
</style>