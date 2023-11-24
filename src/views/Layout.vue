<template>
  <el-container>
    <el-header>標題</el-header>
    
    <el-container>
      <el-aside width="200px">
        <Menu />
      </el-aside>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
  
<script>
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Menu
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
