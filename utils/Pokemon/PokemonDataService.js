import { loading } from "../../components/Loading/Loading";
import { montarCarta } from "./montarCarta";
import { montarTipos } from "./montarTipos";
import { pokemonData, pokemonTipo } from "./pokemonData";

export let pokemonDataGlobal;
export let pokemonTipoGlobal;
export const dataService = async () => {
  document.querySelector(".spinner").innerHTML = loading;
  const getData = await pokemonData();
  pokemonDataGlobal = getData;
  montarCarta(pokemonDataGlobal);
  const getTipo = await pokemonTipo();
  pokemonTipoGlobal = getTipo;
  document.querySelector(".spinner").innerHTML = "";
  montarTipos(pokemonTipoGlobal);
};
