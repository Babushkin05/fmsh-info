<template>
    <div class="block">
      <div class="settings">Включить уведомления</div>
      <el-switch v-model="value1" size="large" class="switch"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(true)
</script>

<style scoped>
.block{
  padding: 5%;
  margin-top: 50%;
  border-radius: 5%;
  width: 80%;
  display: grid;
  background-color: white;
  border-style: solid;
  margin: auto;
  border-color: lightskyblue;
  display: grid;
  grid-template-areas:
  "texts switch";
  grid-template-columns: 80% 1fr;
}
.settings{
  margin-left: 5%;
  margin: auto;
  grid-area: texts;
  text-align: center;
  font-size: 125%;
  color: black;
}
.switch{
  grid-area: switch;
  padding: auto;
  margin: auto;
}
</style>