import { montarCarta } from "./montarCarta";
import { montarTipos } from "./montarTipos";
import { pokemonData, pokemonTipo } from "./pokemonData";

export let pokemonDataGlobal;
export let pokemonTipoGlobal;
export const dataService = async () => {
  const getData = await pokemonData();
  pokemonDataGlobal = getData;
  montarCarta(pokemonDataGlobal);
  const getTipo = await pokemonTipo();
  pokemonTipoGlobal = getTipo;
  montarTipos(pokemonTipoGlobal);
};
