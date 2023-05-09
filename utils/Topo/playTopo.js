import { MainControler } from "../route";
import { score } from "./score";
import { showTopo } from "./showTopo";
export let timeUp = false;

export const playTopo = () => {
  showTopo(timeUp);
  const button = document.querySelector("#startGame");
  button.innerHTML = "";

  setTimeout(() => {
    timeUp = true;
    const div = document.querySelector(".topoDiv2");
    div.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.innerHTML = `Has conseguido una puntuacion de ${score}`;
    const button = document.createElement("button");
    button.setAttribute("class", "resetTopo");
    button.innerHTML = "Play Again";
    div.append(h1, button);
    addListeners();
  }, 15000);
};

const addListeners = () => {
  const button = document.querySelector(".resetTopo");
  button.addEventListener("click", () => {
    MainControler("Topo");
  });
};
