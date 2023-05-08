import { pintarSimbolo } from "../../utils/3Raya/pintarSimbolo";
import "./3Raya.css";

// -----> 1) Funcion de template

const template = () => `
<div class="rayaDiv1">
  <div class="rayaDiv2">
    <h1>3 en Raya</h1>
    <ul class="Cuadricula">
      <li class="cuadro" id="a1"></li>
      <li class="cuadro" id="a2"></li>
      <li class="cuadro" id="a3"></li>

      <li class="cuadro" id="b1"></li>
      <li class="cuadro" id="b2"></li>
      <li class="cuadro" id="b3"></li>

      <li class="cuadro" id="c1"></li>
      <li class="cuadro" id="c2"></li>
      <li class="cuadro" id="c3"></li>
        
    </ul>
    </div>
  </div>
</div>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {
  const li1 = document.querySelector("#a1");
  li1.addEventListener("click", (e) => {
    pintarSimbolo(e);
  });
  const li2 = document.querySelector("#a2");
  li2.addEventListener("click", (e) => {
    pintarSimbolo(e);
  });
  const li3 = document.querySelector("#a3");
  li3.addEventListener("click", (e) => {
    pintarSimbolo(e);
  });

  const li4 = document.querySelector("#b1");
  li4.addEventListener("click", (e) => {
    pintarSimbolo(e);
  });
  const li5 = document.querySelector("#b2");
  li5.addEventListener("click", (e) => {
    pintarSimbolo(e);
  });
  const li6 = document.querySelector("#b3");
  li6.addEventListener("click", (e) => {
    pintarSimbolo(e);
  });

  const li7 = document.querySelector("#c1");
  li7.addEventListener("click", (e) => {
    pintarSimbolo(e);
  });
  const li8 = document.querySelector("#c2");
  li8.addEventListener("click", (e) => {
    pintarSimbolo(e);
  });
  const li9 = document.querySelector("#c3");
  li9.addEventListener("click", (e) => {
    pintarSimbolo(e);
  });
};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
};
