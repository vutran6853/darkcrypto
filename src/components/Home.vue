<template>
  <div>
    <Navbar />
    <div class="container">
      <p>USD: {{ coin.USD }}</p>
      <p>JPY: {{ coin.JPY }}</p>
      <p>EUR: {{ coin.EUR }}</p>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch('loadcrypto')
    this.$store.dispatch('loadFullData')
    // this.$store.dispatch('loadTopListData')
  },
  computed: {
    coin: {
      get: function () {
        return this.$store.getters.getCryoto
      },
      set: function () {
        return null
      }
    },
    fullData: {
      get: function () {
        return this.$store.getters.getFullData
      },
      set: function () {
        return null
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  height: 20vh;
  width: 10vw;
  margin: auto;
}
</style>
