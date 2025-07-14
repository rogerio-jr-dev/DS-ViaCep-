

function State(){
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

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');
console.log(state);
}
