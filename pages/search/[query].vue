<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const { data: pokemon } = await useFetch(
  `/api/pokemon/${route.params.query}`,
  {}
);
const isLoading = ref(false);
const typeColor = (type: string) => {
  return `bg-${type.toLowerCase()}`;
};

const query = ref("");

const doSearch = () => {
  isLoading.value = true;
  router.push(`/search/${query.value}`);
};
</script>

<template>
  <div
    v-if="isLoading"
    class="animate-pulse h-[306px] flex items-center justify-center"
  >
    Loading...
  </div>
  <div v-else class="flex justify-center">
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
  </div>
  <div class="relative flex items-center justify-center mt-10">
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
</template>
