import { copiaArrayMemory } from "../../utils/Memory/copiaArrayMemory";
import "./Memory.css";

// -----> 1) Funcion de template

const template = () => `
<div class="memoryDiv1">
  <div class="memoryDiv2">
    <h1>Memory</h1>
    <ul class="memoryUl">
      
    </ul>
    <button class="buttonPlay">Play</button>
  </div>
</div>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {
  const button = document.querySelector(".buttonPlay");
  button.addEventListener("click", () => {
    copiaArrayMemory();
  });
};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
};
