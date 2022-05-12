
<template>
<el-scrollbar height="1024">
  <div class="background">
    <top-vue></top-vue>
    <cards></cards>
  </div>
</el-scrollbar>
</template>

<script setup>
import Cards from '../components/Cards.vue';
import TopVue from '../components/Top.vue';
</script>

<style scoped>
.background{
  background-color: lightslategray;
}
</style>
