import { preguntas } from "../../data/quiz.data";
import { pintarPregunta } from "../../utils/Quiz/PintarPregunta";
import "./Quiz.css";

// -----> 1) Funcion de template

const template = () => `
<div class="quizDiv1">
  <div class="quizDiv2">
    <h1 class="tituloQuiz">Quiz</h1>
    <div class="buttonsQuiz">
      <button class="buttonOption" id="capitales">Capitales</button>
      <button class="buttonOption" id="formula1">Formula 1</button>
      <button class="buttonOption" id="futbol">Futbol</button>
      <button class="buttonOption" id="programacion">Programacion</button>
    </div>
    <div class="preguntas"></div>
    <div class="respuestas"></div>
  </div>
</div>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {
  const capitales = document.querySelector("#capitales");
  capitales.addEventListener("click", () => {
    pintarPregunta();
  });
};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
};
