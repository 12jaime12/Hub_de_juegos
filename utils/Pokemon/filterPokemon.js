import { pokemonDataGlobal } from "./PokemonDataService";
import { montarCarta } from "./montarCarta";
export const filterPokemon = (value) => {
  const filterData = pokemonDataGlobal.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(value.toLowerCase())
  );
  montarCarta(filterData);
};
