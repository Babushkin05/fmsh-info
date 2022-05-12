import { defineStore } from 'pinia'
import list from '../dataset/dataset'

var date = (new Date()).toISOString().slice(0,10).split('-')

export const myStore = defineStore({
  id:'store',
  state:() => ({
    allCards:list.CardList,
    onMainPage:true,
    searchedText:'',
    date:(new Date()).toISOString().slice(0,10).split('-').reverse(),
  }),
  getters:{
    checkTextLenght:(txt)=>txt.lenght>50,
    NeededCards:(state)=>(state.onMainPage)?state.allCards :state.allCards.filter(()=>state.allCards.author.includes(state.searchedText)||state.allCards.promo.includes(state.searchedText)||state.allCards.time.includes(state.searchedText))
  },
  actions:{
    
  }
})
//state.allCards.filter((item)=>state.date[0]+state.date[1]*30+(state.date[2]-2022)*365-(item.time.split('.')[0]+item.time.split('.')[1]*30+(item.time.split('.')[2]-2022)*365))