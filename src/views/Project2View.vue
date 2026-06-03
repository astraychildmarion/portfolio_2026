<template>
  <main
    class="project-page px-margin-mobile md:px-margin-desktop pt-28 pb-20 md:pb-24 lg:pb-28 max-w-page mx-auto w-full"
  >
    <section class="mb-16 md:mb-20 lg:mb-24 max-w-3xl">
      <p class="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary mb-4">
        Case Study
      </p>
      <h1
        class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6"
      >
        Central Dashboard for an Internal Validation Platform
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Redesigned the entry experience of an internal image validation platform to make tools,
        recent work, and key workflows easier to discover.
      </p>
    </section>

    <section class="mb-16 md:mb-20 lg:mb-24 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Overview</h2>
      </div>
      <div class="md:col-span-9 space-y-6">
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          The original product did not provide a homepage. Users always landed on a pipeline
          dashboard, while other tools were hidden behind a secondary navigation menu. This made
          tool discovery difficult and increased navigation effort.
        </p>
        <p class="font-body-md text-body-md text-on-surface-variant">
          My goal was to create a central dashboard that surfaces key tools and recent work.
        </p>
      </div>
    </section>

    <section class="mb-16 md:mb-20 lg:mb-24 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Problem</h2>
      </div>
      <div class="md:col-span-9 space-y-8">
        <div class="aspect-video w-full rounded-lg overflow-hidden bg-surface-container-high">
          <img
            class="w-full h-full object-contain"
            src="/i_product/i_before_homepage.png"
            alt="Central dashboard interface for an internal validation platform"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              No central entry point
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Users landed directly on the Pipeline page.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Poor discoverability
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Other tools were hidden in a side menu.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Workflow fragmentation
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Users frequently switched between multiple tools but had no unified overview.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Navigation overhead
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Accessing a tool required multiple clicks.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-16 md:mb-20 lg:mb-24 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Process</h2>
      </div>
      <div class="md:col-span-9 space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Analyze navigation flow
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Mapped how users moved between Pipeline, Viewer, Dataset Manager, and Reporting tools.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Identify common tasks
            </h3>
            <ul class="font-body-md text-body-md text-on-surface-variant space-y-2">
              <li>Open a tool</li>
              <li>Review recent simulations</li>
              <li>Revisit existing pipelines</li>
              <li>Access collections</li>
            </ul>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Define homepage objectives
            </h3>
            <ul class="font-body-md text-body-md text-on-surface-variant space-y-2">
              <li>Surface all available tools</li>
              <li>Highlight recent work</li>
              <li>Reduce navigation effort</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-16 md:mb-20 lg:mb-24 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Solution</h2>
      </div>
      <div class="md:col-span-9 space-y-10">
        <p class="font-body-md text-body-md text-on-surface-variant">
          I designed a dedicated homepage that gives users a clear starting point and brings the
          platform's most important destinations into view.
        </p>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <figure
            class="flex items-center justify-center rounded-xl overflow-hidden bg-surface-container-high shadow-sm"
          >
            <img
              class="w-full max-h-[420px] 2xl:max-h-[480px] object-contain"
              src="/i_product/i_after_homepage.png"
              alt="Internal validation platform homepage showing tool launcher cards, recent simulations, collections, and recent pipelines"
            />
          </figure>
          <figure
            class="flex items-center justify-center rounded-xl overflow-hidden bg-surface-container-high shadow-sm"
          >
            <img
              class="w-full max-h-[420px] 2xl:max-h-[480px] object-contain"
              src="/i_product/i_after_homepage_closePanel.png"
              alt="Internal validation platform homepage with the sidebar collapsed to give more space to dashboard content"
            />
          </figure>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-4">
              Tool Launcher
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tool in tools"
                :key="tool"
                class="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps rounded-full"
              >
                {{ tool }}
              </span>
            </div>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Recent Simulations
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Surface recently executed simulations so users can pick up where they left off.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Collections
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Provide shortcuts to frequently used collections.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Recent Pipelines
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Allow users to continue previous work quickly.
            </p>
          </div>
          <div
            class="md:col-span-2 p-8 bg-surface-container-low rounded-xl border border-outline-variant/30"
          >
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Persistent Sidebar
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Created a consistent navigation structure across the platform.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-16 md:mb-20 lg:mb-24 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Result</h2>
      </div>
      <div class="md:col-span-9">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Improved discoverability
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              All tools became visible immediately after login.
            </p>
          </div>
          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Reduced navigation steps
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Users no longer needed to navigate through a tool dashboard first.
            </p>
          </div>
          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Better task continuity
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Recent work became accessible from a single location.
            </p>
          </div>
          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Established information hierarchy
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Created a clear platform entry point.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Reflection</h2>
      </div>
      <div class="md:col-span-9 space-y-6">
        <p class="font-body-md text-body-md text-on-surface-variant">
          This project taught me that navigation problems are often information architecture
          problems rather than visual design problems.
        </p>
        <p class="font-body-md text-body-md text-on-surface-variant">
          The most valuable change was not introducing new functionality, but creating a clear
          starting point that helps users understand the platform.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const tools = [
  'Simulation Studio',
  'Vision Pipeline',
  'Noise Analysis',
  'Sharpness Evaluation',
  'Color Validation',
  'Image Viewer',
  'Dataset Manager',
  'Report Center',
]
</script>
