<template>
  <div class="flex flex-wrap gap-4 font-mono text-sm">
    <span
      v-for="item in items"
      :key="item"
      class="px-5 py-2.5 bg-surface-container-high text-on-surface-variant rounded-md border border-outline-variant/20 hover:border-tertiary/50 transition-colors duration-300"
    >
      {{ item }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>
