<template>
  <div id="mfe-host-vue3">
    <h2>Vue3 Host MFE</h2>

    <router-link class="nav" to="/component-a">Component A</router-link>
    <router-link class="nav" to="/component-b">Component B</router-link>
    <router-link class="nav" to="/mfe-vue3">MFE Vue3</router-link>
    <router-link to="/mfe-vue2/component-a">MFE Vue2</router-link>

    <router-view class="view"></router-view>
    <div id="vue-mf"></div>
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
