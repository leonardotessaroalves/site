<script setup lang="ts">
useHead({
  title: 'Leonardo Alves — Senior Front-end Engineer',
  meta: [
    {
      name: 'description',
      content: 'Leonardo Alves, Senior Front-end Engineer Vue | Nuxt | React.'
    },
    {
      name: 'og:title',
      content: 'Leonardo Alves — Senior Front-end Engineer'
    },
    {
      name: 'og:description',
      content: 'Leonardo Alves, Senior Front-end Engineer Vue | Nuxt | React.'
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'og:image',
      content: '/me.png'
    },
  ]
})

const skills = [
  'Vue.js',
  'Nuxt',
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'REST / GraphQL',
  'Testing (Vitest / Playwright)',
  'Performance & Acessibilidade'
]

const links = [
  { label: 'GitHub', href: 'https://github.com/leonardotessaroalves' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseph-leonardo-tessaro-alves-batista/' },
  { label: 'E-mail', href: 'mailto:leonardotessaroalves@gmail.com' }
]
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 antialiased">
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24">
      <header class="mb-16">
        <p class="mb-3 font-mono text-sm text-emerald-400">Hi there 👋, I'm</p>
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
          Joseph Leonardo Tessaro Alves Batista
        </h1>
        <h2 class="mt-3 text-xl text-slate-400 sm:text-2xl">
          Senior Front-end Engineer · Vue · Nuxt · React
        </h2>
        <p class="mt-6 max-w-xl text-slate-400">
          I build high-performance, accessible web interfaces, focusing on the Vue/Nuxt and React ecosystems. I enjoy transforming complex problems into easy-to-use experiences.
        </p>
      </header>

      <section class="mb-16">
        <h3 class="mb-4 font-mono text-sm text-emerald-400">// Skills</h3>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="skill in skills"
            :key="skill"
            class="rounded-full border border-slate-800 bg-slate-900 px-4 py-1.5 text-sm text-slate-300"
          >
            {{ skill }}
          </li>
        </ul>
      </section>

      <section class="mb-16">
        <h3 class="mb-4 font-mono text-sm text-emerald-400">// Certifications</h3>
        <ul class="flex gap-2">
          <li>
            <NuxtLink to="https://certificates.dev/nuxt/certificates/a2979b55-2a29-4373-b94a-6f064e99ca35">
              <img src="https://img.shields.io/badge/Official_Nuxt_Certified-Mid--Level-00DC82?style=for-the-badge&logo=nuxt&logoColor=white&labelColor=003C2F" alt="">
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.credly.com/badges/a52f86fb-a0ae-48ff-977f-7ba02a855535/linked_in_profile">
              <img src="https://img.shields.io/badge/Meta%20Front--End%20Developer-professional%20Certificate-0064e0?style=for-the-badge&labelColor=0082fb&logo=meta" alt="">
            </NuxtLink>
          </li>
        </ul>
      </section>

      <footer class="flex flex-wrap gap-6">
        <h3 class="mb-4 font-mono text-sm text-emerald-400">// Contact</h3>

        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-slate-400 underline decoration-slate-700 underline-offset-4 transition-colors hover:text-emerald-400 hover:decoration-emerald-400"
        >
          {{ link.label }}
        </a>
      </footer>
    </div>
  </div>
</template>
