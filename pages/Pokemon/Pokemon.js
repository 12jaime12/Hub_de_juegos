import { templateCarta } from "../../utils/pokemonCard";
import { pokemonData, pokemonTipo } from "../../utils/pokemonData";
import { changeBackground } from "../../utils/pokemonTipos";
import "./Pokemon.css";

let pokemonDataGlobal;

let pokemonTipoGlobal;

const template = () => `
<div id=pokemonDiv>
  <button id="galleryButton">Gallery</button>
  <h2 class="titulo">Busqueda por nombre</h2>
  <input type="text" id="inputPokemon" placeholder="ej: pikachu"/>
  <h2 class="titulo">Busqueda por tipo</h2>
  <div class="pokemonTipos"></div>
  <div class="pokemonGallery"></div>
</div>
`;

const dataService = async () => {
  const getData = await pokemonData();
  pokemonDataGlobal = getData;
  montarCarta(pokemonDataGlobal);
  const getTipo = await pokemonTipo();
  pokemonTipoGlobal = getTipo;
  montarTipos(pokemonTipoGlobal);
};

const montarTipos = (Tipos) => {
  let arrayTiposRepe = [];
  Tipos.forEach((element) => {
    arrayTiposRepe.push(element.tipo);
  });
  let arrayTipos = [];
  arrayTiposRepe.forEach((element) => {
    !arrayTipos.includes(element) && arrayTipos.push(element);
  });
  arrayTipos.forEach((element) => {
    const p = document.createElement("p");
    p.innerHTML = element;
    p.setAttribute("id", `${element}Button`);
    p.setAttribute("class", "buttonType");
    const div = document.querySelector(".pokemonTipos");
    div.appendChild(p);
  });
  addListeners2();
};

const montarCarta = (data) => {
  document.querySelector(".pokemonGallery").innerHTML = "";
  data.forEach((element) => {
    document.querySelector(".pokemonGallery").innerHTML +=
      templateCarta(element);
  });
  changeBackground();
};

const addListeners = () => {
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value);
  });
  const buttonGallery = document.querySelector("#galleryButton");
  buttonGallery.addEventListener("click", () => {
    montarCarta(pokemonDataGlobal);
  });
};
const addListeners2 = () => {
  const grass = document.querySelector("#grassButton");
  grass.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const fire = document.querySelector("#fireButton");
  fire.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const water = document.querySelector("#waterButton");
  water.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const bug = document.querySelector("#bugButton");
  bug.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const normal = document.querySelector("#normalButton");
  normal.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const poison = document.querySelector("#poisonButton");
  poison.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const electric = document.querySelector("#electricButton");
  electric.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const ground = document.querySelector("#groundButton");
  ground.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const fairy = document.querySelector("#fairyButton");
  fairy.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const fighting = document.querySelector("#fightingButton");
  fighting.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const psychic = document.querySelector("#psychicButton");
  psychic.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const rock = document.querySelector("#rockButton");
  rock.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const ghost = document.querySelector("#ghostButton");
  ghost.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const ice = document.querySelector("#iceButton");
  ice.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
  const dragon = document.querySelector("#dragonButton");
  dragon.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });
};

const filterPokemon = (value) => {
  const filterData = pokemonDataGlobal.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(value.toLowerCase())
  );
  montarCarta(filterData);
};

const filterType = (e) => {
  const filter = pokemonDataGlobal.filter((pokemon) =>
    pokemon.tipo.includes(e)
  );

  montarCarta(filter);
};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
  addListeners();
};
