import axios from 'axios'
import { Address } from 'cluster';

export default class viacep
{

    public static async buscarCep(cep: string)
    {
        return axios
        .get(`https://viacep.com.br/ws/${cep}/json`)
        .then((response) => {
            return <Address>response.data;
          })
        .catch(() => { throw new Error('ocorreu algum erro!')})
            
        
    }
}