<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <div id="app">
    <SiteHeader />
    <main class="pt-22">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
main {
  padding-top: 5.5rem;
}
</style>
