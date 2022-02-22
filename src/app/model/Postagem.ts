import { tema } from "./Tema"
import { User } from "./User"

export class Postagem{
    public id: number
    public texto: string
    public titulo: string
    public data: Date
    public usuario: User
    public tema: tema

}