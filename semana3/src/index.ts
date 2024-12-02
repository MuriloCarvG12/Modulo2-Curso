let lista_funcionarios :Array <Funcionario>= []

class Funcionario
{
    id :number = 0
    nome :string = ''
    cargo :string = ''
    taxaHoraria :number = 0
    horasTrabalhadas :number = 0 
    salario :number = 0;
    inss :number = 0;
 
    constructor(p_id :number, p_nome :string, p_cargo :string, p_taxaHoraria :number)
    {
        this.id = p_id
        this.nome = p_nome
        this.cargo = p_cargo
        this.taxaHoraria = p_taxaHoraria
        
    }

    registrarhoras(numero_horas :number)
    {
        this.horasTrabalhadas = numero_horas
    }

    calcularsalario()
    {
        this.salario =  this.horasTrabalhadas * this.taxaHoraria
    }

    gerar_relatoriopagamento()
    {
        console.log(`-- pagamento do funcionario ${this.nome} --`)
        console.log(`-- cargo ${this.cargo} --`)
        console.log(`-- taxa horaria ${this.taxaHoraria} --`)
        console.log(`-- horas trabalhadas ${this.horasTrabalhadas} --`)
        console.log(`-- salario ${this.salario} --`)
        console.log(`-- inss ${this.inss} --`)
    }

    calcularinss()
    {
            this.inss = 0;
            let salario = this.salario
            
            if(salario < 1412)
                {
                    this.inss = salario * (7.5/100)
                }
            else if(salario >= 1412 && salario < 2666.68)
                {
                    this.inss = salario * (9/100)
                }
            else if(salario >= 2666.68 && salario < 4000)
                {
                    this.inss = salario * (12/100)
                }
            else if(salario >= 4000)
            {
                this.inss = salario * (14/100)
            }

            if(this.inss > 908.85)
            {
                this.inss = 908.85
            }
    }
    }

function add_funcionario(p_id :number, p_nome :string, p_cargo :string, p_taxaHoraria :number, horasTrabalhadas :number)
{
    
    let funcionario = new Funcionario(p_id , p_nome , p_cargo , p_taxaHoraria)
    lista_funcionarios.push(funcionario)
    
}

function registrar_horas(p_id :number, horasTrabalhadas :number)
{
    lista_funcionarios.map((funcionario) => {
        if(funcionario.id == p_id)
            {
                funcionario.registrarhoras(horasTrabalhadas)
             }
    })
}

function calcular_salario(p_id :number)
{
    lista_funcionarios.map((funcionario) => {
        if(funcionario.id == p_id)
            {
                funcionario.calcularsalario()
            }
    })
}

function calcular_inss(p_id :number)
{
    return lista_funcionarios.map((funcionario) => {
            if (funcionario.id == p_id) {
            funcionario.calcularinss()
        }
    })
}

function gerar_relatoriopagamento(p_id :number)
{
    return lista_funcionarios.map((funcionario) => {
            if (funcionario.id == p_id) {
            funcionario.gerar_relatoriopagamento()
        }
    })
}

add_funcionario(1,'robert','potato farmer', 30, 400)
registrar_horas(1, 50)
calcular_salario(1)
calcular_inss(1)
gerar_relatoriopagamento(1)
