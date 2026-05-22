<script setup lang="ts">
import ResumeExperienceItem from '@/components/ResumeExperienceItem.vue'
</script>

<template>
  <main class="resume-page px-margin-mobile md:px-margin-desktop py-28 max-w-page mx-auto w-full">
    <section class="mb-section-gap">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
        <div class="md:col-span-8">
          <h1
            class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6"
          >
            Resume
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Focusing on creating intuitive and elegant digital experiences. With over five years of
            experience in product design and user experience planning, I am dedicated to translating
            complex business logic into a minimalist design vocabulary.
          </p>
        </div>
        <div class="md:col-span-4 flex md:justify-end mt-8 md:mt-0">
          <a
            class="inline-flex items-center gap-2 px-8 py-4 bg-tertiary text-on-tertiary rounded-DEFAULT hover:bg-on-tertiary-container transition-colors duration-300"
            href="#"
          >
            <span class="font-label-caps text-label-caps uppercase">Download PDF</span>
            <span class="material-symbols-outlined text-[18px]">download</span>
          </a>
        </div>
      </div>
    </section>

    <section class="mb-section-gap border-t border-surface-container-high pt-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div class="col-span-1 md:col-span-4 mb-8 md:mb-0">
          <h2 class="font-headline-md text-headline-md text-on-surface sticky top-[100px]">
            Professional Experience
          </h2>
        </div>
        <div class="col-span-1 md:col-span-8 flex flex-col gap-[80px]">
          <ResumeExperienceItem
            role="Senior Product Designer"
            company="Studio N"
            date="2021 — Present"
            description="Led the reconstruction of the core product's design system, increasing team development efficiency by 40%. Responsible for the complete process from early user research and wireframing to final high-fidelity prototyping. Collaborated closely with cross-national development teams to ensure high-quality delivery of design implementations."
          />
          <ResumeExperienceItem
            role="UI/UX Designer"
            company="Creative Digital"
            date="2018 — 2021"
            description="Participated in interface redesign projects for multiple enterprise-level SaaS platforms. Optimized key conversion funnels through in-depth user interviews and A/B testing, increasing product retention by 15%. Established internal design guideline documentation for the team."
          />
          <ResumeExperienceItem
            role="Visual Designer"
            company="Geometric Creative"
            date="2016 — 2018"
            description="Responsible for brand identity design, marketing campaign web design, and digital advertising asset production. Assisted in establishing brand visual style guidelines to ensure cross-platform visual consistency."
          />
        </div>
      </div>
    </section>

    <section class="mb-section-gap border-t border-surface-container-high pt-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div class="col-span-1 md:col-span-4 mb-8 md:mb-0">
          <h2 class="font-headline-md text-headline-md text-on-surface sticky top-[100px]">
            Education
          </h2>
        </div>
        <div class="col-span-1 md:col-span-8 flex flex-col gap-[60px]">
          <ResumeExperienceItem
            role="Master in Interaction Design"
            company="National Taipei University of Technology"
            date="2014 — 2016"
            education
          />
          <ResumeExperienceItem
            role="Bachelor in Industrial Design"
            company="National Cheng Kung University"
            date="2010 — 2014"
            education
          />
        </div>
      </div>
    </section>

    <section class="border-t border-surface-container-high pt-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div class="col-span-1 md:col-span-4 mb-8 md:mb-0">
          <h2 class="font-headline-md text-headline-md text-on-surface sticky top-[100px]">
            Professional Skills
          </h2>
        </div>
        <div class="col-span-1 md:col-span-8">
          <div class="mb-12">
            <h3 class="font-body-lg text-body-lg text-on-surface mb-6">Core Design</h3>
            <div class="flex flex-wrap gap-3">
              <span
                class="px-5 py-2.5 bg-surface-container-high text-on-surface-variant rounded-full font-label-caps text-label-caps tracking-widest uppercase"
                >UI/UX Design</span
              >
              <span
                class="px-5 py-2.5 bg-surface-container-high text-on-surface-variant rounded-full font-label-caps text-label-caps tracking-widest uppercase"
                >Design Systems</span
              >
              <span
                class="px-5 py-2.5 bg-surface-container-high text-on-surface-variant rounded-full font-label-caps text-label-caps tracking-widest uppercase"
                >Prototyping</span
              >
              <span
                class="px-5 py-2.5 bg-surface-container-high text-on-surface-variant rounded-full font-label-caps text-label-caps tracking-widest uppercase"
                >Information Architecture</span
              >
              <span
                class="px-5 py-2.5 bg-surface-container-high text-on-surface-variant rounded-full font-label-caps text-label-caps tracking-widest uppercase"
                >User Research</span
              >
            </div>
          </div>
          <div>
            <h3 class="font-body-lg text-body-lg text-on-surface mb-6">Tools &amp; Technologies</h3>
            <div class="flex flex-wrap gap-3">
              <span
                class="px-5 py-2.5 border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps tracking-widest uppercase"
                >Figma</span
              >
              <span
                class="px-5 py-2.5 border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps tracking-widest uppercase"
                >Framer</span
              >
              <span
                class="px-5 py-2.5 border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps tracking-widest uppercase"
                >Webflow</span
              >
              <span
                class="px-5 py-2.5 border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps tracking-widest uppercase"
                >HTML/CSS</span
              >
              <span
                class="px-5 py-2.5 border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps tracking-widest uppercase"
                >Tailwind CSS</span
              >
            </div>
          </div>
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
