import { filterPokemon } from "../../utils/Pokemon/filterPokemon";
import "./Pokemon.css";
import {
  dataService,
  pokemonDataGlobal,
} from "../../utils/Pokemon/PokemonDataService";
import { montarCarta } from "../../utils/Pokemon/montarCarta";

const template = () => `
<div id=pokemonDiv>
  <button id="galleryButton">Gallery</button>
  <h2 class="titulo">Busqueda por nombre</h2>
  <input type="text" id="inputPokemon" placeholder="ej: pikachu"/>
  <h2 class="titulo">Busqueda por tipo</h2>
  <div class="pokemonTipos"></div>
  <div class="pokemonSelect"></div>
  <div class="pokemonGallery"></div>
  <div class="spinner"></div>
</div>
`;

const addListeners = () => {
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value);
  });
  const buttonGallery = document.querySelector("#galleryButton");
  console.log(buttonGallery);
  buttonGallery.addEventListener("click", () => {
    montarCarta(pokemonDataGlobal);
  });
};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
  addListeners();
};
