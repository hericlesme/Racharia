<template>
  <div>
    <h2>
      Escolha a opção de preço
    </h2>
    <el-row>
      <price-selector v-on:updatePrice="$emit('updatePrice', $event)" />
    </el-row>
  </div>
</template>

<script>
import PriceSelector from '@/components/step/price/PriceSelector'
export default {
  name: 'PriceStep',
  components: {
    PriceSelector
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  margin: 10px;
}
</style>
