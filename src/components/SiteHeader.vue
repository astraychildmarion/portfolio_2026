<template>
  <header
    class="site-header fixed top-0 w-full z-50 transition-all duration-500 ease-out bg-surface/80 backdrop-blur-md border-b border-outline-variant/10"
  >
    <div
      class="flex items-center justify-between px-margin-mobile md:px-margin-desktop py-base max-w-page mx-auto"
    >
      <router-link
        to="/"
        @click="closeMenu"
        class="flex items-center gap-2 font-headline-md text-headline-md font-bold tracking-tight text-on-surface"
      >
        <span class="font-mono text-tertiary text-sm font-normal">&lt;/&gt;</span>
        Marion Ma
      </router-link>
      <nav class="hidden md:flex gap-8 items-center">
        <router-link
          class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
          to="/"
          >Home</router-link
        >
        <router-link
          class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
          to="/about"
          >About</router-link
        >
        <router-link
          class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
          to="/resume"
          >Resume</router-link
        >
      </nav>
      <a
        class="hidden md:inline-flex items-center gap-2 font-body-md text-body-md text-primary bg-surface-container-low px-6 py-2 rounded-full hover:bg-surface-variant transition-colors duration-300"
        href="mailto:allidareused@gmail.com"
      >
        <span class="material-symbols-outlined text-[18px]" aria-hidden="true">mail</span>
        Contact
      </a>
      <button
        class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-on-surface hover:bg-surface-variant transition-colors duration-300"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="material-symbols-outlined text-[22px]" aria-hidden="true">
          {{ isMenuOpen ? 'close' : 'menu' }}
        </span>
      </button>
    </div>
    <div
      id="mobile-navigation"
      class="md:hidden overflow-hidden border-t border-outline-variant/10 bg-surface-container-low/95 backdrop-blur-md shadow-sm transition-[max-height,opacity] duration-300 ease-out"
      :class="isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 shadow-none'"
    >
      <nav class="px-margin-mobile py-6 flex flex-col gap-4 max-w-page mx-auto">
        <router-link
          class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
          to="/"
          @click="closeMenu"
          >Home</router-link
        >
        <router-link
          class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
          to="/about"
          @click="closeMenu"
          >About</router-link
        >
        <router-link
          class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
          to="/resume"
          @click="closeMenu"
          >Resume</router-link
        >
        <a
          class="inline-flex w-fit items-center gap-2 font-body-md text-body-md text-primary bg-surface-container-high px-6 py-2 rounded-full hover:bg-surface-variant transition-colors duration-300"
          href="mailto:allidareused@gmail.com"
          @click="closeMenu"
        >
          <span class="material-symbols-outlined text-[18px]" aria-hidden="true">mail</span>
          Contact
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.site-header {
  z-index: 50;
}
</style>
