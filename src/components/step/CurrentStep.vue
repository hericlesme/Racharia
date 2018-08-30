<template>
  <div>
    <price-step :updatePrice= updatePrice />
     <users-step :updateUsers= updateUsers />
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
      users: []
    }
  },
  methods: {
    updatePrice (price) {
      this.price = price
    },
    updateUsers (users) {
      this.users = users
    }
  }
}
</script>
