
import { Equal, Expect, ExpectExtends } from "./types/validateTypes";

//Agora a tipagem listType , aplicada como array em list_of_packs, aceita valores numéricos e de texto

type listType = number | string

// Validações :

const list_of_packs: listType[] = []
list_of_packs.push('um')
list_of_packs.push(2)
list_of_packs.push(2.5)
