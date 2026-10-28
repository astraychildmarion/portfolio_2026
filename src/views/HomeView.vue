<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import TechPillList from '@/components/TechPillList.vue'

const technicalSkills = [
  'Vue 3 · React · Angular',
  'TypeScript',
  'Tailwind',
  'Jest · E2E Testing',
  'HCI Research · UX Methods',
]

const featuredProjects = [
  {
    to: '/work/project-1',
    image: '/c_product/work_set_editor.webp',
    imageAlt: 'Project A Thumbnail',
    tags: ['UI Refactor', 'Function development', 'Angular', 'TypeScript'],
    title: 'Dataset Comparison Tool Redesign',
    aspect: '4/3',
    class: '',
  },
  {
    to: '/work/project-2',
    image: '/i_product/work_dashboard.webp',
    imageAlt: 'Project B Thumbnail',
    tags: ['UI / UX Refactor', 'Dart', 'Angular'],
    title: 'Central Dashboard for an Internal Validation Platform',
    aspect: '4/3',
    class: '',
  },
  {
    to: '/work/pokemon-care-lobby',
    image: '/pet_shop/pokemon_pet.png',
    imageAlt: 'Laptop displaying the Pokémon Care Lobby adoption interface',
    tags: ['React', 'UX Design', 'TDD', 'AI-Assisted Development'],
    title: 'Pokémon Care Lobby',
    aspect: '4/3',
    class: '',
  },
]
</script>

<template>
  <main class="home-page">
    <section
      class="hero-section px-margin-mobile md:px-margin-desktop pt-36 pb-20 md:pt-44 md:pb-28 max-w-page mx-auto"
    >
      <div class="max-w-3xl">
        <span
          class="font-mono text-sm uppercase tracking-[0.32em] text-tertiary mb-7 block opacity-80"
        >
          UX Engineer
        </span>
        <h1 class="font-headline-md text-[32px] md:text-[44px] leading-tight text-on-surface mb-6">
          I’m Marion, a software engineer with 7+ years of experience.
        </h1>
        <div class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-9">
          <p>I design thoughtful interfaces and bring them to life through code.</p>
        </div>
        <div>
          <a
            class="group inline-flex items-center gap-2 font-body-md text-body-md text-primary hover:text-tertiary transition-colors duration-300"
            href="#work"
          >
            View My Work
            <span
              class="material-symbols-outlined text-[19px] transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
              >arrow_downward</span
            >
          </a>
        </div>
      </div>
    </section>

    <section
      class="py-20 md:py-24 px-margin-mobile md:px-margin-desktop max-w-page mx-auto border-t border-outline-variant/30"
      id="work"
    >
      <div class="mb-10 md:mb-12">
        <h2 class="font-headline-md text-headline-md text-on-surface">Featured Work</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-gutter">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.title"
          :class="project.class"
          :to="project.to"
          :image="project.image"
          :image-alt="project.imageAlt"
          :tags="project.tags"
          :title="project.title"
          :aspect="project.aspect"
        />
      </div>
    </section>

    <section
      class="py-16 md:py-20 px-margin-mobile md:px-margin-desktop max-w-page mx-auto border-t border-outline-variant/30"
    >
      <div class="mb-6 md:mb-8">
        <h2 class="font-headline-md text-[24px] text-on-surface">Technical Excellence</h2>
      </div>
      <TechPillList :items="technicalSkills" />
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
