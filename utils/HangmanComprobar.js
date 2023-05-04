import { partida } from "./HangmanPartida";
import { numberRandom } from "./HangmanWord";
import { palabraRandom } from "./PalabraRandomHangman";
import { MainControler } from "./route";

const Foto = [
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote0_xiqwwm.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote1_eiklmu.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote2_a8878g.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote3_fjzhsc.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote4_tyhj1w.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote5_tkwnzq.png",
  "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122727/hagmanMonigote6_e6fqsg.png",
];
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
      addListener(palabra);
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
      addListener(palabra);
    }
  }
};

const addListener = (palabra) => {
  const reset = document.querySelector("#hangmanReset");
  reset.addEventListener("click", () => {
    i = 0;
    MainControler("Hangman");
    const p = document.querySelectorAll(".hangmanP");
    p.forEach((element) => {
      element.remove();
    });
    partida(palabra[0]);
  });
};
