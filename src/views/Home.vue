<template>
  <div class="home">
    <price-selector :updatePrice = updatePrice />

    {{ price }}
  </div>
</template>

<script>
import PriceSelector from '@/components/PriceSelector'

export default {
  name: 'home',
  components: {
    'price-selector': PriceSelector
  },
  data () {
    return {
      price: ''
    }
  },
  methods: {
    updatePrice (price) {
      this.price = price
    }
  }
}
</script>
