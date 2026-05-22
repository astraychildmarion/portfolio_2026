<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <main class="project-page px-margin-mobile md:px-margin-desktop py-28 max-w-page mx-auto w-full">
    <section class="mb-section-gap max-w-3xl">
      <p class="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary mb-4">
        Case Study B
      </p>
      <h1
        class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6"
      >
        Quiet Luxury Commerce: Elegant Product Journeys
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        A deeply considered commerce experience designed to feel calm, elevated, and completely
        focused on product storytelling.
      </p>
    </section>

    <section class="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Overview</h2>
      </div>
      <div class="md:col-span-9">
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          This case study focuses on elevating online commerce for a premium lifestyle brand through
          refined interaction design.
        </p>
      </div>
    </section>

    <section class="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Challenge</h2>
      </div>
      <div class="md:col-span-9 space-y-8">
        <p class="font-body-md text-body-md text-on-surface-variant">
          The previous commerce flow felt cluttered and transactional. Our challenge was to make it
          feel more editorial, with fewer distractions and more visual calm.
        </p>
        <div class="aspect-video w-full rounded-lg overflow-hidden bg-surface-container-high">
          <img
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACyvUk8iKWnKyjSp6_I-vD59a8msoUhwdmmktwNfhhPyTjC3ch8xMfX0LI6Uo1Nayj5apw1U4eJ1JMMRfVJRoCoWnG8Hw6we4XAgfrT0cV4SK36XEO_1ss_N9VUUq2tP2BuhVY_5zeP7kTXivC_1yTivLoAzsBRCh9n5T9qu1eLyDPeK0FqBUliu-95LcSxQqqEcwf8QT0GqP8wlaqNWxZM5wbZDQFKHyGmFF8mkTGocRXSs7hFWAGYSFxHJ7jv0zONwsOr-3Ahij4"
            alt="Minimalist ceramic art pieces arranged on a smooth beige surface"
          />
        </div>
      </div>
    </section>

    <section class="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Approach</h2>
      </div>
      <div class="md:col-span-9 space-y-8">
        <p class="font-body-md text-body-md text-on-surface-variant">
          We introduced an editorial product presentation, soft motion accents, and a simpler
          checkout path to preserve the brand's premium feel.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <span class="material-symbols-outlined text-primary text-3xl mb-4 block"
              >visibility</span
            >
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Product Display
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Refined product cards with restrained typography and generous spacing to improve
              browsing focus.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <span class="material-symbols-outlined text-primary text-3xl mb-4 block"
              >shopping_bag</span
            >
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Checkout Simplification
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Streamlined the purchase flow into fewer steps with clearer progress cues.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Design</h2>
      </div>
      <div class="md:col-span-9 space-y-10">
        <p class="font-body-md text-body-md text-on-surface-variant">
          The final design pairs neutral textures with elegant, large-scale imagery and subtle
          accents to enhance product storytelling.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="aspect-[21/9] rounded-xl overflow-hidden shadow-sm">
            <img
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3AN3WCrg-2rfcFZWZkpthIVMlMwz3C-UFr99rCBptmGT0UD-1BarH4E6eSULNwDDF9-lo4eU2kSeleNPT83fV0o5VCn3Q7A6gsyIO8PDLx72pvkHJqO5gEsSfYmJcQdUAeWaSIjQIGG5MJkLUR59peKGkTPRUkDmSkcgwktQ5jEtvpO0PCorzyla5jEvmjk66FgLemZ1tHqsvox138-eLNL_k60Rxvfi3cmykUCtuAuOJUuyVXhXRca6Oa9JpVdTbezFJsrRN1oPO"
              alt="Editorial style magazine mockup with elegant typography"
            />
          </div>
          <div
            class="aspect-square rounded-xl overflow-hidden shadow-sm bg-surface-container-low flex items-center justify-center p-8"
          >
            <div class="text-center">
              <span class="material-symbols-outlined text-tertiary text-4xl mb-4">devices</span>
              <h4 class="font-body-lg text-body-lg text-on-surface mb-2">Responsive Design</h4>
              <p class="font-body-md text-body-md text-on-surface-variant text-sm">
                Designed for elegant product browsing on both mobile and desktop.
              </p>
            </div>
          </div>
          <div class="aspect-square rounded-xl overflow-hidden shadow-sm">
            <img
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA-gcVqghIsdzxFhT-s72d1ry6kClc0GXOP1hsPCRli4iRoXxKRKGGSwcsf3HJCLJO7XaBHF6nZccCvPGxoRVXxjkMYQE7oP1zPlAegbARR-A2XnQ1R1WDp1JnheSue4X85NmUx1YVNua6w5im5P2rCEmgGfqNMSz6qHGyOWUvvf7LgB4H5Dg7q9l6Z8DTZeRGZVMJQ1t7JottNGJW6m_RMFjavIMIV0GCI7XDJ1qadymgc4bM6v86RXAaTCQJ_waKsdVf9w8r3nTr"
              alt="A sleek digital device showing a modern mobile app interface"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Impact</h2>
      </div>
      <div class="md:col-span-9">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="border-l-2 border-tertiary pl-6">
            <span class="font-display-lg text-display-lg text-on-surface block mb-2">+32%</span>
            <p class="font-body-md text-body-md text-on-surface-variant">Engagement increase</p>
          </div>
          <div class="border-l-2 border-tertiary pl-6">
            <span class="font-display-lg text-display-lg text-on-surface block mb-2">+27%</span>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Add-to-cart rate improvement
            </p>
          </div>
          <div class="border-l-2 border-tertiary pl-6">
            <span class="font-display-lg text-display-lg text-on-surface block mb-2">4.8</span>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Average satisfaction score
            </p>
          </div>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant">
          The new experience created stronger product storytelling while preserving the premium,
          quiet luxury mood the brand desired.
        </p>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Reflection</h2>
      </div>
      <div class="md:col-span-9">
        <p class="font-body-md text-body-md text-on-surface-variant">
          Crafting premium commerce experiences requires restraint and strong storytelling. This
          project reaffirmed the power of visual calm and pared-back interaction design in building
          trust.
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
            to="/work/project-1"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBoW5GSE6hxBBJmhQRhK9N4UshMIpQ4gJSK_jr7A-HaoJVuUUlRd2-FeqFejJ4aANYuE-muMuVpvWkhQiIP9A7optIT4eChTFo0oy--KEJ0F5mBFmlCu4aW5mX7Qj4yzidGDkk3-0ENxOxZu99HySLjvYRrDOrz-wPLJOValwI-aGyxHgnwGLo1r_nqEC8heHHgfTEZWPQOuKtu0x4VXCtlMTelMFKFmgaRNiARYllOl0JknYo7FtE6PAlHjEhrwHvqc7emMw0BRtaW"
            image-alt="Contemporary architecture interior with natural lighting and minimal furniture"
            :tags="['UI/UX', 'Web Design']"
            title="Aura Botanical Skincare"
            description="A premium skincare experience reimagined with soft tonal layers, generous white space, and intuitive storytelling."
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
