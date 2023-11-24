<template>
  <el-menu router>
    <el-submenu index="1">
      <template slot="title">
        <span>製造双碳</span>
      </template>

      <el-menu-item index="/home">Home</el-menu-item>

      <el-menu-item index="/about">About</el-menu-item>

      <el-submenu index="1-1">
        <template slot="title">
          <span>双碳配置</span>
        </template>

        <el-menu-item index="/fix">固定碳排放</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu index="2-1">
      <template slot="title">
        <span>2-1</span>
      </template>

      <el-menu-item>CAIDSAN</el-menu-item>
      <el-menu-item>CAIDSAN</el-menu-item>
      <el-menu-item>CAIDSAN</el-menu-item>
      <el-menu-item>CAIDSAN</el-menu-item>
      <el-menu-item>CAIDSAN</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>

<style>
</style>