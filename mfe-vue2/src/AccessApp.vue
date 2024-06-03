<template>
  <div id="mfe-vue2">
    <h2>MFE Vue2</h2>

    <router-link class="nav" to="/mfe-vue2/component-a">MFE Vue2 Component A</router-link>
    <router-link to="/mfe-vue2/component-b">MFE Vue2 Component B</router-link>

    <br><br>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">

export default {
  name: 'App',
};
</script>
