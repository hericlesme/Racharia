<template>
  <div>
    <h2>
      Escolha a opção de preço
    </h2>
    <el-row>
      <price-selector :updatePrice= updatePrice />
    </el-row>
  </div>
</template>

<script>
import PriceSelector from '@/components/step/price/PriceSelector'
export default {
  name: 'PriceStep',
  components: {
    PriceSelector
  },
  props: {
    updatePrice: Function
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  margin: 10px;
}
</style>
