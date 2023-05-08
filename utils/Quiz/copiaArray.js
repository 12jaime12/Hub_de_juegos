import {
  preguntasCapitales,
  preguntasFormula1,
  preguntasFutbol,
} from "../../data/quiz.data";
import { pintarPregunta } from "./PintarPregunta";

let array = [];
export const copiaArray = (palabra) => {
  if (palabra === "capitales") {
    array = [...preguntasCapitales];
    pintarPregunta(array);
  } else if (palabra === "formula1") {
    array = [...preguntasFormula1];
    pintarPregunta(array);
  } else if (palabra === "futbol") {
    array = [...preguntasFutbol];
    pintarPregunta(array);
  }
};
