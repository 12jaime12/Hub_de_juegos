import { preguntas } from "../../data/quiz.data";
import { MainControler } from "../route";
import { preguntaRandom } from "./PreguntaRandom";
let aciertos = 0;
let fallos = 0;
let arrayAux = [...preguntas];
export const pintarPregunta = () => {
  if (arrayAux.length !== 0) {
    const divButtons = document.querySelector(".buttonsQuiz");
    divButtons.innerHTML = "";
    const numeroPregunta = preguntaRandom(arrayAux);
    const preguntaAzar = arrayAux[numeroPregunta];
    console.log(preguntaAzar);
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
    arrayAux.splice(numeroPregunta, 1);
    console.log(arrayAux);
    addListeners(preguntaAzar);
  } else {
    const divButtons = document.querySelector(".buttonsQuiz");
    divButtons.innerHTML = "";
    const divPregunta = document.querySelector(".preguntas");
    divPregunta.innerHTML = "";
    const divRespuestas = document.querySelector(".respuestas");
    divRespuestas.innerHTML = "";
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
    addListeners2();
  }
};

const addListeners = (preguntaAzar) => {
  const res0 = document.querySelector("#respuesta0");
  res0.addEventListener("click", () => {
    if (res0.innerHTML === preguntaAzar.acierto) {
      res0.setAttribute("class", "acierto");
      aciertos++;
      const divPregunta = document.querySelector(".preguntas");
      divPregunta.innerHTML = "";
      const divRespuestas = document.querySelector(".respuestas");
      divRespuestas.innerHTML = "";
      pintarPregunta();
    } else {
      res0.setAttribute("class", "fallo");
      fallos++;
      const divPregunta = document.querySelector(".preguntas");
      divPregunta.innerHTML = "";
      const divRespuestas = document.querySelector(".respuestas");
      divRespuestas.innerHTML = "";
      pintarPregunta();
    }
  });
  const res1 = document.querySelector("#respuesta1");
  res1.addEventListener("click", () => {
    if (res1.innerHTML === preguntaAzar.acierto) {
      res1.setAttribute("class", "acierto");
      aciertos++;
      const divPregunta = document.querySelector(".preguntas");
      divPregunta.innerHTML = "";
      const divRespuestas = document.querySelector(".respuestas");
      divRespuestas.innerHTML = "";
      pintarPregunta();
    } else {
      res1.setAttribute("class", "fallo");
      fallos++;
      const divPregunta = document.querySelector(".preguntas");
      divPregunta.innerHTML = "";
      const divRespuestas = document.querySelector(".respuestas");
      divRespuestas.innerHTML = "";
      pintarPregunta();
    }
  });
  const res2 = document.querySelector("#respuesta2");
  res2.addEventListener("click", () => {
    if (res2.innerHTML === preguntaAzar.acierto) {
      res2.setAttribute("class", "acierto");
      aciertos++;
      const divPregunta = document.querySelector(".preguntas");
      divPregunta.innerHTML = "";
      const divRespuestas = document.querySelector(".respuestas");
      divRespuestas.innerHTML = "";
      pintarPregunta();
    } else {
      res2.setAttribute("class", "fallo");
      fallos++;
      const divPregunta = document.querySelector(".preguntas");
      divPregunta.innerHTML = "";
      const divRespuestas = document.querySelector(".respuestas");
      divRespuestas.innerHTML = "";
      pintarPregunta();
    }
  });
  const res3 = document.querySelector("#respuesta3");
  res3.addEventListener("click", () => {
    if (res3.innerHTML === preguntaAzar.acierto) {
      res3.setAttribute("class", "acierto");
      aciertos++;
      const divPregunta = document.querySelector(".preguntas");
      divPregunta.innerHTML = "";
      const divRespuestas = document.querySelector(".respuestas");
      divRespuestas.innerHTML = "";
      pintarPregunta();
    } else {
      res3.setAttribute("class", "fallo");
      fallos++;
      const divPregunta = document.querySelector(".preguntas");
      divPregunta.innerHTML = "";
      const divRespuestas = document.querySelector(".respuestas");
      divRespuestas.innerHTML = "";
      pintarPregunta();
    }
  });
};

const addListeners2 = () => {
  const button = document.querySelector(".reiniciar");
  button.addEventListener("click", () => {
    aciertos = 0;
    fallos = 0;
    arrayAux = [...preguntas];
    MainControler("Quiz");
  });
};
