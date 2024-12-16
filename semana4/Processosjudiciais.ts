import axios from "axios";

interface Documento {
  tipo: string
  data_envio: string
}

interface Audiencia {
  local: string;
  data: string;
  tipo: string
}

interface ProcessoJudicial {
  id: number;
  nome: string;
  cnpj: string;
  processo: string;
  descricao: string;
  tribunal: string;
  data_abertura: string;
  status: string;
  advogado: string;
  valor_requerido: number;
  prazo_dias: string;
  em_audiencia: boolean;
  testemunhas: string[]
  audiencia: Audiencia
  documentos: Documento[]
}

export default class ProcessosJudiciaisAPI {
  private static readonly apiUrl = "http://localhost:5555";

  static async buscarProcessosPorCnpj(cnpj: string) {
    return axios
      .get<ProcessoJudicial[]>(`${this.apiUrl}/processos?cnpj=${cnpj}`)
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        throw new Error("Erro ao buscar processos judiciais");
      });
  }

  static async buscarProcessoPorId(id: string) {
    return axios.get<ProcessoJudicial>(`${this.apiUrl}/processos/${id}`)
    .then((response) => {
      return response.data
    })
    .catch(() => {
      throw new Error("Erro ao buscar processo judicial");
    });
  }
}