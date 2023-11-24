<template>
  <el-menu :default-openeds="['1', '3']">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>

      <el-menu-item>
        <router-link to="/">Home</router-link>
      </el-menu-item>

      <el-menu-item>
        <router-link to="/about">About</router-link>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>

<style>
</style>