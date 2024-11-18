require("prompt-sync")



const lista_funcionarios = []

function adicionar_funcionario(id, nome, cargo, taxa_horaria)
{
        let funcionario =
        {
            id,
            nome,
            cargo,
            taxa_horaria,
            horas_trabalho: []
        }

        lista_funcionarios.push(funcionario)
}

adicionar_funcionario(1, 'teste', 'sei la', 10)
adicionar_funcionario(2, 'teste2', 'sei la2', 102)





function adicionar_horas(id, horas)
{
    lista_funcionarios.forEach(
        (item) =>{
            if(item.id == id)
                {
                    item.horas_trabalho.push(horas);
                }

        })
}

adicionar_horas(1, 10)



function calcular_salario(funcionario)
{
    let salario = 0;
    hora = funcionario.taxa_horaria 
    tempo = funcionario.horas_trabalho

    salario = hora * tempo;
    return salario
}

let salario = calcular_salario(lista_funcionarios[0])

function calcular_inss(salario)
{
    let inss
            if(salario < 1412)
                {
                    inss = salario * (7,5/100)
                }
            else if(salario >= 1412 && salario < 2666,68)
                {
                    inss = salario * (9/100)
                }
            else if(salario >= 2666,68 && salario < 4000)
                {
                    inss = salario * (12/100)
                }
            else if(salario >= 4000)
            {
                inss = salario * (14/100)
            }

            if(inss > 908,85)
                {inss = 908.85}

    return inss
}

function gerarRelatorioPagamento(id)
{

    let nome_funcionario = lista_funcionarios[id].nome

    let cargo_funcionario = lista_funcionarios[id].cargo

    let horas_trabalho_funcionario = lista_funcionarios[id].horas_trabalho

    let salario = calcular_salario(lista_funcionarios[id])

    let salario_inss = calcular_inss(salario)

    let salario_liquido = salario - salario_inss


    //imprimindo o relatorio

    console.log("-------- RELATÓRIO DE PAGAMENTOS ---------- \n");
    console.log(`Nome: ${nome_funcionario}`)
    console.log(`Cargo: ${cargo_funcionario}`)
    console.log(`Total de horas trabalhadas: ${horas_trabalho_funcionario}`)
    console.log(`Valor do INSS: R$ ${salario_inss }`)
    console.log(`Salário bruto: R$ ${salario}`)
    console.log(`Salário líquido: R$ ${salario_liquido }`)
    console.log("---------------- \n")


}

gerarRelatorioPagamento(0)