const btnSubmit = document.querySelector('#btnSubmit');

let quantidadeCor = null;
let quantidadePeca = null;

export function renderOrcamento () {

    btnSubmit.addEventListener('click', () => {
        quantidadePeca = document.querySelector('#quantidade');
        quantidadeCor = document.querySelector('#cores');
        console.log(quantidadePeca.value, quantidadeCor.value)
    });

}
