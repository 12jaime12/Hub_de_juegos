import { Foto } from "../data/hangman.data";
import { MainControler } from "./route";

let i = 0;
export const HangmanComprobar = (e, palabra) => {
  if (palabra[1].includes(e)) {
    palabra[0].forEach((element, index) => {
      console.log(e);
      if (e === element) {
        console.log("entro", index);
        const p = document.getElementById(`${e}`);
        p.innerHTML = e.toUpperCase();
        p.setAttribute("id", "hola");
        p.setAttribute("class", "hangmanPacertado");
        const input = document.querySelector("#hangmanInput");
        input.value = "";
      }
    });
    const pElement = document.querySelectorAll(".hangmanPacertado");
    if (pElement.length === palabra[0].length) {
      const div = document.querySelector("#hangmanDiv2");
      div.innerHTML = "";
      const h1 = document.createElement("h1");
      h1.innerHTML = "Has ganado";
      const button = document.createElement("button");
      button.innerHTML = "Play again";
      button.setAttribute("id", "hangmanReset");
      div.append(h1, button);
      addListener();
    }
  } else {
    i++;
    const img = document.querySelector("#hangmanImg");
    img.setAttribute("src", `${Foto[i]}`);
    const input = document.querySelector("#hangmanInput");
    input.value = "";
    if (i === 6) {
      const div = document.querySelector("#hangmanDiv2");
      div.innerHTML = "";
      const h1 = document.createElement("h1");
      h1.innerHTML = "Has perdido la partida";
      const button = document.createElement("button");
      button.innerHTML = "Play again";
      button.setAttribute("id", "hangmanReset");
      div.append(h1, button);
      addListener();
    }
  }
};

const addListener = () => {
  const reset = document.querySelector("#hangmanReset");
  reset.addEventListener("click", () => {
    i = 0;

    const p = document.querySelectorAll(".hangmanP");
    p.forEach((element) => {
      element.remove();
    });
    MainControler("Hangman");
  });
};
