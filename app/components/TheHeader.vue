<script lang="ts" setup></script>

<template>
  <div
    v-if="$route.path !== '/'"
    class="mt-10 w-full px-6 flex justify-center gap-10"
  >
    <NuxtLink
      to="/"
      class="hover:text-red-400"
      active-class="text-red-400 underline"
      >Home
    </NuxtLink>
    <NuxtLink
      :to="`/ssr${
        $route.query.results ? `?results=${$route.query.results}` : ''
      }`"
      class="hover:text-red-400"
      active-class="text-red-400 underline"
      >SSR
    </NuxtLink>
    <NuxtLink
      :to="`/ssr-loading${
        $route.query.results ? `?results=${$route.query.results}` : ''
      }`"
      class="hover:text-red-400"
      active-class="text-red-400 underline"
    >
      Loading SSR
    </NuxtLink>
    <NuxtLink
      :to="`/csr${
        $route.query.results ? `?results=${$route.query.results}` : ''
      }`"
      class="hover:text-red-400"
      active-class="text-red-400 underline"
      >CSR
    </NuxtLink>
  </div>
</template>
