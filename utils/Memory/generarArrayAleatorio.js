import { numberRandom } from "../numeroAleatorio";
import { pintarCartasMemory } from "./pintarCartasMemory";

export const arrayAleatorio = (array1) => {
  const length = array1.length;
  let arrayAux = [];
  for (let index = 0; index < length; index++) {
    const index1 = numberRandom(array1);
    const pos1 = array1[index1];
    arrayAux.push(pos1);
    array1.splice(index1, 1);
  }
  console.log(arrayAux);
  pintarCartasMemory(arrayAux);
};
