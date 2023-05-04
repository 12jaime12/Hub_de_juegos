import "./3Raya.css";

// -----> 1) Funcion de template

const template = () => `3 en raya`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
