import { getPokemon } from "../../../services/pokemon.service";

export const pokemonData = async () => {
  const data = [];
  for (let index = 1; index < 151; index++) {
    data.push(await getPokemon(index));
  }
  return dataMap(data);
};

const dataMap = (data) => {
  const filterData = data.map((pokemon) => ({
    name: `${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}`,
    tipo: pokemon.types[0].type.name,
    image: pokemon.sprites.other.dream_world.front_default,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    id: pokemon.id,
  }));
  return filterData;
};

export const pokemonTipo = async () => {
  const tipo = [];
  for (let index = 1; index < 151; index++) {
    tipo.push(await getPokemon(index));
  }
  return tipoMap(tipo);
};

const tipoMap = (data) => {
  const filterData = data.map((pokemon) => ({
    tipo: pokemon.types[0].type.name,
  }));
  return filterData;
};
