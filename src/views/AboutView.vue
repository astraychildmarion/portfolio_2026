<template>
  <main
    class="about-page px-margin-mobile md:px-margin-desktop pt-28 pb-20 md:pb-24 lg:pb-28 max-w-page mx-auto w-full"
  >
    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[620px]">
      <div class="md:col-span-6 md:col-start-2">
        <p class="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary mb-4">
          THE ENGINEER WHO DESIGNS
        </p>
        <h1
          class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8"
        >
          Bridging the gap between what's designed and what gets built.
        </h1>
        <div class="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
          <p>
            I'm Marion, a frontend engineer with 6 years of experience across Angular, Vue, and
            React. I've spent my career sitting between design and engineering teams — translating
            intention into implementation, and pushing back when something beautiful simply won't
            work.
          </p>
          <p>
            Now pursuing a Master's in HCI at University College Dublin, I'm deepening my
            understanding of why people struggle with interfaces — and how to fix it before a single
            line of code is written.
          </p>
        </div>
      </div>
      <div class="md:col-span-4 md:col-start-9 order-first md:order-last">
        <div
          class="aspect-[3/4] w-full rounded-xl overflow-hidden bg-surface-container-high shadow-sm"
        >
          <img
            class="w-full h-full object-cover opacity-95 hover:opacity-100 transition duration-700 ease-out"
            src="/portfolio_person.jpeg"
            alt="Portrait of Marion Ma"
          />
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter py-16 md:py-20 lg:py-24">
      <div class="md:col-span-10 md:col-start-2">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            title="Intent over Decoration"
            description="Every element earns its place. If it doesn't serve the user, it doesn't belong on the screen."
          />
          <InfoCard
            title="Design must ship"
            description="Beautiful ideas that can't be built are just ideas. I design with implementation in mind — always."
          />
          <InfoCard
            title="Users first, always"
            description='I ask "will the user understand this?" before I ask "does this look good?"'
          />
          <InfoCard
            title="I treat AI as a collaborator, not a shortcut"
            description="Using it to handle repetitive decisions so I can focus on the ones that actually require human judgment"
          />
        </div>
      </div>
    </section>

    <!-- <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter py-16">
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
    </section> -->
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
