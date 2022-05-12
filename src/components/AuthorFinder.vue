<template>
    <el-input v-model="input" placeholder="Введите имя" class="search"/>
    <div v-for="(item,index) in FindCard(input)" :key="index">
        
    </div>
</template>

<script setup>
import { myStore } from '../stores/store'
import { ref } from 'vue'
const input = ref('')
</script>

<style scoped>
.block{
    border-radius: 5%;
    display: grid;
    background-color: white;
    border-style: solid;
    margin: auto;
    border-color: lightskyblue;
    grid-template-areas: 
    "search"
    "filter";
    grid-template-rows:15% 1fr;
}
.search{
    width: 100%;
    height: 20%;
    grid-area: search;
}
.filtered{
    grid-area:filter;
}
</style>