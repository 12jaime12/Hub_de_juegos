import { copiaArrayMemory } from "../../utils/Memory/copiaArrayMemory";
import "./Memory.css";

// -----> 1) Funcion de template

const template = () => `
<div class="memoryDiv1">
  <div class="memoryDiv2">
    <h1>Memory</h1>
    <ul class="memoryUl">
    </ul>
  </div>
</div>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  copiaArrayMemory();
};
