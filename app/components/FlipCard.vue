<script lang="ts" setup>
import type { Pokemon } from "~/types/common";

const emit = defineEmits(["refresh"]);
defineProps<{ pokemon: Pokemon }>();
const flip = ref(false);

const playAgain = () => {
  flip.value = false;
  emit("refresh");
};
</script>

<template>
  <div v-if="pokemon" class="flip-card my-20" @click="flip = !flip">
    <div :class="`flip-card-inner ${flip ? 'flipped' : null}`">
      <div
        :class="`flip-card-front ${
          flip ? 'flipped' : null
        } cursor-pointer transition-transform duration-500`"
      >
        <BaseLayoutCard>
          <template #image>
            <h1 class="text-lg font-bold">Who's That Pokemon?</h1>
            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
              :alt="pokemon.name"
              class="w-32 h-32 contrast-0"
            />
          </template>
        </BaseLayoutCard>
      </div>
      <div
        class="flip-card-back cursor-pointer transition-transform duration-500"
      >
        <BaseLayoutCard>
          <template #image>
            <NuxtLink :to="`/search/${pokemon.name}`">
              <h1 class="text-lg font-bold">It's {{ pokemon.name }}!</h1>
              <img
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
                class="w-32 h-32"
              />
            </NuxtLink>
            <p class="text-green-500 mt-2" @click="playAgain">Play again</p>
          </template>
        </BaseLayoutCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /* border: 1px solid coral;
  border-radius: 1rem; */
}

.flip-card-front {
  /* background: linear-gradient(
    120deg,
    bisque 60%,
    rgb(255, 231, 222) 88%,
    rgb(255, 211, 195) 40%,
    rgba(255, 127, 80, 0.603) 48%
  ); */
  color: rosybrown;
}

.flip-card-back {
  /* background: linear-gradient(
    120deg,
    rgb(255, 174, 145) 30%,
    coral 88%,
    bisque 40%,
    rgb(255, 185, 160) 78%
  ); */
  color: orange;
  transform: rotateY(180deg);
}
</style>
