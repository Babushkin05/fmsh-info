<template>
    <el-scrollbar height="1024">
        <div class="background">
            <el-input v-model="input" placeholder="Please input" />
            <top-vue></top-vue>
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