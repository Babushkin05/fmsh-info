<template>
    <div class="background">
        <top-vue></top-vue>
        <div class="author">{{a.auth}}</div>
        <div class="date">{{a.date}}</div>
        <div class="promo">{{a.promo}}</div>
        <div class="main">{{a.text}}</div>
    </div>
</template>

<script setup>
import TopVue from '../components/Top.vue';
a={
    auth:"Олеся Ивановна Ольшевская",
    date:"17.04.2022",
    promo:"Классный час в понедельник",
    text:"Завтра после 5 урока классный час мини, в субботу в 16:30 идём в гриву'\n' Жду до конца дня в любом виде расписанное расписание индивидуально каждого"
}

</script>

<style scoped>
.card{
    text-decoration: none;
    width: 80%;
    display: grid;
    background-color: white;
    border-style: solid;
    margin: auto;
    padding: 7px;
    border-radius: 3%;
    border-color: lightskyblue;
    margin-top: 5px;
    grid-template-areas: 
    "author date"
    "promo promo"
    "main main";
    grid-template-rows: 10% 10% 1fr;
    grid-template-columns: 1fr 1fr;
}
.author{
    grid-area: author;
    margin-left: 2px;
    color: darkgray;
    font-size: 100%;
    width: 50%;
}
.date{
    grid-area: date;
    margin-left: 45%;
    font-size: 100%;
    color: darkgrey;
}
.promo{
    color: black;
    font-size: 150%;
    font-weight: bold;
    margin-left: 3%;
    padding-top: 10%;
    margin-right: 3%;
    padding-bottom: 2%;
}
.main{
    color: black;
    font-size: 125%;
    margin-left: 3%;
    padding-top: 20%;
    margin-right: 3%;
    padding-bottom: 2%;
}
.background{
  background-color: lightslategray;
}
</style>