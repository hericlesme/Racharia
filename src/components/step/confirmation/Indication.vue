<template>
    <el-card shadow="hover">
      <el-row :gutter="20">
        <el-col>
          <img class="avatar"/>
          É a pessoa mais indicada para: {{ indication.activity }}
        </el-col>
      </el-row>
    </el-card>
</template>

<script>

export default {
  name: 'Indication',
  props: {
    indication: Object
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  margin: 10px;
}
.avatar {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>
