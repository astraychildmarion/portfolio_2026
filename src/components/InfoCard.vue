<template>
  <div class="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/20 shadow-sm">
    <h2 class="font-headline-md text-headline-md text-on-surface mb-4">{{ title }}</h2>
    <div class="font-body-md text-body-md text-on-surface-variant">
      <slot>{{ description }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
