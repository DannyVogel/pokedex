<script lang="ts" setup></script>

<template>
  <div class="mt-10 w-full px-10 flex gap-10">
    <NuxtLink
      to="/"
      class="hover:text-red-400"
      active-class="text-red-400 underline"
      >Home
    </NuxtLink>
    <NuxtLink
      to="/ssr"
      class="hover:text-red-400"
      active-class="text-red-400 underline"
      >SSR
    </NuxtLink>
    <NuxtLink
      to="/ssr-loading"
      class="hover:text-red-400"
      active-class="text-red-400 underline"
    >
      SSR with Loading
    </NuxtLink>
    <NuxtLink
      to="/csr"
      class="hover:text-red-400"
      active-class="text-red-400 underline"
      >CSR
    </NuxtLink>
  </div>
</template>
