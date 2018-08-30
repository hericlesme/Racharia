<template>
  <div>
    <price-step :updatePrice= updatePrice />
  </div>
</template>

<script>
import PriceStep from '@/components/step/PriceStep'
export default {
  name: 'CurrentStep',
  components: {
    'price-step': PriceStep
  },
  data () {
    return {
      price: 0
    }
  },
  methods: {
    updatePrice (price) {
      this.price = price
    }
  }
}
</script>
