<template>
  <main class="home-page">
    <section
      class="hero-section pt-section-gap pb-25 px-margin-mobile md:px-margin-desktop max-w-page mx-auto flex flex-col justify-center min-h-screen"
    >
      <div class="max-w-5xl">
        <span
          class="font-mono text-sm uppercase tracking-[0.32em] text-tertiary mb-6 block opacity-80"
        >
          Frontend Developer & UI/UX Designer
        </span>
        <h1
          class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8 leading-[1.05]"
        >
          Engineering Elegance through<br />
          <span class="text-tertiary">Code and Design.</span>
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
          I am a UX Developer bridging the gap between aesthetics and engineering. I specialize in
          building performant, accessible, and beautiful interfaces using React, Tailwind CSS, and
          Framer Motion, ensuring intentionality in every interaction and fluid code-driven
          transitions.
        </p>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
          <a
            class="inline-flex items-center gap-2 font-body-md text-body-md text-on-primary bg-primary px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm hover:shadow-md"
            href="#work"
          >
            Explore Work
            <span class="material-symbols-outlined" aria-hidden="true">arrow_downward</span>
          </a>
          <div
            class="hidden md:block p-4 bg-surface-container-high rounded-xl font-mono text-xs text-on-surface-variant border border-outline-variant/30 shadow-sm w-full max-w-sm"
          >
            <span class="text-tertiary">const</span>
            <span class="text-on-surface"> developer</span> = {
            <br />
            &nbsp;&nbsp;role: <span class="text-[#a65f54]">'UX Engineer'</span>,
            <br />
            &nbsp;&nbsp;focus: [<span class="text-[#a65f54]">'Architecture'</span>,
            <span class="text-[#a65f54]">'Interactions'</span>],
            <br />
            };
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-margin-mobile md:px-margin-desktop max-w-page mx-auto">
      <div class="mb-8">
        <h2 class="font-headline-md text-[24px] text-on-surface mb-8">Technical Excellence</h2>
      </div>
      <div class="flex flex-wrap gap-4 font-mono text-sm">
        <span
          class="px-5 py-2.5 bg-surface-container-high text-on-surface-variant rounded-md border border-outline-variant/20 hover:border-tertiary/50 transition-colors duration-300"
          >React & Next.js</span
        >
        <span
          class="px-5 py-2.5 bg-surface-container-high text-on-surface-variant rounded-md border border-outline-variant/20 hover:border-tertiary/50 transition-colors duration-300"
          >TypeScript</span
        >
        <span
          class="px-5 py-2.5 bg-surface-container-high text-on-surface-variant rounded-md border border-outline-variant/20 hover:border-tertiary/50 transition-colors duration-300"
          >Tailwind CSS</span
        >
        <span
          class="px-5 py-2.5 bg-surface-container-high text-on-surface-variant rounded-md border border-outline-variant/20 hover:border-tertiary/50 transition-colors duration-300"
          >Framer Motion</span
        >
        <span
          class="px-5 py-2.5 bg-surface-container-high text-on-surface-variant rounded-md border border-outline-variant/20 hover:border-tertiary/50 transition-colors duration-300"
          >GSAP & WebGL</span
        >
      </div>
    </section>

    <section
      class="py-16 px-margin-mobile md:px-margin-desktop max-w-page mx-auto bg-surface-container-lowest"
      id="work"
    >
      <div class="mb-16">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Featured Work</h2>
        <div class="w-12 h-px bg-outline-variant"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <a class="group block cursor-pointer" href="#">
          <div class="project-media mb-6">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNm44C3KvB-FtBmzJd9qObz4yynoC6MA4Pe662Kvk_zdqhMnRCRHbTxcZUxdBZqqtPVDF26h0p1N4oa46MKRVjR3XdbapR1c6BGOs3JFp_TPbfzVwDRaum57mbZCQCBYuM9CmSnRRodtiECY67bm8u8jOmBTZnY0c0k_oIoI8K2mB1mfkC0BFik3lKxcK1HqBV0tIl30nhuuV-Dkxq7yQVJFXPtYZXGzIsRjb4uM0flRqvwdwcCAlviQU7uPzH9nbwbZxqFaRjn7dp"
              alt="Project A Thumbnail"
            />
            <div class="project-overlay"></div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex flex-wrap gap-2 mb-1">
              <span
                class="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full"
                >UI/UX Experience</span
              >
              <span
                class="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full"
                >Next.js</span
              >
              <span
                class="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full"
                >Tailwind</span
              >
            </div>
            <h3
              class="font-headline-md text-on-surface group-hover:text-tertiary transition-colors duration-300"
            >
              Space of Flow - Digital Art Platform
            </h3>
          </div>
        </a>
        <a class="group block cursor-pointer md:mt-24" href="#">
          <div class="project-media mb-6">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-vuinho2k96plj05WPlXxDYt2_skiJ4aYKHmCdz2qGFWH7drFAmzL04BAI02D98BPLKXiE9Zrpt2t74nJIDZ0gyDIM7h50H9EVauTzAtkkYe--nZObDmeU_9pba5fKgNBY1Y663tmZ3ilaYa3ZbKj4hXnvoblc2CeDElibnJjBNHEc1uhOJBBguVPNMgomlBWafTd87BJV2ypIGx1BOPkno3C-TVJ3dICQoO2mJmUtmIDOIrRy3-6zcdXarvYCoJKbmso-Pr_iQI"
              alt="Project B Thumbnail"
            />
            <div class="project-overlay"></div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex flex-wrap gap-2 mb-1">
              <span
                class="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full"
                >Creative Dev</span
              >
              <span
                class="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full"
                >Three.js</span
              >
              <span
                class="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full"
                >GSAP</span
              >
            </div>
            <h3
              class="font-headline-md text-on-surface group-hover:text-tertiary transition-colors duration-300"
            >
              Quiet Essence - Conceptual Lifestyle
            </h3>
          </div>
        </a>
      </div>
    </section>

    <section
      class="py-section-gap px-margin-mobile md:px-margin-desktop max-w-page mx-auto text-center"
    >
      <h2
        class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8"
      >
        Ready to start your next project?
      </h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant mb-12">
        Let's explore how to translate your vision into an exceptional digital experience.
      </p>
      <a
        class="inline-block font-body-md text-body-md text-on-surface border-b border-on-surface pb-1 hover:text-tertiary hover:border-tertiary transition-colors duration-300 uppercase tracking-[0.24em] text-sm"
        href="mailto:hello@example.com"
      >
        Send Email
      </a>
    </section>

    <footer
      class="w-full bg-surface-container-low dark:bg-surface-container-high mt-section-gap transition-all duration-300"
    >
      <div
        class="w-full px-margin-mobile md:px-margin-desktop py-20 flex flex-col md:flex-row justify-between items-start gap-gutter max-w-page mx-auto"
      >
        <div class="flex flex-col gap-6">
          <div class="font-display-lg text-display-lg text-on-surface">DESIGNER PORTFOLIO</div>
          <p class="font-body-md text-body-md text-on-surface-variant">
            © 2024 Designer Portfolio. Built with intentionality.
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <p class="font-label-caps text-label-caps text-on-surface-variant mb-2">CONNECT</p>
          <nav class="flex flex-col gap-3">
            <a
              class="font-body-md text-body-md text-on-surface-variant hover:text-tertiary underline underline-offset-4 transition-all"
              href="#"
              >LinkedIn</a
            >
            <a
              class="font-body-md text-body-md text-on-surface-variant hover:text-tertiary underline underline-offset-4 transition-all"
              href="#"
              >Github</a
            >
            <a
              class="font-body-md text-body-md text-on-surface-variant hover:text-tertiary underline underline-offset-4 transition-all"
              href="#"
              >CodePen</a
            >
          </nav>
        </div>
      </div>
    </footer>
  </main>
</template>

<style scoped lang="scss">
.project-media {
  position: relative;
  width: 100%;
  padding-top: 75%;
  overflow: hidden;
}

.project-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease-out;
}

.group:hover .project-media img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(252, 249, 244, 0);
  transition: background 0.5s ease;
}

.group:hover .project-overlay {
  background: rgba(252, 249, 244, 0.1);
}

@media (max-width: 768px) {
  .hero-section {
    min-height: calc(100vh - 5.5rem);
  }
}
</style>
