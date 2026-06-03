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
        Comparison Matrix Editor
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Refactored a comparison editor used for managing image validation datasets.
      </p>
    </section>

    <section class="mb-16 md:mb-20 lg:mb-24 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Overview</h2>
      </div>
      <div class="md:col-span-9 space-y-6">
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          The existing editor did not use a table structure despite displaying highly structured
          data. Variants, comparisons, and file paths were visually disconnected, making large
          datasets difficult to scan.
        </p>
        <p class="font-body-md text-body-md text-on-surface-variant">
          The goal was to redesign the editor around the underlying comparison model so users could
          understand relationships at a glance.
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
            src="/c_product/c_setEditor_before.jpg"
            alt="Comparison matrix editor for image validation datasets"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              No matrix structure
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Rows and columns did not align.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Data relationships were unclear
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Users could not easily understand which files belonged to which variant.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Poor scanability
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Visual alignment was inconsistent.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Actions felt disconnected
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Variant actions and comparison actions were separated from their associated data.
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
              Audit current layout
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Reviewed how variants and comparisons were represented in the existing editor.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Map the data model
            </h3>
            <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-3 font-body-md text-body-md">
              <span class="text-on-surface">Variants</span>
              <span class="text-tertiary">→</span>
              <span class="text-on-surface-variant">Columns</span>
              <span class="text-on-surface">Comparisons</span>
              <span class="text-tertiary">→</span>
              <span class="text-on-surface-variant">Rows</span>
              <span class="text-on-surface">Files</span>
              <span class="text-tertiary">→</span>
              <span class="text-on-surface-variant">Cells</span>
            </div>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Evaluate scanning behavior
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Observed that users needed to compare information horizontally across multiple
              variants.
            </p>
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
          I redesigned the editor as a matrix-based layout, aligning the interface with how the data
          was already structured conceptually.
        </p>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <figure
            class="flex items-center justify-center rounded-xl overflow-hidden bg-surface-container-high shadow-sm"
          >
            <img
              class="w-full max-h-[420px] 2xl:max-h-[480px] object-contain"
              src="/c_product/c_setEditor_after_empty.jpg"
              alt="Empty comparison matrix editor showing aligned variant columns and comparison rows before files are added"
            />
          </figure>
          <figure
            class="flex items-center justify-center rounded-xl overflow-hidden bg-surface-container-high shadow-sm"
          >
            <img
              class="w-full max-h-[420px] 2xl:max-h-[480px] object-contain"
              src="/c_product/c_setEditor_after.jpg"
              alt="Populated comparison matrix editor showing file paths organized into aligned cells across variants and comparisons"
            />
          </figure>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Variant Headers
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant mb-4">
              Each variant became a column header.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="action in variantActions"
                :key="action"
                class="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps rounded-full"
              >
                {{ action }}
              </span>
            </div>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Comparison Rows
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant mb-4">
              Each comparison became a row.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="action in comparisonActions"
                :key="action"
                class="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps rounded-full"
              >
                {{ action }}
              </span>
            </div>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">File Cells</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Each cell displays a file path, with filename visibility prioritized due to limited
              width.
            </p>
          </div>
          <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Consistent Grid Alignment
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Rows and columns align visually and structurally.
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
              Improved readability
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Relationships between variants and comparisons became immediately visible.
            </p>
          </div>
          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Faster comparison workflow
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Users can scan horizontally and vertically.
            </p>
          </div>
          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Better scalability
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Supports larger datasets without increasing cognitive load.
            </p>
          </div>
          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Stronger visual hierarchy
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Actions are grouped with the data they affect.
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
          This project reinforced the importance of designing around the underlying data model.
        </p>
        <p class="font-body-md text-body-md text-on-surface-variant">
          The biggest improvement was not visual polish, but aligning the interface with how users
          mentally organize comparison data.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const variantActions = ['Move Left', 'Move Right', 'Edit', 'Delete']
const comparisonActions = ['Move Up', 'Move Down', 'Edit', 'Delete']
</script>
