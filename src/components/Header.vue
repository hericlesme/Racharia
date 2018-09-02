<template>
<div class="header">
  <a :href="Home" class="logo">Racharia</a>
  <div class="header-right">
    <a class="active" :href="home">Home</a>
    <a :href="About">About</a>
  </div>
</div>
</template>

<style scoped>
.header {
  overflow: hidden;
  background-color: #ffae00;
  padding: 5px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

</style>
