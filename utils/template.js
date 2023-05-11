import { printTemplate as Header } from "../components/Header/Header";
import { printTemplate as Footer } from "../components/Footer/Footer";

export const initTemplate = () => {
  const app = document.querySelector("#app");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  app.append(header, main, footer);
  Header();
  initTemplate();
  Footer();
};
