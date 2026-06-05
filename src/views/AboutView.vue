<template>
  <main
    class="about-page px-margin-mobile md:px-margin-desktop pt-28 pb-20 md:pb-24 lg:pb-28 max-w-page mx-auto w-full"
  >
    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[620px]">
      <div class="md:col-span-6 md:col-start-2">
        <p class="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary mb-4">
          Marion Ma
        </p>
        <h1
          class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8"
        >
          I'm Marion. I build interfaces, and I design them too.
        </h1>
        <div class="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
          <p>
            Frontend engineer with 7 years across Angular, Vue, and React. I've spent most of that
            time working close enough to designers to understand what they're trying to do, and close
            enough to the codebase to know what will actually ship.
          </p>
          <p>
            Now at University College Dublin studying HCI, learning to ask better questions before
            the design starts.
          </p>
        </div>
      </div>
      <div class="md:col-span-4 md:col-start-9 order-first md:order-last">
        <div class="w-full max-w-sm md:max-w-none mx-auto rounded-xl overflow-hidden shadow-sm">
          <img
            class="w-full h-auto"
            src="/portfolio_person.jpeg"
            alt="Portrait of Marion Ma"
          />
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter py-16 md:py-20 lg:py-24">
      <div class="md:col-span-10 md:col-start-2">
        <div class="max-w-4xl divide-y divide-outline-variant/40 border-y border-outline-variant/40">
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
