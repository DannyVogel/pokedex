import type { PokemonApiResponse, PokemonDetailResponse } from "~/types/common";

export default defineEventHandler(async (event) => {
  console.log("hi");
  const { page, pageSize } = getQuery(event);

  const pokemon = await $fetch<PokemonApiResponse>(
    "https://pokeapi.co/api/v2/pokemon",
    {
      query: {
        limit: pageSize,
        offset: Number(page) * Number(pageSize),
      },
    }
  );

  const pokemonDetails = await Promise.all(
    pokemon.results.map((p) => $fetch<PokemonDetailResponse>(p.url))
  );

  const minimizedPokemonDetails = pokemonDetails.map((detail) => {
    return {
      id: detail.id,
      name: detail.name.charAt(0).toUpperCase() + detail.name.slice(1),
      height: detail.height / 10,
      weight: detail.weight / 10,
      abilities: detail.abilities.map(
        (a) => a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1)
      ),
      types: detail.types.map(
        (t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)
      ),
      sprite: detail.sprites.front_default,
    };
  });
  return minimizedPokemonDetails;
});
