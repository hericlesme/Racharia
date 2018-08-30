<template>
  <div>
    <price-step :updatePrice= updatePrice />
    <users-step :updateUsers= updateUsers />
    <confirmation-step />
  </div>
</template>

<script>
import PriceStep from '@/components/step/PriceStep'
import UsersStep from '@/components/step/UsersStep'
import ConfirmationStep from '@/components/step/ConfirmationStep'

export default {
  name: 'CurrentStep',
  components: {
    'price-step': PriceStep,
    'users-step': UsersStep,
    'confirmation-step': ConfirmationStep
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
