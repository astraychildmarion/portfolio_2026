<template>
  <main
    class="about-page px-margin-mobile md:px-margin-desktop pt-28 pb-20 md:pb-24 lg:pb-28 max-w-page mx-auto w-full"
  >
    <h1 class="sr-only">About</h1>
    <section
      class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-gutter items-center py-6 md:py-10"
    >
      <div class="md:col-span-5 md:col-start-2 max-w-xl">
        <div class="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
          <p>
            My experience spans the product development process, from understanding user needs and
            defining requirements to designing interfaces, improving workflows, and delivering
            functional products.
          </p>
          <p>
            I’m currently pursuing an MSc in Human-Computer Interaction at University College
            Dublin, focusing on user research, interaction design, and usability evaluation.
          </p>
        </div>
      </div>
      <div class="md:col-span-5 md:col-start-7 order-first md:order-last">
        <div
          class="w-full max-w-md md:w-89.75 md:h-108 mx-auto rounded-xl overflow-hidden shadow-sm"
        >
          <img
            class="w-full h-auto md:h-full md:object-cover md:object-top"
            src="/portfolio_person.jpeg"
            alt="Portrait of Marion Ma"
          />
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter py-8 md:py-10 lg:py-12">
      <div class="md:col-span-10 md:col-start-2">
        <div
          class="max-w-4xl divide-y divide-outline-variant/40 border-y border-outline-variant/40"
        >
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-8">
            <h2 class="md:col-span-4 font-headline-md text-headline-md text-on-surface">
              Intent over Decoration
            </h2>
            <p class="md:col-span-8 font-body-lg text-body-lg text-on-surface-variant">
              Every element earns its place. If it doesn't serve the user, it doesn't belong on the
              screen.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-8">
            <h2 class="md:col-span-4 font-headline-md text-headline-md text-on-surface">
              Design must ship
            </h2>
            <p class="md:col-span-8 font-body-lg text-body-lg text-on-surface-variant">
              Beautiful ideas that can't be built are just ideas. I design with implementation in
              mind — always.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-8">
            <h2 class="md:col-span-4 font-headline-md text-headline-md text-on-surface">
              Legibility before aesthetics
            </h2>
            <p class="md:col-span-8 font-body-lg text-body-lg text-on-surface-variant">
              I ask "will the user understand this?" before I ask "does this look good?"
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.about-page {
  min-height: 100%;
}

.about-page img {
  display: block;
}
</style>
