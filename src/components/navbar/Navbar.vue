<template>
  <div class="nav">
    <p v-for="(value, index) in navbarItem" v-bind:key="index">
      <router-link v-bind:to='`/${ value }`'>{{ value }}</router-link>  
    </p>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navbarItem: ['Home', 'Coin', 'News']
    }
  }
}
</script>

<style scoped>
.nav {
  background-color: lavender;
  display: flex;
  /* margin: auto; */
  height: 50px;
  justify-content: center;
  margin-bottom: 10px;
}

.nav > p {
  display: flex;
  flex-direction: row;
}

.nav > p > a {
  /* background-color: green; */
  padding: 15px;
}
</style>

