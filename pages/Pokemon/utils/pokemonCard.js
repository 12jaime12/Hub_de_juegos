export const templateCarta = (pokemon) => {
  return `
    <figure class="pokemonFigure">
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h2>${pokemon.name} ${id(pokemon.id)}</h2>
        <p class="tipo">${pokemon.tipo}</p>
        <p class="height">Altura: ${pokemon.height} m</p>
        <p class="weight">Peso: ${pokemon.weight} kg</p>
    </figure>
`;
};

const id = (id) => {
  if (id < 10) {
    id = `#00${id}`;
    return id;
  } else if (id >= 10 && id < 100) {
    id = `#0${id}`;
    return id;
  } else {
    id = `#${id}`;
    return id;
  }
};
