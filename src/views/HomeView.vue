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
    title: 'Comparison Matrix Editor for Large-Scale Validation Workflows',
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
    class: 'md:mt-16 lg:mt-24',
  },
]
</script>

<template>
  <main class="home-page">
    <section
      class="hero-section min-h-[calc(100svh-5.5rem)] px-margin-mobile md:px-margin-desktop py-16 max-w-page mx-auto flex flex-col justify-center"
    >
      <div class="max-w-5xl">
        <span
          class="font-mono text-sm uppercase tracking-[0.32em] text-tertiary mb-6 block opacity-80"
        >
          UX Engineer
        </span>
        <h1
          class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 md:mb-8 leading-[1.05]"
        >
          Complexity is the problem.<br />
          <span class="text-tertiary">Clarity is what I build.</span>
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 md:mb-12">
          I'm Marion, a frontend engineer with 6 years of experience across Vue, React, and Angular.
          I've spent my career sitting at the intersection of engineering and design — translating
          complex business logic into interfaces that actually make sense. Currently pursuing a
          Master's in HCI at University College Dublin, where I'm deepening my understanding of how
          people think, not just how systems work.
        </p>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
          <a
            class="inline-flex items-center gap-2 font-body-md text-body-md text-on-primary bg-primary px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm hover:shadow-md"
            href="#work"
          >
            View My Work
          </a>
          <div
            class="hidden md:block p-4 bg-surface-container-high rounded-xl font-mono text-xs text-on-surface-variant border border-outline-variant/30 shadow-sm w-full max-w-sm"
          >
            <span class="text-tertiary">const</span>
            <span class="text-on-surface"> marion</span> = {
            <br />
            &nbsp;&nbsp;role: <span class="text-[#a65f54]">'UX Engineer'</span>,
            <br />
            &nbsp;&nbsp;superpower: <span class="text-[#a65f54]">'Complexity → Clarity'</span>,
            <br />
            &nbsp;&nbsp;currently: <span class="text-[#a65f54]">'MSc HCI @ UCD Dublin'</span>,
            <br />
            &nbsp;&nbsp;speaks: [<span class="text-[#a65f54]">'Design'</span>,
            <span class="text-[#a65f54]">'Code'</span>, <span class="text-[#a65f54]">'Both'</span>],
            <br />
            };
          </div>
        </div>
      </div>
    </section>

    <section
      class="pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 px-margin-mobile md:px-margin-desktop max-w-page mx-auto bg-surface-container-lowest"
      id="work"
    >
      <div class="mb-10 md:mb-14">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Featured Work</h2>
        <div class="w-12 h-px bg-outline-variant"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-gutter">
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
      class="py-12 md:py-16 lg:py-20 px-margin-mobile md:px-margin-desktop max-w-page mx-auto"
    >
      <div class="mb-6 md:mb-8">
        <h2 class="font-headline-md text-[24px] text-on-surface">Technical Excellence</h2>
      </div>
      <TechPillList :items="technicalSkills" />
    </section>

    <!-- <section
      class="py-section-gap px-margin-mobile md:px-margin-desktop max-w-page mx-auto text-center"
    >
      <h2
        class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8"
      >
        Ready to start your next project?
      </h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant mb-12">
        Let's explore how to translate your vision into an exceptional digital experience.
      </p>
      <a
        class="inline-block font-body-md text-body-md text-on-surface border-b border-on-surface pb-1 hover:text-tertiary hover:border-tertiary transition-colors duration-300 uppercase tracking-[0.24em] text-sm"
        href="mailto:hello@example.com"
      >
        Send Email
      </a>
    </section> -->
  </main>
</template>

<style scoped lang="scss">
@media (max-width: 768px) {
  .hero-section {
    min-height: calc(100vh - 5.5rem);
  }
}
</style>
