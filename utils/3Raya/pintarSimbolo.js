import { numberRandom } from "../numeroAleatorio";
import { comprobarDerrota } from "./comprobarDerrota";
import { comprobarVictoria } from "./comprobarVictoria";
import { resultadoFinal } from "./resultadoFinal";

export const pintarSimbolo = (e) => {
  console.log(e.target.id);
  const cuadro = document.getElementById(e.target.id);
  cuadro.innerHTML = "x";
  cuadro.setAttribute("class", "cuadroLleno");
  if (comprobarVictoria()) {
    setTimeout(() => {
      resultadoFinal("Has Ganado");
    }, 500);
  } else {
    setTimeout(() => {
      const vacios = document.querySelectorAll(".cuadro");
      if (vacios.length !== 0) {
        console.log(vacios);
        const cuadroO = vacios[numberRandom(vacios)];
        cuadroO.innerHTML = "o";
        cuadroO.setAttribute("class", "cuadroLleno");
        if (comprobarDerrota()) {
          setTimeout(() => {
            resultadoFinal("Has Perdido");
          }, 500);
        }
      } else {
        resultadoFinal("Has Empatado");
      }
    }, 500);
  }
};
