import { MainControler } from "../route";
import { numberRandom } from "../numeroAleatorio";
import { clean } from "./limpiar";
let aciertos = 0;
let fallos = 0;
export const pintarPregunta = (array) => {
  if (array.length !== 0) {
    const divButtons = document.querySelector(".buttonsQuiz");
    divButtons.innerHTML = "";
    const numeroPregunta = numberRandom(array);
    const preguntaAzar = array[numeroPregunta];
    const titulo = document.createElement("h2");
    titulo.innerHTML = preguntaAzar.pregunta;
    titulo.setAttribute("class", "pregunta");
    const divTitulo = document.querySelector(".preguntas");
    divTitulo.appendChild(titulo);
    preguntaAzar.respuestas.forEach((element, index) => {
      const p = document.createElement("p");
      p.innerHTML = element;
      p.setAttribute("class", "respuesta");
      p.setAttribute("id", `respuesta${index}`);
      const divRespuestas = document.querySelector(".respuestas");
      divRespuestas.appendChild(p);
    });
    array.splice(numeroPregunta, 1);
    addListeners(preguntaAzar, array);
  } else {
    const divButtons = document.querySelector(".buttonsQuiz");
    divButtons.innerHTML = "";
    clean();
    const h2Aciertos = document.createElement("h2");
    h2Aciertos.setAttribute("class", "PuntuacionAciertos");
    h2Aciertos.innerHTML = `Preguntas acertadas: ${aciertos}`;
    const h2Fallos = document.createElement("h2");
    h2Fallos.setAttribute("class", "PuntuacionFallos");
    h2Fallos.innerHTML = `Preguntas falladas: ${fallos}`;
    const button = document.createElement("button");
    button.setAttribute("class", "reiniciar");
    button.innerHTML = "Play again";
    const div = document.querySelector(".quizDiv2");
    div.append(h2Aciertos, h2Fallos, button);
    if (aciertos >= 5) {
      const confeti = new JSConfetti();
      confeti.addConfetti();
    } else {
      const confeti = new JSConfetti();
      confeti.addConfetti({
        emojis: ["😭"],
      });
    }
    addListeners2();
  }
};

const addListeners = (preguntaAzar, array) => {
  const numberAnswers = preguntaAzar.respuestas.length;
  console.log(numberAnswers);
  for (let index = 0; index < numberAnswers; index++) {
    const idCustom = `#respuesta${index}`;
    const res = document.querySelector(idCustom);
    res.addEventListener("click", () => {
      if (res.innerHTML === preguntaAzar.acierto) {
        res.setAttribute("class", "acierto");
        aciertos++;
        setTimeout(() => {
          clean();
          pintarPregunta(array);
        }, 1000);
      } else {
        res.setAttribute("class", "fallo");
        fallos++;
        setTimeout(() => {
          clean();
          pintarPregunta(array);
        }, 1000);
      }
    });
  }
};

const addListeners2 = () => {
  const button = document.querySelector(".reiniciar");
  button.addEventListener("click", () => {
    aciertos = 0;
    fallos = 0;
    MainControler("Quiz");
  });
};
