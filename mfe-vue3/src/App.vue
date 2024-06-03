<template>
  <div id="mfe-vue3">
    <h2>MFE Vue3</h2>

    <router-link class="nav" to="/mfe-vue3/component-a">MFE Vue3 Component A</router-link>
    <router-link class="nav" to="/mfe-vue3/component-b">MFE Vue3 Component B</router-link>
    <router-link to="/component-b">Host Component B</router-link>

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
