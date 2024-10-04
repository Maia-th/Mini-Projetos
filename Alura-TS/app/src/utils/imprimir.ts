import { Imprimivel } from "../interfaces/imprimivel.js";

export function imprimir(...objetos: Imprimivel[]) {
  for (let obj of objetos) {
    console.log(obj.paraTexto());
  }
}
