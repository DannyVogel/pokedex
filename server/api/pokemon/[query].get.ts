import type { PokemonDetailResponse } from "~/types/common";

export default defineEventHandler(async (event) => {
  const query = getRouterParam(event, "query");
  const results = await $fetch<PokemonDetailResponse>(
    `https://pokeapi.co/api/v2/pokemon/${query?.toLowerCase()}`,
    {
      query: {
        limit: 12,
      },
    }
  );
  const minimizedPokemonDetails = {
    id: results.id,
    name: results.name.charAt(0).toUpperCase() + results.name.slice(1),
    height: results.height / 10,
    weight: results.weight / 10,
    abilities: results.abilities.map(
      (a) => a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1)
    ),
    types: results.types.map(
      (t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)
    ),
    sprite: results.sprites.front_default,
  };
  return minimizedPokemonDetails;
});
