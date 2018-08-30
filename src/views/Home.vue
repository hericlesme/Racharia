<template>
  <div class="home">
    <current-step/>
  </div>
</template>

<script>
import CurrentStep from '@/components/step/CurrentStep'
export default {
  name: 'home',
  components: {
    'current-step': CurrentStep
  }
}
</script>
