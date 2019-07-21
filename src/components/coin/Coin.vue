<template>
  <div>
    <Navbar />
    <div class="list" v-for="value in topList" v-bind:key="value.CoinInfo.Internal">
      <img v-bind:src="`https://www.cryptocompare.com/${value.CoinInfo.ImageUrl}`" v-bind:alt="value.CoinInfo.Internal">
      <p>{{ value.DISPLAY.USD.PRICE }}</p>
      <p>{{ value.DISPLAY.USD.VOLUME24HOURTO }}</p>
      <p>{{ value.DISPLAY.USD.VOLUME24HOUR }}</p>
      <p>{{ value.DISPLAY.USD.MKTCAP }}</p>
      <p>{{ value.DISPLAY.USD.CHANGEPCT24HOUR }}</p>
    </div>
  </div>
</template>

<script>
import Navbar from '../navbar/Navbar'

export default {
  name: 'Detail',
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch('loadTopListData')
  },
  methods: {

  },
  computed: {
    topList: function () {
      return this.$store.getters.getTopListData
    }
  }
}
</script>

<style scoped>
.list {
  background-color: lightblue;
  display: flex;
  margin: auto;
  width: 50vw;
  height: 5vh;
  /* justify-content: left; */
}

.list > p {
  /* margin: 10px; */
  /* padding: 10px; */
  width: 100%;
  border: 1px solid lightcyan;
}

.list > img {
  height: 5vh;
}
</style>

