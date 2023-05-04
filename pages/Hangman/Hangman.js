import { HangmanComprobar } from "../../utils/HangmanComprobar";
import { partida } from "../../utils/HangmanPartida";
import { numberRandom } from "../../utils/HangmanWord";
import { palabraRandom } from "../../utils/PalabraRandomHangman";
import { MainControler } from "../../utils/route";
import "./Hangman.css";

// -----> 1) Funcion de template

const template = () => `
<div id="hangmanDiv1">
  <div id="hangmanDiv2">
    <h1>Hangman</h1>
    <section id="palabra">
      <img id="hangmanImg" src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote0_xiqwwm.png"/>
    </section>
    <section id="submit">
      <input id="hangmanInput" type="textarea" placeholder="Introduce una letra" maxlength="1"/>
      <button id="hangmanComprobar">Comprobar</button>
    </section>
  </div>
</div>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = (palabra) => {
  const comprobar = document.querySelector("#hangmanComprobar");
  comprobar.addEventListener("click", () => {
    const input = document.querySelector("#hangmanInput");

    HangmanComprobar(input.value, palabra);
  });
};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  let palabra = palabraRandom();
  console.log("hagnman", palabra[1]);
  partida(palabra[0]);
  addListeners(palabra);
};
