export default class Arma
{
    private nome_arma: string = '';

    dano: number = 0;

    private descricao: string = '';

    constructor(nome: string, dano: number = 0, descricao: string)
    {
        this.nome_arma = nome
        this.dano = dano
        this.descricao = descricao
    }

    getNome(){console.log(`${this.nome_arma}`)}
    getDano(){return this.dano}
    getDescricao(){return `${this.descricao}`}

    setDano(dano: number)
    {
        if(dano < 0)
            {
                console.log('essa arma será altamente ineficaz')
            }
        else if(dano = 0)
            {
                console.log('essa arma é ineficaz')
            }

        this.dano = dano
    }
}

