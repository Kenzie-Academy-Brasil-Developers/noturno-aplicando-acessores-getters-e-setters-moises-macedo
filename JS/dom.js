import Humano from './script.js'


const body = document.querySelector('body');
const btnSubmit = document.querySelector('#btnSubmit');
const name = document.querySelector("#name");
const birthDate = document.querySelector("#birthDate");
const cpf = document.querySelector("#cpf");
const phone = document.querySelector("#phone");
const cellphone = document.querySelector('#cellphone');
const pis = document.querySelector("#pis");
const studies = document.querySelector("#studies");
const main = document.querySelector('main');

const containerGeral = document.createElement('div');
const containerUsuario = document.createElement('div');



containerGeral.appendChild(main);
containerGeral.appendChild(containerUsuario);
body.appendChild(containerGeral);

containerGeral.classList.add('containerGeral')
main.classList.add('main')


function usuario (){

    
    const ulLista = document.createElement('ul');
    const liName = document.createElement('li');
    const liBirthDate = document.createElement('li');
    const liCpf = document.createElement('li');
    const liPhone = document.createElement('li');
    const liCellphone = document.createElement('li');
    const liPis = document.createElement('li');
    const liStudies = document.createElement('li');

    ///////////////////////////////////////////////////

    ulLista.appendChild(liName);
    ulLista.appendChild(liBirthDate);
    ulLista.appendChild(liCpf);
    ulLista.appendChild(liPhone);
    ulLista.appendChild(liCellphone);
    ulLista.appendChild(liPis);
    ulLista.appendChild(liStudies);
    containerUsuario.appendChild(ulLista);
    

    ///////////////////////////////////////////////////
    containerUsuario.classList.add('containerUsuario')
    ulLista.classList.add('containerLista')
    liName.classList.add('li')
    liBirthDate.classList.add('li')
    liCpf.classList.add('li')
    liPhone.classList.add('li')
    liCellphone.classList.add('li')
    liPis.classList.add('li')
    liStudies.classList.add('li')

    ///////////////////////////////////////////////////




    const valueName = `Nome do funcionário: ${name.value}`;
    const valueBirthDate = `Data de Nascimento: ${birthDate.value}`;
    const valueCpf = `CPF: ${cpf.value}`;
    const valuePhone = `Telefone: ${phone.value}`;
    const valueCellPhone = `Telefone Celular: ${cellphone.value}`;
    const valuePis = `Número do PIS: ${pis.value}`;
    const checkedStudies = `Se estuda: ${studies.checked}`;

    ///////////////////////////////////////////////////

    
    liName.innerText = valueName
    liBirthDate.innerText = valueBirthDate
    liCpf.innerText = valueCpf
    liPhone.innerText = valuePhone
    liCellphone.innerText = valueCellPhone
    liPis.innerText = valuePis
    liStudies.innerText = checkedStudies



}


btnSubmit.addEventListener('click', function(valor) {

    valor.preventDefault();
    usuario ();

    
    
  
 })