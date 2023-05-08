import { MainControler } from "../route";

export const resultadoFinal = (palabra) => {
  const cuadricula = document.querySelector(".Cuadricula");
  cuadricula.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.innerHTML = palabra;
  const button = document.createElement("button");
  button.innerHTML = "Play Again";
  button.setAttribute("id", "retray");
  const div = document.querySelector(".rayaDiv2");
  div.append(h1, button);
  addEventListener();
};

const addEventListener = () => {
  const button = document.querySelector("#retray");
  button.addEventListener("click", () => {
    MainControler("Raya");
  });
};
