import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const key = process.env.VUE_APP_CRYPTO_KEY

const state = {
  cryptoData: [],
  fullData: [],
  topList: [],
  news: []
}

const getters = {
  getCryoto: (state) => state.cryptoData,
  getFullData: (state) => state.fullData,
  getTopListData: (state) => state.topList,
  getNewsData: (state) => state.news
}

const actions = {
  loadcrypto: function () {
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=${ key }`)
    .then((response) => response.json())
    .then((response) => this.commit('setCryto', response))
    .catch((err) => console.log('unable to loadcrypto()', err))
  },
  loadFullData: function () {
    fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR&api_key=${ key }`)
    .then((response) => response.json())
    .then((response) => this.commit('setFullData', response))
    .catch((err) => console.log('unable to loadFullData()', err))
  },
  loadTopListData: function () {
    fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD&api_key=${ key }`)
    .then((response) => response.json())
    .then((response) => this.commit('setTopListData', response.Data))
    .catch((err) => console.log('unable to loadTopListData()', err))
  },
  loadNewsData: function () {
    fetch(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${ key }`)
    .then((response) => response.json())
    .then((response) => this.commit('setNewsData', response.Data))
    .catch((err) => console.log('unable to loadNewsData()', err))
  }
}

const mutations = {
  setCryto: (state, payload) => state.cryptoData = payload,
  setFullData: (state, payload) => state.fullData = payload,
  setTopListData: (state, payload) => state.topList = payload,
  setNewsData: (state, payload) => state.news = payload
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store