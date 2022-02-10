class Humano {
    constructor(nome, dataNascimento, CPF, Telefone, Celular, Pis, Estuda){

        this._nome = nome;
        this._dataNascimento = dataNascimento;
        this._CPF = CPF;
        this._Telefone = Telefone;
        this._Celular = Celular;
        this._Pis = Pis;
        this._Estuda = Estuda;
    }

    ////////////////////////////////////////////

    get aNome (){
        return this._nome.value
    }


    set aNome (setNome){         

        const splitNome = setNome.split(' ');

        let arrayNome = [];

        for(let contador=0; contador < splitNome.length; contador++){
            let index = splitNome[contador];
            let zeroIndex = index[0].toUppercase();

            arrayNome.push(zeroIndex)

        }

        this._nome = arrayNome.join(' ')

    }

    ////////////////////////////////////////////



    get aDataNascimeno (){

        return this._dataNascimento.value
    }

    set aDataNascimeno (setDataNascimento){

        const reverseDataNascimento = setDataNascimento.reverse();

        this._dataNascimento = reverseDataNascimento

    }


    ////////////////////////////////////////////

    get aCPF (){
        return this._CPF.value
    }



    set aCPF (setCPF){

        const splitCPF = setCPF.split('').replece(/./g).join(' ');

        this._CPF = splitCPF

    }
    ////////////////////////////////////////////

    get aTelefone (){

        return this._Telefone.value
    }



    set aTelefone (setTelefone){

        const splitTelefone = setTelefone.split('').replece(/-/g).join(' ');

        this._Telefone = splitTelefone

    }

    ////////////////////////////////////////////

    get aCelular (){

        return this._Celular.value
    }



    set aCelular (setCelular){

        const splitCelular  = setCelular.split('').replece(/-/g).join(' ');

        this._Celular  = splitCelular 

    }

    ////////////////////////////////////////////

    get aPis (){

        return this._Pis.value
    }



    set aPis (setPis){

        const splitPis  = setPis.split('').replece(/./g).join(' ');

        this._Pis = splitPis 

    }

    ////////////////////////////////////////////

    get aEstuda (){

        return this._Estuda.checked
    }



    set aEstuda (setEstuda){

        this._Estuda = setEstuda

        if(setEstuda === true){

            return "Estudante: 'Sim' "
        }
        return "Estudante: 'Não'"


    }



}

export default Humano
