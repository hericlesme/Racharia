<template>
  <div id="app">
    <el-menu
      :default-active="activeIndexHeader"
      :router="true"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">Sobre</el-menu-item>
    </el-menu>
    <el-container>
      <el-main class="main-view">
        <router-view class="view"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndexHeader: '/'
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-view {
  margin-top: 60px;
}

body{
  margin: 0;
  padding: 0;
}
</style>
