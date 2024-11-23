import Arma from './arma.ts'

export default class Personagem 
{
    nome_personagem :string = ''
    vida :number = 0
    forca :number = 0
    arma :Arma | null = null 

    constructor(nome_personagem :string, vida: number)
    {
        this.nome_personagem = nome_personagem
        this.vida = vida;
    }

    getNome()
    {
        return this.nome_personagem
    }
    getVida()
    {
        return this.vida
    }
    getForca()
    {
        return this.forca
    }
    getArma()
    {
        return this.arma
    }

    

    setNome(nome :string)
    {
        this.nome_personagem = nome
    }
    setVida(vida :number)
    {
        this.vida = vida
    }
    setForca(forca :number)
    {
        this.forca = forca
    }
    setArma(arma  :Arma)
    {
        this.arma = arma
    }

    atacarAlvo(inimigo :string)
    {

    }

    receberDano(dano: number)
    {
        this.setVida(this.vida - dano)
        if(this.vida < 0)
            {
                console.log('capotou!')
            }
    }

    equiparArma(arma: Arma)
    {
        this.arma = arma
    }
    calcularAtaque(dano: number)
    {

    }
}

