
import { Expect, ExpectExtends } from "./types/validateTypes";

// Agora o IFullUser possue os campos de IUserWorker e IUserStudent
interface IFullUser extends IUserWorker, IUserStudent {
}

// Validações:
type casosDeValidacao = [
  Expect<ExpectExtends<IUserWorker, IFullUser>>, // IFullUser possue os campos do Worker
  Expect<ExpectExtends<IUserStudent, IFullUser>>, // IFullUser possue os campos do Student
]

// Auxiliares e comparações:

interface IUserWorker {
  name: string
  work: string
}

interface IUserStudent {
  name: string
  age: number
}
