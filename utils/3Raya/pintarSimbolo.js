import { numberRandom } from "../numeroAleatorio";
import { comprobarDerrota } from "./comprobarDerrota";
import { comprobarVictoria } from "./comprobarVictoria";
import { resultadoFinal } from "./resultadoFinal";

export const pintarSimbolo = (e) => {
  console.log(e.target.id);
  const cuadro = document.getElementById(e.target.id);
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586141/cruz_ohx2jq.png"
  );
  img.setAttribute("class", "imagenLlena");
  img.setAttribute("id", "x");
  cuadro.appendChild(img);
  cuadro.setAttribute("class", "cuadroLleno");
  if (comprobarVictoria()) {
    setTimeout(() => {
      resultadoFinal("Has Ganado");
      const confeti = new JSConfetti();
      confeti.addConfetti();
    }, 500);
  } else {
    setTimeout(() => {
      const vacios = document.querySelectorAll(".cuadro");
      if (vacios.length !== 0) {
        console.log(vacios);
        const cuadroO = vacios[numberRandom(vacios)];
        const img = document.createElement("img");
        img.setAttribute(
          "src",
          "https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683586143/circulo_evsllo.png"
        );
        img.setAttribute("class", "imagenLlena");
        img.setAttribute("id", "o");
        cuadroO.appendChild(img);
        cuadroO.setAttribute("class", "cuadroLleno");
        if (comprobarDerrota()) {
          setTimeout(() => {
            resultadoFinal("Has Perdido");
            const confeti = new JSConfetti();
            confeti.addConfetti({
              emojis: ["😭"],
            });
          }, 500);
        }
      } else {
        resultadoFinal("Has Empatado");
      }
    }, 500);
  }
};
