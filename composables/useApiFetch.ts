export const useApiFetch = () => {
  const fetchPokemon = async (page: number, pageSize: number) => {
    try {
      const response = await $fetch("/api/pokemon", {
        query: {
          page,
          pageSize,
        },
      });
      if (!response || !Array.isArray(response))
        throw new Error("Invalid response from API");

      return response;
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      return [];
    }
  };

  return {
    fetchPokemon,
  };
};
