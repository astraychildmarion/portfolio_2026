<template>
  <main class="about-page px-margin-mobile md:px-margin-desktop py-28 max-w-page mx-auto w-full">
    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[680px]">
      <div class="md:col-span-6 md:col-start-2">
        <p class="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary mb-4">
          About the Designer
        </p>
        <h1
          class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8"
        >
          Through the power of silence, shaping meaningful experiences.
        </h1>
        <div class="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
          <p>
            I am a creator focused on digital product design. I deeply believe in "quiet luxury" —
            design shouldn't be loud, but should convey deep professionalism through delicate
            whitespace, restrained colors, and precise typography.
          </p>
          <p>
            Over the past decade, I have transformed complex business logic into intuitive, elegant
            interactive experiences. For me, every pixel carries intent, and every transition tells
            a story.
          </p>
        </div>
      </div>
      <div class="md:col-span-4 md:col-start-9 order-first md:order-last">
        <div
          class="aspect-[3/4] w-full rounded-xl overflow-hidden bg-surface-container-high shadow-sm"
        >
          <img
            class="w-full h-full object-cover grayscale opacity-95 hover:opacity-100 transition duration-700 ease-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1cuxTIWzzfAYCmwivI3SI-aNhBwcj8gge3JVZO9oUc7RI5KkLSvC5yuWckMW6PpdokBLZXPiYE5UR6mODL7gv6KS6Y8fzGl8JOxCI_mD6aDu23dMGEXlU4hlYVltcaGoWjuAvsfJ8Rl2g1rLQtef4nvzSGwpI2pqNyA2wxC9lPnAkGAFUEezFf24HxapCIT73y7MKwhI-Xzogw41VsGy7FTyKavqGYpHtyxSLpOXXsxHtJF87wNVpu6skdVI0tJzAVRJn9Ox6zPqs"
            alt="Portrait of a designer in a quiet luxury editorial setting"
          />
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter py-section-gap">
      <div class="md:col-span-10 md:col-start-2">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            title="Philosophy"
            description="I design with calm intention, prioritizing clarity and lasting value over trends."
          />
          <InfoCard
            title="Approach"
            description="I balance thoughtful research, refined hierarchy, and subtle motion to create systems that feel effortless."
          />
          <InfoCard
            title="Focus"
            description="Digital products that feel premium, accessible, and quietly confident."
          />
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter py-16">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Experience</h2>
      </div>
      <div class="md:col-span-9 space-y-8">
        <p class="font-body-md text-body-md text-on-surface-variant">
          I have worked across brand, product, and interaction design, helping clients move from
          concept to elegant digital experiences. My background blends strategy, visual design, and
          frontend-aware execution.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <InfoCard title="Years designing experiences">
            <p class="font-display-lg text-display-lg text-on-surface mb-2">10+</p>
          </InfoCard>
          <InfoCard title="Projects delivered">
            <p class="font-display-lg text-display-lg text-on-surface mb-2">50+</p>
          </InfoCard>
          <InfoCard title="Average client satisfaction">
            <p class="font-display-lg text-display-lg text-on-surface mb-2">4.9</p>
          </InfoCard>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import InfoCard from '@/components/InfoCard.vue'
</script>

<style scoped>
.about-page {
  min-height: 100%;
}

.about-page img {
  display: block;
}
</style>
