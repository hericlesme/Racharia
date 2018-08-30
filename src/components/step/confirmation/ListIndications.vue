<template>
    <el-row>
        <indication v-for="i in 4" :indication= i :key="i"/>
    </el-row>
</template>

<script>
import Indication from '@/components/step/confirmation/Indication'
export default {
  name: 'ListIndications',
  components: {
    Indication
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  margin: 10px;
}
</style>
