<template>
  <article v-bind="$attrs" class="project-card group cursor-pointer">
    <component :is="cardComponent" v-bind="cardLinkAttrs" class="block">
      <div
        :class="[
          'project-card__media img-hover-scale overflow-hidden rounded-lg bg-surface-container-low mb-6',
          aspectClass,
        ]"
      >
        <img class="w-full h-full object-cover" :src="image" :alt="imageAlt" />
      </div>
      <div>
        <div class="flex gap-2 mb-3 flex-wrap">
          <span
            v-for="tag in tags"
            :key="tag"
            class="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps rounded-full"
            >{{ tag }}</span
          >
        </div>
        <h2
          class="font-headline-md text-[28px] md:text-headline-md font-semibold leading-tight text-on-surface mb-2 group-hover:text-tertiary transition-colors duration-300"
        >
          {{ title }}
        </h2>
        <p v-if="description" class="font-body-md text-body-md text-on-surface-variant">
          {{ description }}
        </p>
      </div>
    </component>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: '',
  },
  tags: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  to: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  aspect: {
    type: String,
    default: '16/9',
  },
})

const aspectClass = computed(() => {
  switch (props.aspect) {
    case '4/5':
      return 'aspect-[4/5]'
    case '4/3':
      return 'aspect-[4/3]'
    case 'square':
      return 'aspect-square'
    default:
      return 'aspect-[16/9]'
  }
})

const cardComponent = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'div'
})

const cardLinkAttrs = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href }
  return {}
})
</script>

<style scoped>
.project-card__media {
  position: relative;
}

.img-hover-scale img {
  transition: transform 0.7s ease;
}

.img-hover-scale:hover img {
  transform: scale(1.05);
}
</style>
