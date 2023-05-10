import { Foto } from "../../data/hangman.data";
import { MainControler } from "../route";

let i = 0;
export const HangmanComprobar = (e, palabra) => {
  const minus = e.toLowerCase();
  const mayus = e.toUpperCase();
  if (palabra[1].includes(minus)) {
    palabra[0].forEach((element) => {
      if (minus === element) {
        const p = document.getElementById(`${minus}`);
        p.innerHTML = mayus;
        p.setAttribute("id", "hola");
        p.setAttribute("class", "hangmanPacertado");
        const input = document.querySelector("#hangmanInput");
        input.value = "";
      }
    });
    const pElement = document.querySelectorAll(".hangmanPacertado");
    if (pElement.length === palabra[0].length) {
      setTimeout(() => {
        const div = document.querySelector("#hangmanDiv2");
        div.innerHTML = "";
        const h1 = document.createElement("h1");
        h1.innerHTML = "Has ganado";
        const button = document.createElement("button");
        button.innerHTML = "Play again";
        button.setAttribute("id", "hangmanReset");
        const confeti = new JSConfetti();
        confeti.addConfetti();
        div.append(h1, button);
        addListener();
      }, 500);
    }
  } else {
    i++;
    const img = document.querySelector("#hangmanImg");
    img.setAttribute("src", `${Foto[i]}`);
    const input = document.querySelector("#hangmanInput");
    input.value = "";
    if (i === 6) {
      setTimeout(() => {
        const div = document.querySelector("#hangmanDiv2");
        div.innerHTML = "";
        const h1 = document.createElement("h1");
        h1.innerHTML = "Has perdido la partida";
        const button = document.createElement("button");
        button.innerHTML = "Play again";
        button.setAttribute("id", "hangmanReset");
        div.append(h1, button);
        const confeti = new JSConfetti();
        confeti.addConfetti({
          emojis: ["😭"],
        });
        addListener();
      }, 500);
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
