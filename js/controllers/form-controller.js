import Adress from '../models/adress.js';

function State(){
    this.adress = new Adress();

    this.btnClear = null;
    this.btnSave = null;

     this.inputCep = null;
     this.inputStreet = null;
     this.inputNumber = null;
     this.inputCity = null;

     this.errorCep = null;
     this.errorNumber = null;

}

const state = new State();

export function init() {
    state.inputCep = document.forms.newAdress.cep;
    state.inputStreet = document.forms.newAdress.street;
    state.inputNumber = document.forms.newAdress.number;
    state.inputCity = document.forms.newAdress.city;

    state.btnClear = document.forms.newAdress.btnClear;
    state.btnSave = document.forms.newAdress.btnSave;

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');

    state.inputNumber.addEventListener('change', hendleInputChanceNumber);
    state.btnClear.addEventListener('click', hendleBtnClearClick)
}
function hendleInputChanceNumber(event){
    if (event.target.value == "") {
        setFormError("number", "Campo requerido");
    }
    else{
        setFormError("number", "");
    }
}

function hendleBtnClearClick(event){
    event.preventDefault();
    clearForm();
}

function clearForm(){
    state.inputCep.value = "";
    state.inputStreet.value = "";
    state.inputNumber.value = "";
    state.inputCity.value = "";

    setFormError("cep", "");
    setFormError("number", "");

    state.inputCep.focus();

}

function setFormError(key, value){
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}