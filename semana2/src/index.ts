class Arma
{
    private nome: string = '';

    dano: number = 0;

    private descricao: string = '';

    constructor(nome: string, dano: number, descricao: string)
    {
        this.nome = nome
        this.dano = dano
        this.descricao = descricao
    }
}