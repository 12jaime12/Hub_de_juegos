import { Pecados } from "../../data/memory.data";
import { arrayAleatorio } from "./generarArrayAleatorio";

export const copiaArrayMemory = () => {
  let array1 = [...Pecados, ...Pecados];
  arrayAleatorio(array1);
};
