<template>
    <el-scrollbar height="1024">
        <div class="background">
            <top-vue></top-vue>
            <el-input v-model="store.searchedText" placeholder="Please input" />
            <cards-vue></cards-vue>
        </div>
    </el-scrollbar>
</template>

<script setup>
import TopVue from '../components/Top.vue';
import CardsVue from '../components/Cards.vue';
import { ref } from 'vue'
import { myStore } from '../stores/store';

const store=myStore()
store.searchedText=ref('')
</script>

<style scoped>
.background{
  background-color: lightslategray;
}

</style>