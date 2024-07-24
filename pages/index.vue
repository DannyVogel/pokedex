<script lang="ts" setup>
import { version } from "~/package.json";
</script>

<template>
  <div class="flex flex-col gap-10 items-center">
    <h1 class="text-5xl text-rose-700 font-bold text-center">Pokédex</h1>
    <h1 class="text-rose-700 font-bold text-center">
      A rendering mode comparison site
    </h1>
    <img src="/pokeball.svg" alt="pokeball" class="w-40 h-40" />

    <div class="flex gap-2">
      <NuxtLink to="/ssr" class="text-blue-500 underline"> SSR </NuxtLink>
      <NuxtLink to="/ssr-loading" class="text-blue-500 underline">
        SSR with Loading
      </NuxtLink>
      <NuxtLink to="/csr" class="text-blue-500 underline"> CSR </NuxtLink>
    </div>
  </div>
  <p class="mt-20 text-center text-xs">v{{ version }}</p>
</template>
