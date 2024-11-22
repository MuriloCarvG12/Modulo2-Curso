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

    getNome(){console.log(`${this.nome}`)}
    getDano(){return this.dano}
    getDescricao(){return `${this.descricao}`}

    setNome(nome: string){this.nome = nome}
    setDano(dano: number){this.dano = dano}
    setDescricao(descricao: string){this.descricao = descricao}
}

let spada = new Arma('spada', 1000, 'fogo')

class Personagem
{
    nome :string = ''
    vida :number = 0
    forca :number = 0
    arma :null = null 

    getNome(){}
    getVida(){}
    getForca(){}
    getArma(){}

    setNome(nome :string){}
    setVida(vida :number){}
    setForca(forca :number){}
    setArma(arma :null | Arma){}

}

let alguem = new Personagem()