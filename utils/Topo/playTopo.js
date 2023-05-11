import { MainControler } from "../route";
import { getScore, setScore } from "./score";
import { showTopo } from "./showTopo";
export let timeUp = false;

export const playTopo = () => {
  timeUp = false;
  showTopo(timeUp);
  const button = document.querySelector("#startGame");
  button.innerHTML = "";
  button.style.display = "none";

  setTimeout(() => {
    const actualScore = getScore();
    timeUp = true;
    const div = document.querySelector(".topoDiv2");
    div.innerHTML = "";
    const h1 = document.createElement("h1");
    if (actualScore >= 15) {
      h1.innerHTML = `Enhorabuena has conseguido una puntuacion de ${actualScore} puntos`;
      const confeti = new JSConfetti();
      confeti.addConfetti();
    } else {
      h1.innerHTML = `Intentelo de nuevo has conseguido una puntuacion de ${actualScore} puntos`;
      const confeti = new JSConfetti();
      confeti.addConfetti({
        emojis: ["😭"],
      });
    }
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
    setScore(0);
    MainControler("Topo");
  });
};
