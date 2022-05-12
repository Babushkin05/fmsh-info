<template>
        <router-link to="/chosed" v-for="item in store.NeededCards" :key="item.id" class="card">
            <div class="authors">{{item.author}}</div>
            <div class="times">{{item.time}}</div>
            <div class="main">{{item.promo}}</div>
        </router-link>
</template>

<script setup>
import { myStore } from '../stores/store';
const store =myStore();
</script>

<style scoped>
.card{
    text-decoration: none;
    display: grid;
    background-color: white;
    border-style: solid;
    margin: auto;
    width: 80%;
    padding: 7px;
    border-radius: 3%;
    border-color: lightskyblue;
    margin-top: 5px;
    grid-template-areas: 
    "author time"
    "text text";
    grid-template-rows: 10% 1fr ;
    grid-template-columns: 1fr 20%;
}
.authors{
    grid-area: author;
    margin-left: 2px;
    color: darkgray;
    font-size: 75%;
    width: 50%;
}
.times{
    grid-area: time;
    font-size: 75%;
    color: darkgrey;
}
/* .mainhidden{
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
} */
.main{
    overflow: hidden;
    grid-area: text;
    margin-left: 3%;
    padding-top: 10%;
    margin-right: 3%;
    padding-bottom: 2%;
    font-size: 125%;
    color: black;
    height: auto;
}
.long{
    overflow: hidden;
    height: 150px;
}

</style>