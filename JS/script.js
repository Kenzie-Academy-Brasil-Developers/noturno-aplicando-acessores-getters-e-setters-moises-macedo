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

    get nome (){
        return this._nome
    }


    set nome (nome){     

         

        const splitNome = nome.split(' ');

        let arrayNome = [];

        for(let contador=0; contador < splitNome.length; contador++){
            let index = splitNome[contador];
            let zeroIndex = index[0].toUppercase();

            arrayNome.push(zeroIndex)

        }

        this._nome = arrayNome.join(' ')
        
    }

    ////////////////////////////////////////////



    get dataNascimeno (){

        return this._dataNascimento
    }

    set dataNascimeno (dataNascimento){

        const reverseDataNascimento = dataNascimento.reverse();

        this._dataNascimento = reverseDataNascimento

    }


    ////////////////////////////////////////////

    get CPF (){
        return this._CPF.value
    }



    set CPF (CPF){

        const cpfTratado = this._CPF.split('');

        let array = [];

        for(let contador = 0; contador <cpfTratado.length; contador++){

            let index = cpfTratado[contador];
            if(index !== "." || index !== "-"){
                array.push(index)
            }

        }       

        return array.join('')

        

    }
    ////////////////////////////////////////////

    get Telefone (){

        return this._Telefone.value
    }



    set Telefone (Telefone){

        const telefoneTratado = this._Telefone.split('');

        let array = [];

        for(let contador = 0; contador <telefoneTratado.length; contador++){

            let index = telefoneTratado[contador];
            if(index !== "." || index !== "-"){
                array.push(index)
            }

        }       

        return array.join('')

    }

    ////////////////////////////////////////////

    get Celular (){

        return this._Celular.value
    }



    set Celular (Celular){

        const celularTratado = this._Celular.split('');

        let array = [];

        for(let contador = 0; contador <celularTratado.length; contador++){

            let index = celularTratado[contador];
            if(index !== "." || index !== "-"){
                array.push(index)
            }

        }       

        return array.join('')

    }

    ////////////////////////////////////////////

    get Pis (){

        return this._Pis.value
    }



    set Pis (Pis){

        const PisTratado = this._Pis.split('');

        let array = [];

        for(let contador = 0; contador <PisTratado.length; contador++){

            let index = PisTratado[contador];
            if(index !== "." || index !== "-"){
                array.push(index)
            }

        }       

        return array.join('')

    }

    ////////////////////////////////////////////

    get Estuda (){

        return this._Estuda.checked
    }



    set Estuda (Estuda){

        this._Estuda = Estuda

        if(Estuda === true){

            return "Estudante: 'Sim' "
        }
        return "Estudante: 'Não'"


    }



}

let moises = new Humano ('moises', "25/01/1996",'700.000.000-99', '4199999-8888')

console.log(moises)

