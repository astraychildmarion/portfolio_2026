<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <main class="project-page px-margin-mobile md:px-margin-desktop py-28 max-w-page mx-auto w-full">
    <section class="mb-section-gap max-w-3xl">
      <p class="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary mb-4">
        Case Study A
      </p>
      <h1
        class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6"
      >
        Project Restructuring: From Chaos to Clarity
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Through in-depth user research and systematic design thinking, we redefined the core
        experience of the digital product, creating a more intuitive and elegant operational flow.
      </p>
    </section>

    <section class="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Overview</h2>
      </div>
      <div class="md:col-span-9">
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          This project solved the original experience's inconsistent navigation and unclear
          information hierarchy, enabling users to complete complex tasks with less friction.
        </p>
      </div>
    </section>

    <section class="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Problem</h2>
      </div>
      <div class="md:col-span-9 space-y-8">
        <p class="font-body-md text-body-md text-on-surface-variant">
          The original interface lacked consistency and hierarchy, making it difficult for users to
          understand and complete key operational flows.
        </p>
        <div class="aspect-video w-full rounded-lg overflow-hidden bg-surface-container-high">
          <img
            class="w-full h-full object-cover grayscale opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjSLGIqr8FDI1P3NXP8ed80NliN3BRajq2T1lv8tPntgnTqB-vv3ehcQ3FzcZachr6648QEgeJzVBFVOa_Dtgw6nX8PFRc_GU_AAhtxjAkr-qrjdJgpkfmkaulh6RUvW5JDvccdsMFWXQM1VeFPYG0BMp-YICp7JNIwlRAkFqro7KXnSOBoEz4ylNIbInTGZhzNVhnt7K6pCgzNyf6ZXH97lb-h0_dsvlZyn6tfttcppskA5uJVcC8WykonPF1BYUvW8D8ryD-g9Xz"
            alt="A messy, cluttered desk with scattered papers, wireframes, and sticky notes illustrating a confusing design process"
          />
        </div>
      </div>
    </section>

    <section class="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Process</h2>
      </div>
      <div class="md:col-span-9 space-y-8">
        <p class="font-body-md text-body-md text-on-surface-variant">
          We started with user interviews and analytics, then simplified the IA and validated flows
          with prototypes before moving into the final visual system.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <span class="material-symbols-outlined text-primary text-3xl mb-4 block"
              >psychology</span
            >
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Research & Diagnosis
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              User interviews and heatmap analysis revealed the main breakpoints in the experience.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <span class="material-symbols-outlined text-primary text-3xl mb-4 block"
              >architecture</span
            >
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Architecture Restructuring
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Flattened navigation and clarified information flow to reduce cognitive load.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Solution</h2>
      </div>
      <div class="md:col-span-9 space-y-10">
        <p class="font-body-md text-body-md text-on-surface-variant">
          The new interface uses warm earth tones, refined whitespace, and a modular Bento-style
          layout to communicate clarity and calm professionalism.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="aspect-[21/9] rounded-xl overflow-hidden shadow-sm">
            <img
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2ZEKec9XZWjo-wVsSIx8A01GIfPWMm3k0_ml7iUQo4b1pZ9ZdWckLO5kMj9Hw1X2r9Z_ZVcyGA9zJ_3AkefFkZOcKNNkuOXGjoB-isLaS6UCmXLs_xJznh028XQfMm2py8HU2KnJZhIg6x1BMLqggVQOEiOg8skcr_Fr7PPO3DdHLSceXOTAkdBWTemsEDv2JLBPoXHOrMfOg42DWXHl0DN90Ue3E_tJfmEwxNC9gxf8-p4FeToD2ATYemjT-C-_QEuNLENj5lnNl"
              alt="A highly refined digital dashboard displayed on a sleek monitor"
            />
          </div>
          <div
            class="aspect-square rounded-xl overflow-hidden shadow-sm bg-surface-container-low flex items-center justify-center p-8"
          >
            <div class="text-center">
              <span class="material-symbols-outlined text-tertiary text-4xl mb-4">palette</span>
              <h4 class="font-body-lg text-body-lg text-on-surface mb-2">Design System</h4>
              <p class="font-body-md text-body-md text-on-surface-variant text-sm">
                Built a reusable component library to maintain consistent UI patterns moving
                forward.
              </p>
            </div>
          </div>
          <div class="aspect-square rounded-xl overflow-hidden shadow-sm">
            <img
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxY4I-ijJp_9498HxBxTPa5oKVfOzIZlhgOSSgtR-Y9KXIRZXmAWxb-WxfYvXNduNPPyR54sLaE54VvcXAz4UVi2r0tf3iGeNGv1NaK9MofBENaouQ-ACeHI8c5lPOl_wYRCh1HUMstKs59xIfwShZVKYPtybf-hzWjM2UrjzdnO8wmkEjLMnjXXG2KFxJL-B7IzR9zfCQzoTCOn-HtmHDpcCBQ3wzrj9sx0orQrU-3SX9_csYC3-qr6qUEbSKLvO4sx1jM3Ywl_gh"
              alt="A modern mobile app interface displayed on a warm background"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Result</h2>
      </div>
      <div class="md:col-span-9">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="border-l-2 border-tertiary pl-6">
            <span class="font-display-lg text-display-lg text-on-surface block mb-2">+45%</span>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Task completion rate increased
            </p>
          </div>
          <div class="border-l-2 border-tertiary pl-6">
            <span class="font-display-lg text-display-lg text-on-surface block mb-2">-30%</span>
            <p class="font-body-md text-body-md text-on-surface-variant">Operation time reduced</p>
          </div>
          <div class="border-l-2 border-tertiary pl-6">
            <span class="font-display-lg text-display-lg text-on-surface block mb-2">9.2</span>
            <p class="font-body-md text-body-md text-on-surface-variant">User satisfaction score</p>
          </div>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant">
          After launch, operational efficiency improved significantly and support inquiries dropped
          as users found the interface more intuitive and calm.
        </p>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Reflection</h2>
      </div>
      <div class="md:col-span-9">
        <p class="font-body-md text-body-md text-on-surface-variant">
          Great design is a systematic engineering process. This project reinforced the importance
          of removing noise, strengthening visual hierarchy, and delivering a calm, confident
          digital experience.
        </p>
      </div>
    </section>

    <section class="mb-section-gap border-t border-surface-container-high pt-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div class="md:col-span-3">
          <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Other case studies</h2>
        </div>
        <div class="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            to="/work/project-2"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuACyvUk8iKWnKyjSp6_I-vD59a8msoUhwdmmktwNfhhPyTjC3ch8xMfX0LI6Uo1Nayj5apw1U4eJ1JMMRfVJRoCoWnG8Hw6we4XAgfrT0cV4SK36XEO_1ss_N9VUUq2tP2BuhVY_5zeP7kTXivC_1yTivLoAzsBRCh9n5T9qu1eLyDPeK0FqBUliu-95LcSxQqqEcwf8QT0GqP8wlaqNWxZM5wbZDQFKHyGmFF8mkTGocRXSs7hFWAGYSFxHJ7jv0zONwsOr-3Ahij4"
            image-alt="Minimalist ceramic art pieces arranged on a smooth beige surface"
            :tags="['Branding']"
            title="Ceramica Studio"
            description="A brand story built on warm materials, calm editorial form, and thoughtful product hierarchy."
            aspect="4/5"
          />
          <ProjectCard
            to="/work"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuA3AN3WCrg-2rfcFZWZkpthIVMlMwz3C-UFr99rCBptmGT0UD-1BarH4E6eSULNwDDF9-lo4eU2kSeleNPT83fV0o5VCn3Q7A6gsyIO8PDLx72pvkHJqO5gEsSfYmJcQdUAeWaSIjQIGG5MJkLUR59peKGkTPRUkDmSkcgwktQ5jEtvpO0PCorzyla5jEvmjk66FgLemZ1tHqsvox138-eLNL_k60Rxvfi3cmykUCtuAuOJUuyVXhXRca6Oa9JpVdTbezFJsrRN1oPO"
            image-alt="Editorial style magazine mockup with elegant typography"
            :tags="['Editorial', 'Typography']"
            title="KINFOLK Inspired Layouts"
            description="A calm editorial system that explores typographic scale, rhythm, and premium layout detail."
            aspect="4/3"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.img-hover-scale img {
  transition: transform 0.7s ease;
}

.img-hover-scale:hover img {
  transform: scale(1.05);
}
</style>
