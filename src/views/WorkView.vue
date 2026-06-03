<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <main
    class="work-page px-margin-mobile md:px-margin-desktop pt-28 pb-20 md:pb-24 lg:pb-28 max-w-page mx-auto w-full"
  >
    <header class="mb-12 md:mb-16 lg:mb-20 max-w-3xl">
      <p class="font-label-caps text-label-caps uppercase tracking-[0.24em] text-tertiary mb-4">
        Selected Works
      </p>
      <h1
        class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6"
      >
        Selected Works
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Selected interface refactors shaped by engineering constraints, user needs, and the quiet
        work of turning complexity into clarity.
      </p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-gutter">
      <ProjectCard
        class="md:col-span-6"
        to="/work/project-1"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBoW5GSE6hxBBJmhQRhK9N4UshMIpQ4gJSK_jr7A-HaoJVuUUlRd2-FeqFejJ4aANYuE-muMuVpvWkhQiIP9A7optIT4eChTFo0oy--KEJ0F5mBFmlCu4aW5mX7Qj4yzidGDkk3-0ENxOxZu99HySLjvYRrDOrz-wPLJOValwI-aGyxHgnwGLo1r_nqEC8heHHgfTEZWPQOuKtu0x4VXCtlMTelMFKFmgaRNiARYllOl0JknYo7FtE6PAlHjEhrwHvqc7emMw0BRtaW"
        image-alt="Contemporary architecture interior with natural lighting and minimal furniture"
        :tags="['Angular', 'TypeScript', 'UI Refactor']"
        title="CIQ — From Cluttered to Clear"
        description="An Angular enterprise dashboard serving global engineering teams — rebuilt from the ground up to surface what matters and eliminate visual noise."
        aspect="4/3"
      />

      <ProjectCard
        class="md:col-span-6 md:mt-16 lg:mt-24"
        to="/work/project-2"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuACyvUk8iKWnKyjSp6_I-vD59a8msoUhwdmmktwNfhhPyTjC3ch8xMfX0LI6Uo1Nayj5apw1U4eJ1JMMRfVJRoCoWnG8Hw6we4XAgfrT0cV4SK36XEO_1ss_N9VUUq2tP2BuhVY_5zeP7kTXivC_1yTivLoAzsBRCh9n5T9qu1eLyDPeK0FqBUliu-95LcSxQqqEcwf8QT0GqP8wlaqNWxZM5wbZDQFKHyGmFF8mkTGocRXSs7hFWAGYSFxHJ7jv0zONwsOr-3Ahij4"
        image-alt="Minimalist ceramic art pieces arranged on a smooth beige surface"
        :tags="['Dart Angular', 'UX Redesign']"
        title="ISP Tuner — Taming Complexity"
        description="A dense image signal processing tool used by network engineers — redesigned to reduce cognitive load without losing technical depth."
        aspect="4/3"
      />
    </section>
  </main>
</template>
