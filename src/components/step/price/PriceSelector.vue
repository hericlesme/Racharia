<template>
    <el-select v-model="selected" placeholder="Selecione a opção">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
export default {
  name: 'PriceSelector',
  data () {
    return {
      options: [
        {
          value: 13,
          label: 'R$13,00'
        },
        {
          value: 10,
          label: 'R$10,00'
        },
        {
          value: 8,
          label: 'R$8,00'
        }
      ],
      selected: ''
    }
  },
  watch: {
    selected (newSelected, oldSelected) {
      this.$emit('updatePrice', this.selected)
    }
  }
}
</script>
