<script setup lang="ts">
import ResumeExperienceItem from '@/components/ResumeExperienceItem.vue'

const professionalExperience = [
  {
    role: 'Software Engineer',
    company: 'Wipro (on-site at Google Taipei)',
    date: '2024 — 2026',
    description:
      'Collaborated with Google engineers on internal image-processing tools used by global engineering teams. Refactored and redesigned UI workflows to improve usability and visual consistency. Integrated AI-assisted development into UI refactoring workflows — using AI agents to accelerate component restructuring, generate test cases, and validate visual consistency across enterprise-scale dashboards.',
  },
  {
    role: 'Frontend Engineer',
    company: 'Phase Software GmbH',
    date: '2023 — 2024',
    description:
      'Partnered with product designers to optimize interface and UX across the product. Maintained and extended a custom component library, and implemented automated tests following BDD methodology.',
  },
  {
    role: 'Frontend Engineer',
    company: 'Yi Teng Technology Ltd',
    date: '2021 — 2023',
    description:
      'Built in-house cloud systems that significantly reduced server management overhead. Created a reusable UI component library to accelerate product development, and applied testing frameworks to improve code maintainability.',
  },
  {
    role: 'Frontend Engineer',
    company: 'Awoo Bros. Internet',
    date: '2019 — 2021',
    description:
      'Developed SaaS marketing platforms with data visualisation capabilities for enterprise clients. Contributed to front-end team efficiency through improved development workflows and testing automation.',
  },
]

const education = [
  {
    role: 'MSc Human-Computer Interaction',
    company: 'University College Dublin',
    date: '2026 — 2027',
  },
  {
    role: 'B.A. Slavic Languages and Literatures',
    company: 'National Chengchi University',
    date: '2007 — 2013',
    description: 'Minor in Philosophy — logic, semiotics, and philosophy of language.',
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Vue 3', 'React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS'],
    variant: 'filled',
  },
  {
    title: 'Testing',
    skills: ['Jest', 'E2E Testing'],
    variant: 'outlined',
  },
  {
    title: 'Design',
    skills: ['Figma', 'UI/UX', 'Design Systems', 'Component Library'],
    variant: 'filled',
  },
  {
    title: 'Additional',
    skills: ['AI-assisted Development'],
    variant: 'outlined',
  },
]

const certifications = [
  {
    role: 'UI/UX Designer Training Program',
    company: 'Institute for Information Industry',
    date: '2016',
  },
]
</script>

<template>
  <main
    class="resume-page px-margin-mobile md:px-margin-desktop pt-28 pb-20 md:pb-24 lg:pb-28 max-w-page mx-auto w-full"
  >
    <section class="mb-16 md:mb-20 lg:mb-24">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
        <div class="md:col-span-8">
          <h1
            class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6"
          >
            Resume
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Frontend engineer with 6 years of experience building and refactoring enterprise
            interfaces. Currently pursuing MSc HCI at University College Dublin — deepening the
            human side of what I build.
          </p>
        </div>
        <div class="md:col-span-4 flex md:justify-end mt-8 md:mt-0">
          <a
            class="inline-flex items-center gap-2 px-8 py-4 bg-tertiary text-on-tertiary rounded-DEFAULT hover:bg-on-tertiary-container transition-colors duration-300"
            href="#"
          >
            <span class="font-label-caps text-label-caps uppercase">Download PDF ↓</span>
          </a>
        </div>
      </div>
    </section>

    <section class="mb-16 md:mb-20 lg:mb-24 border-t border-surface-container-high pt-12 md:pt-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div class="col-span-1 md:col-span-4 mb-8 md:mb-0">
          <h2 class="font-headline-md text-headline-md text-on-surface sticky top-[100px]">
            Professional Experience
          </h2>
        </div>
        <div class="col-span-1 md:col-span-8 flex flex-col gap-12 md:gap-16">
          <ResumeExperienceItem
            v-for="item in professionalExperience"
            :key="`${item.company}-${item.date}`"
            :role="item.role"
            :company="item.company"
            :date="item.date"
            :description="item.description"
          />
        </div>
      </div>
    </section>

    <section class="mb-16 md:mb-20 lg:mb-24 border-t border-surface-container-high pt-12 md:pt-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div class="col-span-1 md:col-span-4 mb-8 md:mb-0">
          <h2 class="font-headline-md text-headline-md text-on-surface sticky top-[100px]">
            Education
          </h2>
        </div>
        <div class="col-span-1 md:col-span-8 flex flex-col gap-10 md:gap-12">
          <ResumeExperienceItem
            v-for="item in education"
            :key="`${item.company}-${item.date}`"
            :role="item.role"
            :company="item.company"
            :date="item.date"
            :description="item.description"
            education
          />
        </div>
      </div>
    </section>

    <section class="mb-16 md:mb-20 lg:mb-24 border-t border-surface-container-high pt-12 md:pt-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div class="col-span-1 md:col-span-4 mb-8 md:mb-0">
          <h2 class="font-headline-md text-headline-md text-on-surface sticky top-[100px]">
            Professional Skills
          </h2>
        </div>
        <div class="col-span-1 md:col-span-8 grid grid-cols-1 gap-10">
          <div v-for="group in skillGroups" :key="group.title">
            <h3 class="font-body-lg text-body-lg text-on-surface mb-6">{{ group.title }}</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in group.skills"
                :key="skill"
                :class="[
                  'px-5 py-2.5 text-on-surface-variant rounded-full font-label-caps text-label-caps tracking-widest uppercase',
                  group.variant === 'filled'
                    ? 'bg-surface-container-high'
                    : 'border border-outline-variant',
                ]"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-surface-container-high pt-12 md:pt-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div class="col-span-1 md:col-span-4 mb-8 md:mb-0">
          <h2 class="font-headline-md text-headline-md text-on-surface sticky top-[100px]">
            Certifications
          </h2>
        </div>
        <div class="col-span-1 md:col-span-8 flex flex-col gap-10 md:gap-12">
          <ResumeExperienceItem
            v-for="item in certifications"
            :key="`${item.company}-${item.date}`"
            :role="item.role"
            :company="item.company"
            :date="item.date"
            education
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.resume-page {
  min-height: 100%;
}
</style>
