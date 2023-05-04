import { numberRandom } from "./HangmanWord";

const Palabras = ["hola", "perro", "gato", "messi", "casa", "conejo"];

export const palabraRandom = () => {
  const palabra = Palabras[numberRandom(Palabras)];
  let arrayPalabra = palabra.split("");
  return [arrayPalabra, palabra];
};
