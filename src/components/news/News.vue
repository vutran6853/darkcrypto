<template>
  <div>
    <Navbar />
    <div class="newList">
      <div v-for="(value, index) in newsList" v-bind:key="index">
        <img v-bind:src="value.imageurl" v-bind:alt="value.imageurl">
        <h3>{{ value.title }}</h3>
        <p>{{ value.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../navbar/Navbar'

export default {
  name: 'News',
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch('loadNewsData')
  },
  computed: {
    newsList: function () {
      return this.$store.getters.getNewsData
    }
  }
}
</script>

<style scoped>

.newList {
  display: grid;
  grid-template-columns: 500px 500px 500px;
  grid-gap: 10px;
  justify-content: center;
}

.newList > div {
  border: 1px solid lightskyblue;
  box-shadow: 2px 2px lightblue;
}

.newList > div > img {
  display: grid;
  margin: auto;
}

.newList > div > h3 {
  text-align: center;
}

.newList > div > p {
  display: grid;
  justify-items: center;
  align-content: center;
  height: 20vh;
}
</style>

