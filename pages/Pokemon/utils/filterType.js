import { pokemonDataGlobal } from "./PokemonDataService";
import { montarCarta } from "./montarCarta";

export const filterType = (e) => {
  const filter = pokemonDataGlobal.filter((pokemon) =>
    pokemon.tipo.includes(e)
  );

  montarCarta(filter);
};
