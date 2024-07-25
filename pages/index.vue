<script lang="ts" setup>
import { version } from "~/package.json";

const results = ref("");
const options = [12, 50, 100];
</script>

<template>
  <div class="flex flex-col gap-10 items-center">
    <h1 class="text-5xl text-rose-700 font-bold text-center">Pokédex</h1>
    <h1 class="text-rose-700 font-bold text-center">
      A rendering mode comparison site
    </h1>
    <img src="/pokeball.svg" alt="pokeball" class="w-40 h-40" />

    <div class="flex gap-2">
      <NuxtLink
        :to="`/ssr${results ? `?results=${results}` : ''}`"
        class="text-blue-500 underline"
      >
        SSR
      </NuxtLink>
      <NuxtLink
        :to="`/ssr-loading${results ? `?results=${results}` : ''}`"
        class="text-blue-500 underline"
      >
        SSR with Loading
      </NuxtLink>
      <NuxtLink
        :to="`/csr${results ? `?results=${results}` : ''}`"
        class="text-blue-500 underline"
      >
        CSR
      </NuxtLink>
    </div>
  </div>
  <div class="my-10 flex justify-center gap-2 text-sm font-semibold">
    <select
      v-model="results"
      placeholder="Select one"
      class="bg-blue-100 border border-blue-200 p-1"
    >
      <option disabled value="">Set result amount</option>
      <option v-for="option in options">{{ option }}</option>
    </select>
  </div>
  <p class="mt-20 text-center text-xs">v{{ version }}</p>
</template>
