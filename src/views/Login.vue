<template>
  <div class="login-container">
    <el-form>
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" v-model="input.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="input.password" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/api/user";

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
      login(this.input).then(res => {
        const data = res.data;
        console.log(data);
      });
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