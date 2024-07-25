<script lang="ts" setup>
import { version } from "~/package.json";

const results = ref("");
const options = [12, 50, 100];
const query = ref("");
const isLoading = ref(false);

const doSearch = () => {
  isLoading.value = true;
  navigateTo(`/search/${query.value}`);
};
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
  <div
    class="my-10 flex items-center justify-center gap-2 text-sm font-semibold"
  >
    <p>Show ordered list:</p>
    <select
      v-model="results"
      placeholder="Select one"
      class="bg-blue-100 border border-blue-200 p-1"
    >
      <option disabled value="">Set result amount</option>
      <option v-for="option in options">{{ option }}</option>
    </select>
  </div>
  <div class="relative flex items-center justify-center">
    <form @submit.prevent="doSearch">
      <input
        type="text"
        :disable="isLoading"
        v-model="query"
        placeholder="Search for a Pokémon"
        class="bg-blue-100 border border-r-0 border-blue-200 p-1 flex-grow"
      />
      <button
        :disable="isLoading"
        class="bg-blue-100 border border-blue-200 py-1 px-2 flex-1 hover:text-rose-700"
      >
        Search
      </button>
    </form>
  </div>
  <p class="mt-20 text-center text-xs">v{{ version }}</p>
</template>
