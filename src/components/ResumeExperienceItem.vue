<template>
  <article class="group">
    <div v-if="education" class="flex flex-col gap-3 mb-4">
      <div class="flex flex-col md:flex-row justify-between items-baseline gap-4">
        <h3 class="font-body-lg text-body-lg font-bold text-on-surface">{{ role }}</h3>
        <span class="font-body-md text-body-md text-on-surface-variant mt-2 md:mt-0">{{
          date
        }}</span>
      </div>
      <p class="font-body-md text-body-md text-on-surface-variant">{{ company }}</p>
    </div>
    <div v-else class="flex flex-col md:flex-row justify-between items-baseline mb-4">
      <h3 class="font-body-lg text-body-lg font-bold text-on-surface">
        {{ role }}
        <span class="text-on-surface-variant font-normal mx-2">|</span>
        {{ company }}
      </h3>
      <span class="font-body-md text-body-md text-on-surface-variant mt-2 md:mt-0">{{ date }}</span>
    </div>
    <p v-if="description" class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
      {{ description }}
    </p>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  role: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  education: {
    type: Boolean,
    default: false,
  },
})
</script>
