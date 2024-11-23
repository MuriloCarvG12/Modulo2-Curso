import Arma from './classes/arma'
import Personagem from './classes/personagem'
import Inimigo from './classes/inimigo'

let personagem = new Personagem('Rupert', 100);

let arma = new Arma('Spada', 20, 'Afiada');

let inimigo = new Inimigo('Joe', 100);

personagem.setArma(arma);

personagem.atacar_inimigo(inimigo)

inimigo.setArma(arma)

inimigo.atacar(personagem)


console.log(inimigo.getVida())
console.log(personagem.getVida())
