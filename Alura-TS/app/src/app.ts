import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

const boataoImporta = document.querySelector('#botao-importa');

if(boataoImporta){
    boataoImporta.addEventListener('click',()=>{
        controller.importaDados();
    })
}else {
    throw Error('Botao importa não foi encontrado');
}

