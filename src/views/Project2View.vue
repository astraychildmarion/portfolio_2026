<template>
  <main
    class="project-page px-margin-mobile md:px-margin-desktop pt-28 pb-20 md:pb-24 lg:pb-28 max-w-page mx-auto w-full"
  >
    <!-- Hero -->
    <section class="mb-20 md:mb-28 lg:mb-32 max-w-4xl">
      <p class="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary mb-4">
        Case Study
      </p>

      <h1
        class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6"
      >
        Designing a Homepage for an Internal SaaS Platform
      </h1>

      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
        The platform had no homepage. Users landed on a pipeline list with no overview of what else
        the product could do. I designed a central dashboard that surfaced tools, recent work, and
        collections in one place.
      </p>
    </section>

    <!-- Overview -->
    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Overview</h2>
      </div>

      <div class="md:col-span-9 space-y-6 max-w-3xl">
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          The original product did not provide a true homepage. Users landed directly on a pipeline
          dashboard, while other important tools were placed inside a secondary navigation menu.
        </p>

        <p class="font-body-md text-body-md text-on-surface-variant">
          The missing homepage wasn't just a navigation gap. It meant users never had a complete
          picture of the platform.
        </p>
      </div>
    </section>

    <!-- Problem -->
    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Problem</h2>
      </div>

      <div class="md:col-span-9 space-y-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <figure class="rounded-xl overflow-hidden bg-surface-container-high shadow-sm">
            <img
              class="w-full object-contain"
              src="/i_product/i_before_homepage.png"
              alt="Before state showing a pipeline-centered dashboard with tools hidden in a side menu"
            />
          </figure>

          <div class="space-y-6">
            <p class="font-body-lg text-body-lg text-on-surface-variant">
              The homepage functioned more like a pipeline repository than a platform entry point.
              Users could see saved pipelines, but they could not quickly understand what actions
              were available across the product.
            </p>

            <p class="font-body-md text-body-md text-on-surface-variant">
              Frequently used tools were visually deprioritized, recent work was not surfaced, and
              the interface gave users little support for task continuity.
            </p>
          </div>

          <div class="lg:col-span-2 grid grid-cols-1 gap-8 pt-2">
            <div>
              <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
                Tools were hidden behind navigation
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant">
                Users had to open a secondary menu before discovering available tools.
              </p>
            </div>

            <div>
              <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
                The page was organized around stored objects
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant">
                Pipeline cards dominated the page, even though users often came in to start a task.
              </p>
            </div>

            <div>
              <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
                Recent work had no clear home
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant">
                Users had to remember where they left off instead of being guided back into their
                workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution -->
    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Solution</h2>
      </div>

      <div class="md:col-span-9 space-y-10">
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
          I introduced a dedicated central dashboard that surfaces the platform’s major
          destinations: tools, recent simulations, collections, and pipelines.
        </p>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <figure class="space-y-4">
            <p class="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary">
              Before
            </p>
            <div class="rounded-xl overflow-hidden bg-surface-container-high shadow-sm">
              <img
                class="w-full object-contain"
                src="/i_product/i_before_homepage.png"
                alt="Before state showing a pipeline-centered dashboard"
              />
            </div>
          </figure>

          <figure class="space-y-4">
            <p class="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary">
              After
            </p>
            <div class="rounded-xl overflow-hidden bg-surface-container-high shadow-sm">
              <img
                class="w-full object-contain"
                src="/i_product/i_after_homepage.png"
                alt="After state showing a central dashboard with tools, recent simulations, collections, and pipelines"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>

    <!-- Design Decisions -->
    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Design Decisions</h2>
      </div>

      <div class="md:col-span-9 space-y-10 max-w-3xl">
        <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
          <p class="font-label-caps text-label-caps text-secondary pt-1">01</p>
          <div>
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Reframed the homepage as a task launcher
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              I placed all major tools at the top so users could immediately understand what they
              could do inside the platform.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
          <p class="font-label-caps text-label-caps text-secondary pt-1">02</p>
          <div>
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Separated navigation from workspace content
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              I moved product navigation into a persistent sidebar, allowing the main content area
              to focus on dashboard information.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
          <p class="font-label-caps text-label-caps text-secondary pt-1">03</p>
          <div>
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Created a clear information hierarchy
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Tools, recent simulations, collections, and pipelines were ordered by how users
              typically re-enter their work.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
          <p class="font-label-caps text-label-caps text-secondary pt-1">04</p>
          <div>
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Preserved access to pipelines without letting them dominate the page
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Pipelines remained accessible, but they became part of a broader workspace instead of
              defining the entire homepage.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Result -->
    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Result</h2>
      </div>

      <div class="md:col-span-9 space-y-8 max-w-3xl">
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          The redesign transformed the entry page from a single-purpose pipeline list into a central
          workspace that supports discovery, navigation, and task continuity.
        </p>

        <div class="space-y-6">
          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Improved discoverability
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              All major tools became visible immediately from the homepage.
            </p>
          </div>

          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Reduced navigation overhead
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Users no longer needed to search through a secondary menu before starting work.
            </p>
          </div>

          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Strengthened task continuity
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Recent simulations and collections gave users a faster way to resume previous work.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reflection -->
    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Reflection</h2>
      </div>

      <div class="md:col-span-9 space-y-6 max-w-3xl">
        <p class="font-body-md text-body-md text-on-surface-variant">
          This project taught me that navigation problems are often information architecture
          problems. The main issue was not that users needed more features, but that the platform
          did not clearly explain where work should begin.
        </p>

        <p class="font-body-md text-body-md text-on-surface-variant">
          The deeper issue was that the platform had grown tool by tool, and no one had designed the
          whole. A homepage forced that question.
        </p>
      </div>
    </section>

    <section class="border-t border-outline-variant/40 pt-10">
      <router-link
        class="group flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-on-surface"
        to="/work/project-1"
      >
        <div>
          <p
            class="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary mb-4"
          >
            Next case study
          </p>
          <h2
            class="font-headline-md text-headline-md group-hover:text-tertiary transition-colors duration-300"
          >
            Dataset Comparison Tool Redesign
          </h2>
        </div>
        <span
          class="material-symbols-outlined text-[28px] text-tertiary transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
          >arrow_forward</span
        >
      </router-link>
    </section>
  </main>
</template>
