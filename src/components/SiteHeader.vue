<template>
  <header
    class="site-header fixed top-0 w-full z-50 transition-all duration-500 ease-out bg-surface/80 backdrop-blur-md border-b border-outline-variant/10"
  >
    <div class="flex items-center justify-between px-margin-desktop py-base max-w-page mx-auto">
      <router-link
        to="/"
        class="flex items-center gap-2 font-headline-md text-headline-md font-bold tracking-tight text-on-surface"
      >
        <span class="font-mono text-tertiary text-sm font-normal">&lt;/&gt;</span>
        DESIGNER PORTFOLIO
      </router-link>
      <nav class="hidden md:flex gap-8 items-center">
        <router-link
          class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
          to="/"
          >Home</router-link
        >
        <router-link
          class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
          to="/work"
          >Work</router-link
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
        class="hidden md:inline-flex font-body-md text-body-md text-primary border border-outline px-6 py-2 rounded-full hover:bg-surface-variant transition-colors duration-300"
        href="mailto:hello@example.com"
      >
        Contact
      </a>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.site-header {
  z-index: 50;
}
</style>
