<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationVue from './views/Navigation.vue';
</script>

<template>
  <RouterView class="main" />
  <NavigationVue class="navigation" />
</template>

<style>
html,
body{
  display: block;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
   Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#app{
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
  height: 100vh;
  display: grid;
  grid-template-areas: 
  "main"
  "navigation"
  ;
  grid-template-rows: 9fr 1fr;
}
.main{
  grid-area: main;
}
.navigation{
  grid-area: navigation;
  border-top: 3px solid lightsteelblue;
}
</style>
