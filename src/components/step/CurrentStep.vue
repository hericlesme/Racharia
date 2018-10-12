<template>
  <el-container>
    <el-main>
      <component :is="currentTabComponent"></component>
    </el-main>
    <el-button @click="updateStep">Avançar</el-button>
    <el-footer>
      <step-guide :active=step />
    </el-footer>
  </el-container>
</template>

<script scoped>
import PriceStep from '@/components/step/PriceStep'
import UsersStep from '@/components/step/UsersStep'
import StepGuide from '@/components/step/StepGuide'

export default {
  name: 'CurrentStep',
  components: {
    'price-step': PriceStep,
    'users-step': UsersStep,
    'step-guide': StepGuide
  },
  data () {
    return {
      step: 0,
      steps: [
        PriceStep,
        UsersStep
      ],
      price: 0,
      users: []
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.steps[this.step]
    }
  },
  methods: {
    updatePrice (price) {
      this.price = price
    },
    updateUsers (users) {
      this.users = users
    },
    updateStep (step) {
      this.step++
    }
  }
}
</script>

<style lang="scss" scoped>

.el-main{
  text-align: center;
}
.el-footer {
  padding: 0px;
}
</style>
