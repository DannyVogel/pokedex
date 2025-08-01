<script lang="ts" setup>
const emit = defineEmits<{
  (e: "refresh"): void;
}>();

defineProps<{
  pokemon: Pokemon;
}>();

const isFlipped = ref(false);

const playAgain = () => {
  isFlipped.value = false;
  emit("refresh");
};
</script>

<template>
  <div v-if="pokemon" class="flip-card my-20">
    <div :class="['flip-card-inner', { 'is-flipped': isFlipped }]">
      <div
        class="flip-card-front cursor-pointer"
        @click="isFlipped = !isFlipped"
      >
        <BaseLayoutCard>
          <template #image>
            <div class="min-w-64 flex flex-col items-center justify-center">
              <h1 class="text-lg font-bold">Who's That Pokemon?</h1>
              <img
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
                :alt="pokemon.name"
                class="w-32 h-32 contrast-0"
              />
            </div>
          </template>
        </BaseLayoutCard>
      </div>
      <div class="flip-card-back min-w-64">
        <BaseLayoutCard>
          <template #image>
            <NuxtLink
              :to="`/search/${pokemon.name}`"
              class="min-w-64 flex flex-col items-center justify-center"
            >
              <h1 class="text-lg font-bold">It's {{ pokemon.name }}!</h1>
              <img
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
                :alt="pokemon.name"
                class="w-32 h-32"
              />
            </NuxtLink>
            <p
              class="text-green-500 mt-2 cursor-pointer"
              @click.stop="playAgain"
            >
              Play again
            </p>
          </template>
        </BaseLayoutCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*
  Use a more generic background for better compatibility and to avoid
  relying on complex linear gradients. A simple solid or subtle gradient
  will work on all browsers.
*/
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 1000px; /* Establishes a 3D perspective */
  font-family: sans-serif;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d; /* Key for 3D flip effect */
}

/* Class to trigger the flip animation */
.flip-card-inner.is-flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  height: 100%;
  /* This is crucial for hiding the back of the card when it's not flipped */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
}

.flip-card-front {
  background-color: #f8e5d6; /* A neutral, light background */
  color: #8c5a4d;
}

.flip-card-back {
  background-color: #fca366; /* A slightly darker background for the back */
  color: white;
  transform: rotateY(180deg); /* Positions the back side correctly */
}
</style>
