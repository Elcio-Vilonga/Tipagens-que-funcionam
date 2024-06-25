
import { Equal, Expect } from "./types/validateTypes";

// Usou-se a função TS Omit em IExtendedWithoutFields 
//para fazer dele uma versão de  IExtendedUser que seja igual a  ISiblingsUser

interface IExtendedUser { // Interface não alterada
  siblings: number
  rating: number
  applications: string[]
}

interface ISiblingsUser { // Interface não alterada
  siblings: number
}

// Interface alterada : 
interface IExtendedWithoutFields extends Omit<IExtendedUser, 'rating' | 'applications'> {}


// Validações :

type casosDeValidacao = [

  Expect<Equal<ISiblingsUser, IExtendedWithoutFields>> //  compara IFullUser ao Extendes com suas exceções

]

