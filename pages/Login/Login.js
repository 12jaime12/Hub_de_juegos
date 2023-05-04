import { MainControler } from "../../utils/route";
import "./Login.css";

// -----> 1) Funcion de template

const template = () => `
<div class="divLogin">
  <input id="inputLogin" type="text" placeholder="Nombre"/>
  <button id="buttonLogin">Login</button>
</div>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {
  const buttonLogin = document.querySelector("#buttonLogin");
  buttonLogin.addEventListener("click", () => {
    const input = document.querySelector("#inputLogin");
    localStorage.setItem("user", input.value);
    if (localStorage.getItem("user"))
      document.querySelector("#ulHeader").style.display = "flex";
    MainControler();
  });
};

// ----> 3) Pintar
export const printTemplate = () => {
  if (!localStorage.getItem("user"))
    document.querySelector("#ulHeader").style.display = "none";
  document.querySelector("main").innerHTML = template();
  addListeners();
};
