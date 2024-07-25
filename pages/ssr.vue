<script lang="ts" setup>
import type { Pokemon } from "~/types/common";

useHead({
  title: "SSR - Pokédex",
});

const isLoading = ref(false);
const isLoadingMore = ref(false);
const page = ref(1);
const pageSize = useRouteQuery("results", 12);
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
    pageSize,
  },
  cache: "no-cache",
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

const typeColor = (type: string) => {
  return `bg-${type.toLowerCase()}`;
};
</script>

<template>
  <p v-if="!isLoading">Loaded in: {{ duration }} seconds!</p>
  <div v-if="isLoading" class="animate-pulse">Loading...</div>
  <BaseLayoutItemGrid v-else>
    <template #list-items>
      <li v-for="pokemon in pokemonList" :key="pokemon.id">
        <BaseLayoutCard>
          <template #name>{{ pokemon.name }}</template>
          <template #id>#{{ pokemon.id }}</template>
          <template #image>
            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
              :alt="pokemon.name"
              class="w-32 h-32"
            />
          </template>
          <template #characteristics>
            <p>Height: {{ pokemon.height }} m</p>
            <p>Weight: {{ pokemon.weight }} kg</p>
          </template>
          <template #type>
            <template v-for="type in pokemon.types" :key="type">
              <p
                class="rounded-full px-2 py-1 text-white font-semibold"
                :class="typeColor(type)"
              >
                {{ type }}
              </p>
            </template>
          </template>
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
