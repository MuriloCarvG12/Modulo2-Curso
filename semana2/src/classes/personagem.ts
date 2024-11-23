import Arma from './arma'

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

    causarDano() {
        if (this.arma === null) {
            return this.forca
        } else {
            return this.forca + this.arma.getDano()
        }
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

    atacar_inimigo(personagem :Personagem)
    {
        const chanceDeAcerto = Math.random(); 
        
        if (chanceDeAcerto < 0.5)  {
            console.log("ataque falhou")
        } else {
            personagem.receberDano(this.causarDano())
        }
    }
}

