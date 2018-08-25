<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.bg-purple-dark {
  background-color: aqua
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
