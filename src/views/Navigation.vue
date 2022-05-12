<template>
    <div class="mainblock">
        <router-link to="/about" class="route about">About</router-link>
        <router-link to="/" class="route main" @click="store.onMainPage=True">Main</router-link>
        <router-link to="/search" class="route schedule" @click="store.onMainPage=False">Search</router-link>
    </div>
</template>

<script setup>
import router from '../router';
import { myStore } from '../stores/store';
const store=myStore();
</script>

<style scoped>
.mainblock{
    background-color: #457099;
    align-content: center;
    display: grid;
    grid-template-areas: 
    "About Main Search";
    grid-template-rows: 1fr 1fr 1fr;
}
.route{
    text-decoration: none;
    width: auto;
    font-size: 125%;
    text-align: center;
    color: white;
}
.about{
    grid-area: About;
}
.main{
    grid-area: Main;
}
.search{
    grid-area: Search;
}
</style>