<template>
  <div>
    <price-step :updatePrice= updatePrice />
     <users-step :updateUser= updateUser />
     {{user}}
  </div>
</template>

<script>
import PriceStep from '@/components/step/PriceStep'
import UsersStep from '@/components/step/UsersStep'
export default {
  name: 'CurrentStep',
  components: {
    'price-step': PriceStep,
    'users-step': UsersStep
  },
  data () {
    return {
      price: 0,
      user: {}
    }
  },
  methods: {
    updatePrice (price) {
      this.price = price
    },
    updateUser (user) {
      this.user = user
    }
  }
}
</script>
