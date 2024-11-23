import Personagem from "./personagem";

export default class Armadura{
    Defesa : number = 0;
    Nome : string = '';
    Descricao :string = '';

    constructor(defesa :number, Nome: string, Descricao :string)
    {
        this.Defesa = defesa
        this.Nome = Nome
        this.Descricao= Descricao
    }

    
}