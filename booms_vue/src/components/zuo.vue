<template>
  <div class="zuo">
  <el-menu
      :router="true"
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>测试工具</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/tools/dev">设备管理</el-menu-item>
          <el-menu-item index="/tool/imgdata">素材生成</el-menu-item>
          <el-menu-item index="/tool/speak">舆论实时</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>接口测试</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/jk/case">用例管理</el-menu-item>
          <el-menu-item index="/jk/tag">标签管理</el-menu-item>
          <el-menu-item index="/jk/task">任务执行</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu{
  border-right: none;
}
</style>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>