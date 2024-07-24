<script setup lang="ts">
useHead({
  title: "DV's Pokédex",
  meta: [
    {
      name: "description",
      content:
        "A basic Pokédex app using Nuxt.js for showing off the differences between SSR, CSR, and SSG.",
    },
  ],
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
