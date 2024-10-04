import { Comparavel } from "./comparavel.js";
import { Imprimivel } from "./imprimivel.js";

export interface Modelo<Type> extends Imprimivel,Comparavel<Type> {

}
