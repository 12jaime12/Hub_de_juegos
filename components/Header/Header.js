import { changeColor } from "../../utils/color";
import { MainControler } from "../../utils/route";
import "./Header.css";

const template = () => `
  <img
    id="logo"
    src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1682975936/astronave_efalur.png"
    alt="logo"
  />
  <ul id="ulHeader">
  <li>
        <img 
            id="color_change"
            src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1682976016/reciclar_cztfbo.png"
            alt="cambiar color"
        />
    </li>
    <li>
        <img 
            id="cerrarSesion"
            src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1682976358/salida-de-emergencia_fgwlle.png"
            alt="cerrar sesion"
        />
    </li>
  </ul>
`;

const addListener = () => {
  const inicio = document.querySelector("#logo");
  inicio.addEventListener("click", () => {
    MainControler();
  });

  const color = document.querySelector("#color_change");
  color.addEventListener("click", () => {
    const color = changeColor();
    const main = document.querySelector("main");
    main.style.background = color;
  });

  const closeSesion = document.querySelector("#cerrarSesion");
  closeSesion.addEventListener("click", () => {
    localStorage.removeItem("user");
    MainControler("Login");
    if (!localStorage.getItem("user"))
      document.querySelector("#logo").setAttribute("disabled", true);
  });
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
  addListener();
};
