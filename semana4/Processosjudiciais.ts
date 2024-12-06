abstract class processos_judiciais_api
{
    private readonly apiurl :string = "http://localhost:5555"

    static buscarProcessosPorCnpj(cnpj: string)
    {
        const url = "http://localhost:5555/processos/" + cnpj
    }
}