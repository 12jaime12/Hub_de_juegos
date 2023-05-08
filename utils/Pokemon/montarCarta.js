import { templateCarta } from "./pokemonCard";
import { changeBackground } from "./pokemonTipos";

export const montarCarta = (data) => {
  document.querySelector(".pokemonGallery").innerHTML = "";
  data.forEach((element) => {
    document.querySelector(".pokemonGallery").innerHTML +=
      templateCarta(element);
  });
  changeBackground();
};
