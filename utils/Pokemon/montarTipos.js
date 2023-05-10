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
  const select = document.createElement("select");
  select.setAttribute("class", "selectPokemon");
  arrayTipos.forEach((element) => {
    const p = document.createElement("p");
    p.innerHTML = element;
    p.setAttribute("id", `${element}Button`);
    p.setAttribute("class", "buttonType");
    const divTipos = document.querySelector(".pokemonTipos");
    const divSelect = document.querySelector(".pokemonSelect");
    const option = document.createElement("option");
    option.setAttribute("id", `${element}Option`);
    option.innerHTML = element;
    select.appendChild(option);
    divTipos.appendChild(p);
    divSelect.appendChild(select);
    addListeners2(element);
  });
};

const addListeners2 = (element) => {
  const id1 = `${element}Button`;
  const tipo = document.getElementById(id1);
  tipo.addEventListener("click", (e) => {
    filterType(e.target.innerHTML);
  });

  const select = document.querySelector(".selectPokemon");
  select.addEventListener("change", (e) => {
    filterType(e.target.value);
  });
};
