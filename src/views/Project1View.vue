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
        Dataset Comparison Tool Redesign
      </h1>

      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
        I redesigned a comparison editor whose visual treatment made everything look the same —
        inputs, labels, and actions were indistinguishable — into a matrix-based editor where
        structure does the explaining.
      </p>
    </section>

    <!-- Overview -->
    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Overview</h2>
      </div>

      <div class="md:col-span-9 space-y-6 max-w-3xl">
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          The editor was used to manage image validation datasets. Users needed to define
          comparisons, create variants, and connect each comparison-variant pair to the correct
          image file.
        </p>

        <p class="font-body-md text-body-md text-on-surface-variant">
          Although the underlying data was highly structured, the original interface did not make
          that structure visible. Users had to mentally map comparisons, variants, and file paths
          instead of reading the relationship directly from the screen.
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
              src="/c_product/c_setEditor_before.jpg"
              alt="Before state of the comparison editor showing controls separated from the empty data area"
            />
          </figure>

          <div class="space-y-6">
            <p class="font-body-lg text-body-lg text-on-surface-variant">
              The original editor used rounded rectangles for nearly every element — inputs, labels,
              cells, and actions all shared the same visual treatment. Without hierarchy, nothing
              read as interactive or structural. Users had to interpret the interface rather than
              read it.
            </p>
          </div>

          <div class="lg:col-span-2 grid grid-cols-1 gap-8 pt-2">
            <div>
              <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
                Controls were detached from structure
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant">
                Users had to infer that variants became columns and comparisons became rows.
              </p>
            </div>

            <div>
              <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
                Empty state gave instruction, not orientation
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant">
                The message told users to add data, but it did not help them understand the matrix
                they were about to build.
              </p>
            </div>

            <div>
              <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
                Relationships were carried by memory
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant">
                Users needed to mentally connect variants, comparisons, and file paths instead of
                seeing the relationship spatially.
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
          I redesigned the editor around the actual data model — variants as columns, comparisons as
          rows, files as cells — so the interface became a visible map of the dataset. Since the
          tool already had active users, I kept the interaction patterns familiar enough that
          existing workflows wouldn't break.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <figure class="space-y-4">
            <p class="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary">
              Before · No Data
            </p>
            <div class="rounded-xl overflow-hidden bg-surface-container-high shadow-sm">
              <img
                class="w-full object-contain"
                src="/c_product/c_setEditor_before_empty.jpg"
                alt="Before state of the comparison editor with no dataset added"
              />
            </div>
          </figure>

          <figure class="space-y-4">
            <p class="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary">
              Before · With Data
            </p>
            <div class="rounded-xl overflow-hidden bg-surface-container-high shadow-sm">
              <img
                class="w-full object-contain"
                src="/c_product/c_setEditor_before_data.jpg"
                alt="Before state of the comparison editor with dataset rows displayed without a clear matrix structure"
              />
            </div>
          </figure>

          <figure class="space-y-4">
            <p class="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary">
              After · No Data
            </p>
            <div class="rounded-xl overflow-hidden bg-surface-container-high shadow-sm">
              <img
                class="w-full object-contain"
                src="/c_product/c_setEditor_after_empty.jpg"
                alt="After state of the comparison matrix editor with aligned variant columns and comparison rows before files are added"
              />
            </div>
          </figure>

          <figure class="space-y-4">
            <p class="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary">
              After · With Data
            </p>
            <div class="rounded-xl overflow-hidden bg-surface-container-high shadow-sm">
              <img
                class="w-full object-contain"
                src="/c_product/c_setEditor_after.jpg"
                alt="After state of the comparison matrix editor showing file paths organized into aligned cells across variants and comparisons"
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
              Turned variants into a visible horizontal axis
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Each variant became a column header, making it clear that users compare files across
              different variants.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
          <p class="font-label-caps text-label-caps text-secondary pt-1">02</p>
          <div>
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Turned comparisons into a vertical axis
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Each comparison became a row, with row-level actions grouped beside the data they
              affect.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
          <p class="font-label-caps text-label-caps text-secondary pt-1">03</p>
          <div>
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Moved add actions to where new objects appear
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Add variant was placed near the variant axis, while Add comparison was placed near the
              comparison axis, reducing the gap between action and result.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
          <p class="font-label-caps text-label-caps text-secondary pt-1">04</p>
          <div>
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Designed the table as a relationship map
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              File cells sit at the intersection of one comparison and one variant, so users can
              understand the dataset through position instead of memory.
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
          The redesign changed the editor from a control-first layout into a structure-first
          workspace. Users could understand the dataset by reading the page spatially.
        </p>

        <div class="space-y-6">
          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Clearer data relationships
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Variants, comparisons, and files became readable as a single matrix.
            </p>
          </div>

          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Lower cognitive load
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Users no longer needed to mentally reconstruct how rows, columns, and files related to
              each other.
            </p>
          </div>

          <div class="border-l-2 border-tertiary pl-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              More predictable editing
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Actions were placed next to the axis or data object they affected.
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
          This project reinforced that complex editors should be designed around their underlying
          data model. When the structure is visible, users can understand the interface faster and
          make fewer interpretation errors.
        </p>

        <p class="font-body-md text-body-md text-on-surface-variant">
          The most important shift was not visual — it was deciding that the interface should make
          the data model readable, not just accessible. That distinction guided every layout
          decision in this project.
        </p>
      </div>
    </section>

    <section class="border-t border-outline-variant/40 pt-10">
      <router-link
        class="group flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-on-surface"
        to="/work/project-2"
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
            Designing a Homepage for an Internal SaaS Platform
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
