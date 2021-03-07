<template>
  <div id="app">
    <div>State: {{ $store.state.count }}</div>
    <div>Getter: {{ $store.getters.countText }}</div>
    <div>执行mutation: <button @click="onAdd1">同步+1</button></div>
    <div>执行action: <button @click="onAdd2">异步+2</button></div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this)
  },
  methods: {
    onAdd1() {
      this.$store.commit('increment', 1)
    },
    onAdd2() {
      this.$store.dispatch('asyncIncrement', 2)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
