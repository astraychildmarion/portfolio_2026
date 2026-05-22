<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <main
    class="work-page px-margin-mobile md:px-margin-desktop pt-28 pb-section-gap max-w-page mx-auto w-full"
  >
    <header class="mb-section-gap max-w-3xl">
      <p class="font-label-caps text-label-caps uppercase tracking-[0.24em] text-tertiary mb-4">
        Selected Works
      </p>
      <h1
        class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6"
      >
        Selected Works
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Exploring the practice of quiet luxury in design. Each case study is a considered experience
        that balances space, texture, and digital detail.
      </p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <ProjectCard
        class="md:col-span-8"
        to="/work/project-1"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBoW5GSE6hxBBJmhQRhK9N4UshMIpQ4gJSK_jr7A-HaoJVuUUlRd2-FeqFejJ4aANYuE-muMuVpvWkhQiIP9A7optIT4eChTFo0oy--KEJ0F5mBFmlCu4aW5mX7Qj4yzidGDkk3-0ENxOxZu99HySLjvYRrDOrz-wPLJOValwI-aGyxHgnwGLo1r_nqEC8heHHgfTEZWPQOuKtu0x4VXCtlMTelMFKFmgaRNiARYllOl0JknYo7FtE6PAlHjEhrwHvqc7emMw0BRtaW"
        image-alt="Contemporary architecture interior with natural lighting and minimal furniture"
        :tags="['UI/UX', 'Web Design']"
        title="Aura Botanical Skincare"
        description="Reshaping the digital experience for a premium skincare brand using soft tonal layers, generous white space, and intuitive storytelling."
      />

      <ProjectCard
        class="md:col-span-4 md:mt-24"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuACyvUk8iKWnKyjSp6_I-vD59a8msoUhwdmmktwNfhhPyTjC3ch8xMfX0LI6Uo1Nayj5apw1U4eJ1JMMRfVJRoCoWnG8Hw6we4XAgfrT0cV4SK36XEO_1ss_N9VUUq2tP2BuhVY_5zeP7kTXivC_1yTivLoAzsBRCh9n5T9qu1eLyDPeK0FqBUliu-95LcSxQqqEcwf8QT0GqP8wlaqNWxZM5wbZDQFKHyGmFF8mkTGocRXSs7hFWAGYSFxHJ7jv0zONwsOr-3Ahij4"
        image-alt="Minimalist ceramic art pieces arranged on a smooth beige surface"
        :tags="['Branding']"
        title="Ceramica Studio"
        description="Brand design for a handmade ceramic studio, balancing tranquil warmth with refined, editorial composition."
        aspect="4/5"
      />

      <ProjectCard
        class="md:col-span-6 mt-16 md:mt-0"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuA3AN3WCrg-2rfcFZWZkpthIVMlMwz3C-UFr99rCBptmGT0UD-1BarH4E6eSULNwDDF9-lo4eU2kSeleNPT83fV0o5VCn3Q7A6gsyIO8PDLx72pvkHJqO5gEsSfYmJcQdUAeWaSIjQIGG5MJkLUR59peKGkTPRUkDmSkcgwktQ5jEtvpO0PCorzyla5jEvmjk66FgLemZ1tHqsvox138-eLNL_k60Rxvfi3cmykUCtuAuOJUuyVXhXRca6Oa9JpVdTbezFJsrRN1oPO"
        image-alt="Editorial style magazine mockup with elegant typography"
        :tags="['Editorial', 'Typography']"
        title="KINFOLK Inspired Layouts"
        description="A study in layout proportion, rhythm, and typographic balance for calm, premium editorial systems."
        aspect="4/3"
      />

      <ProjectCard
        class="md:col-span-6 mt-16 md:mt-32"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAA-gcVqghIsdzxFhT-s72d1ry6kClc0GXOP1hsPCRli4iRoXxKRKGGSwcsf3HJCLJO7XaBHF6ZccCvPGxoRVXxjkMYQE7oP1zPlAegbARR-A2XnQ1R1WDp1JnheSue4X85NmUx1YVNua6w5im5P2rCEmgGfqNMSz6qHGyOWUvvf7LgB4H5Dg7q9l6Z8DTZeRGZVMJQ1t7JottNGJW6m_RMFjavIMIV0GCI7XDJ1qadymgc4bM6v86RXAaTCQJ_waKsdVf9w8r3nTr"
        image-alt="Sleek digital device showing a modern mobile app interface"
        :tags="['App Design', 'Product']"
        title="Lumière Concierge App"
        description="A premium concierge app experience with simplified flows, soft micro-interactions, and calm visual hierarchy."
        aspect="4/3"
      />
    </section>
  </main>
 </template>

