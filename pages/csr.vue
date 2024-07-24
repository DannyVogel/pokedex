<script lang="ts" setup>
import type { Pokemon } from "~/types/common";

useHead({
  title: "CSR - Pokédex",
});

const isLoading = ref(false);
const isLoadingMore = ref(false);
const page = ref(1);
const startTime = ref();
const endTime = ref();
const duration = computed(() => {
  const milliseconds = endTime.value - startTime.value;
  return (milliseconds / 1000).toFixed(2);
});
const pokemonList = ref<Pokemon[]>([]);

const { execute } = await useFetch("/api/pokemon", {
  query: {
    page,
    pageSize: 100,
  },
  onRequest({ request, options }) {
    if (page.value === 1) {
      startTime.value = performance.now();
      isLoading.value = true;
    } else {
      isLoadingMore.value = true;
    }
  },
  onResponse({ response }) {
    if (page.value === 1) endTime.value = performance.now();
    pokemonList.value.push(...response._data);
    isLoading.value = false;
    isLoadingMore.value = false;
  },
});

useInfiniteScroll(
  window,
  () => {
    page.value++;
    execute();
  },
  { distance: 5, canLoadMore: () => !isLoading.value && !isLoadingMore.value }
);
</script>

<template>
  <p v-if="!isLoading">Loaded in: {{ duration }} seconds!</p>
  <div v-if="isLoading" class="animate-pulse">Loading...</div>
  <BaseLayoutItemGrid v-else>
    <template #list-items>
      <li v-for="pokemon in pokemonList" :key="pokemon.id">
        <BaseLayoutCard>
          <div class="flex flex-col items-center gap-2">
            <h1 class="text-3xl italic font-semibold">{{ pokemon.name }}</h1>
            <p class="text-sm">#{{ pokemon.id }}</p>
            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
              :alt="pokemon.name"
              class="w-32 h-32"
            />
            <div class="flex gap-2">
              <p>Height: {{ pokemon.height }} m</p>
              <p>Weight: {{ pokemon.weight }} kg</p>
            </div>
            <div class="flex gap-2">
              <template v-for="type in pokemon.types" :key="type">
                <p class="bg-gray-200 rounded-full px-2 py-1">
                  {{ type }}
                </p>
              </template>
            </div>
          </div>
        </BaseLayoutCard>
      </li>
    </template>
  </BaseLayoutItemGrid>
  <div
    v-if="isLoadingMore"
    class="animate-pulse my-20 text-center text-2xl font-bold"
  >
    Loading more...
  </div>
</template>
