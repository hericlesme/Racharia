<template>
  <div id="app">
     <app-header />
    <div  class="main-view">
      <div id="nav">
      </div>
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style>

html, body, #app {
    margin: 0;
    padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-view {
  margin-top: 60px;
  margin: auto;
  margin-bottom: 60px;
  display: block;
  max-width: 1000px;
}
</style>
