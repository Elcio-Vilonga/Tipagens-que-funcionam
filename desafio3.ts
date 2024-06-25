
import { Equal, Expect } from "./types/validateTypes";

// Agora a função duplicarNumero se encaixe na tipagem myFunction.

type myFunction = (value: number) => number

// Validações :

type casosDeValidacao = [
  Expect<Equal<typeof duplicarNumero, myFunction>> // compara os tipos das funções
]


// Aqui estão os auxiliares e comparações:

function duplicarNumero(value: number) {
  return value * 2
}
