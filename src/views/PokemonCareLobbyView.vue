<template>
  <main
    class="project-page px-margin-mobile md:px-margin-desktop pt-28 pb-20 md:pb-24 lg:pb-28 max-w-page mx-auto w-full"
  >
    <section class="mb-20 md:mb-28 lg:mb-32 max-w-4xl">
      <p class="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary mb-4">
        Personal Project · Case Study
      </p>

      <h1
        class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6"
      >
        Pokémon Care Lobby
      </h1>

      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
        An interactive virtual pet game where players adopt Pokémon and respond to their changing
        needs through real-time care interactions.
      </p>

      <p
        class="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-8 pt-5 border-t border-outline-variant/40"
      >
        This is a non-commercial fan project. Pokémon and its characters belong to their respective
        owners.
      </p>
    </section>

    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Overview</h2>
      </div>

      <div class="md:col-span-9 space-y-8">
        <div class="space-y-6 max-w-3xl">
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Pokémon Care Lobby began as a programming exercise for displaying Pokémon data and grew
            into an interactive care game that combines UX design, frontend engineering, and
            AI-assisted development.
          </p>

          <p class="font-body-md text-body-md text-on-surface-variant">
            As the sole designer and developer, I defined the game mechanics, planned the user
            experience, designed the interface, implemented the application, and built its automated
            test coverage.
          </p>
        </div>

        <figure class="space-y-4">
          <div class="rounded-xl overflow-hidden bg-surface-container-high shadow-sm">
            <img
              class="w-full object-cover"
              src="/pet_shop/pokemon_pet.png"
              alt="Laptop displaying the Pokémon Care Lobby homepage and adoption interface"
            />
          </div>
          <figcaption class="font-body-md text-body-md text-on-surface-variant">
            The lobby brings adoption, game pacing, and each Pokémon’s care state into one view.
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Problem</h2>
      </div>

      <div class="md:col-span-9 space-y-8 max-w-3xl">
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          The original exercise focused on displaying Pokémon data with limited interaction. The
          challenge was to turn static information into an engaging experience while keeping the
          changing game mechanics intuitive and easy to understand.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="rounded-xl bg-surface-container-low p-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Make time visible
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Players needed to understand that each Pokémon’s needs continue changing over time.
            </p>
          </div>
          <div class="rounded-xl bg-surface-container-low p-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Signal urgency
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Important care states had to be recognisable without requiring players to inspect
              every detail.
            </p>
          </div>
          <div class="rounded-xl bg-surface-container-low p-6">
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Keep care immediate
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Responding to a need had to feel direct rather than hidden behind extra navigation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Solution</h2>
      </div>

      <div class="md:col-span-9 space-y-10">
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
          I created a virtual pet system where health, hunger, and happiness change over time.
          Players can read each Pokémon’s condition at a glance, then feed, water, or play with them
          directly from the lobby.
        </p>

        <figure class="space-y-4">
          <div class="rounded-xl overflow-hidden bg-surface-container-high shadow-sm">
            <img
              class="w-full object-cover"
              src="/pet_shop/pokemon_status.png"
              alt="Tablet displaying three Pokémon cards with different care conditions, urgency indicators, progress bars, and care actions"
            />
          </div>
          <figcaption class="font-body-md text-body-md text-on-surface-variant">
            Dynamic care states combine colour, labels, progress bars, and actions so players can
            recognise urgency and respond in place.
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Design Decisions</h2>
      </div>

      <div class="md:col-span-9 space-y-10">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <p
              class="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary mb-3"
            >
              01
            </p>
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Visual status feedback
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Colour-coded indicators, progress bars, and status messages communicate changing needs
              and urgency through several complementary cues.
            </p>
          </div>

          <div>
            <p
              class="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary mb-3"
            >
              02
            </p>
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Actionable pet cards
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Feed, Water, and Play actions sit directly on each card, allowing players to respond
              without leaving the lobby.
            </p>
          </div>

          <div>
            <p
              class="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary mb-3"
            >
              03
            </p>
            <h3 class="font-body-lg text-body-lg font-semibold text-on-surface mb-2">
              Adjustable game speed
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Adjustable timers give players control over the pace, while localStorage preserves
              their progress between sessions.
            </p>
          </div>
        </div>

        <figure class="space-y-4">
          <div class="rounded-xl overflow-hidden bg-surface-container-high shadow-sm">
            <img
              class="w-full object-cover"
              src="/pet_shop/pokemon_pad.png"
              alt="Tablet displaying a Larvitar profile with care status, attributes, Pokédex information, and return action"
            />
          </div>
          <figcaption class="font-body-md text-body-md text-on-surface-variant">
            The detail view expands the same care language while adding character attributes and
            Pokédex information.
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Build &amp; Testing</h2>
      </div>

      <div class="md:col-span-9 space-y-8 max-w-3xl">
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          The application was built with React, JavaScript, Vite, and CSS, using PokéAPI for Pokémon
          data and localStorage for persistence. Vitest and React Testing Library supported a
          test-driven development workflow.
        </p>

        <p class="font-body-md text-body-md text-on-surface-variant">
          I used OpenAI Codex to support implementation and iteration while retaining ownership of
          the game rules, experience design, technical decisions, and quality control.
        </p>
      </div>
    </section>

    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Result</h2>
      </div>

      <div class="md:col-span-9 space-y-8 max-w-3xl">
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          The result is a functional React application with dynamic pet states, direct care
          interactions, adjustable game pacing, persistent data, and automated tests.
        </p>

        <div class="flex flex-wrap gap-3">
          <span
            v-for="technology in technologies"
            :key="technology"
            class="px-4 py-2 bg-surface-container-high text-on-surface-variant font-body-md text-body-md rounded-full"
          >
            {{ technology }}
          </span>
        </div>
      </div>
    </section>

    <section class="mb-20 md:mb-28 lg:mb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-3">
        <h2 class="font-headline-md text-headline-md text-on-surface">Reflection</h2>
      </div>

      <div class="md:col-span-9 space-y-6 max-w-3xl">
        <p class="font-body-md text-body-md text-on-surface-variant">
          This project strengthened my ability to translate game mechanics into intuitive
          interactions. Designing for states that change over time required every visual cue and
          action to make the system’s behaviour easier to understand.
        </p>

        <p class="font-body-md text-body-md text-on-surface-variant">
          Using Codex alongside TDD also helped me explore how AI can accelerate development while
          keeping design decisions and quality control human-led.
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

<script setup lang="ts">
const technologies = [
  'React',
  'JavaScript',
  'Vite',
  'CSS',
  'PokéAPI',
  'localStorage',
  'Vitest',
  'React Testing Library',
  'TDD',
  'OpenAI Codex',
]
</script>
