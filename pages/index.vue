<script lang="ts" setup></script>

<template>
  <div>
    <h1 class="text-5xl text-red-500 font-bold">Pokedex SSR Comparison!</h1>
    <div class="flex gap-2">
      <NuxtLink to="/ssr" class="text-blue-500 underline"> SSR </NuxtLink>
      <NuxtLink to="/ssr-loading" class="text-blue-500 underline">
        SSR with Loading
      </NuxtLink>
      <NuxtLink to="/csr" class="text-blue-500 underline"> CSR </NuxtLink>
    </div>
  </div>
</template>
