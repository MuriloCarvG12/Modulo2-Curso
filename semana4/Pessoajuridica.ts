class PessoaJuridica
{
    razaoSocial: string // razao social da empresa

    nomeFantasia: string

    cnpj :string

    atividadePrincipal :Array <string>

    isMEI :boolean //Indica se a empresa é MEI (Microempreendedor Individual).

    inscricaoEstadual :string //Inscrição estadual da empresa.

    endereco :string

    telefone :string

    email :string

    dataDeFundacao :Date = new Date

    constructor(_razaoSocial: string , _nomeFantasia: string, _cnpj :string)
    {
        this.razaoSocial = _razaoSocial
        this.nomeFantasia = _nomeFantasia
        this.cnpj = _cnpj
    }

    get_razaoSocial()
    {
        return this.razaoSocial
    }

    get_nomeFantasia()
    {
        return this.nomeFantasia
    }

    get_cnpj()
    {
        return this.cnpj
    }

    get_atividadePrincipal()
    {
        return this.atividadePrincipal
    }

    get_isMei()
    {
        return this.isMEI
    }

    get_inscricaoEstadual()
    {
        return this.inscricaoEstadual
    }

    get_endereco()
    {
        return this.endereco
    }

    get_telefone()
    {
        return this.telefone
    }

    get_email()
    {
        return this.email
    }

    get_dataDeFundacao()
    {
        return this.dataDeFundacao
    }

    set_atividadePrincipal(_atividadePrincipal :Array <string>)
    {
        this.atividadePrincipal = _atividadePrincipal
    }

    set_isMei(_isMEI :boolean)
    {
        this.isMEI = _isMEI
    }

    set_inscricaoEstadual(_inscricaoEstadual :string)
    {
        this.inscricaoEstadual = _inscricaoEstadual
    }

    set_endereco(_endereco :string)
    {
        this.endereco = _endereco
    }

    set_telefone(_telefone :string)
    {
        this.telefone = _telefone
    }

    set_email(_email :string)
    {
        this.email = _email
    }

    set_dataDeFundacao(_dataDeFundacao :Date)
    {
        this.dataDeFundacao = _dataDeFundacao
    }

}

let teste = new PessoaJuridica('teste', 'teste', 'teste')