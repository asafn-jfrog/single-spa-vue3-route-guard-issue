<template>
  <div id="app">
    <h2>client-microfrontend Vue3</h2>

    <router-link class="nav" to="/component-a">Component A</router-link>
    <router-link to="/component-b">Component B</router-link>

    <router-view class="view"></router-view>
  </div>
</template>

<script lang="ts">

export default {
  name: 'App',
}
</script>

<style>
  .nav {
    margin-right: 10px;
  }
  .view {
    margin-top: 30px;
  }
</style>
