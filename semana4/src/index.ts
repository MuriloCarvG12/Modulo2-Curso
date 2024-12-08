
import PessoaJuridica from ".././pessoajuridica";
import ProcessosJudiciaisAPI from ".././processosjudiciais";
import viacep from ".././viacep";

async function run() {
  const microsoft = new PessoaJuridica(
    "Microsoft",
    "Micro soft",
    "12.345.678/0001-00"
  );

  const processosDoCnpj = await ProcessosJudiciaisAPI.buscarProcessosPorCnpj(
    microsoft.get_cnpj()
  );

  const processo = await ProcessosJudiciaisAPI.buscarProcessoPorId("1")
  console.log(processo)

  const endereco = await viacep.buscarCep(microsoft.get_cnpj())
  console.log(endereco)

}

run()