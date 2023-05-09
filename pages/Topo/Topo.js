import { playTopo } from "../../utils/Topo/playTopo";

import { scoreMarcador } from "../../utils/Topo/score";

import "./Topo.css";
let score = 0;
// -----> 1) Funcion de template

const template = () => `
<div class="topoDiv1">
  <div class="topoDiv2">
    <h1>Wacka</h1>
    <span class="score"></span>
    <button id="startGame">Start!</button>
    <div class="game">
    <div class="hole hole1">
      <div class="mole"></div>
    </div>
    <div class="hole hole2">
      <div class="mole"></div>
    </div>
    <div class="hole hole3">
      <div class="mole"></div>
    </div>
    <div class="hole hole4">
      <div class="mole"></div>
    </div>
    <div class="hole hole5">
      <div class="mole"></div>
    </div>
    <div class="hole hole6">
      <div class="mole"></div>
    </div>
  </div>
  </div>
</div>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {
  const button = document.querySelector("#startGame");
  button.addEventListener("click", () => {
    playTopo();
  });
  const topos = document.querySelectorAll(".mole");
  topos.forEach((element) => {
    element.addEventListener("click", (e) => {
      scoreMarcador(e);
    });
  });
};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
};
