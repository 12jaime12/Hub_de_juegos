export const templateCarta = (pokemon) => `
    <figure class="pokemonFigure">
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h2>${pokemon.name}</h2>
        <p class="tipo">${pokemon.tipo}</p>
    </figure>
`;
