import { filterType } from "./filterType";

export const montarTipos = (Tipos) => {
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
