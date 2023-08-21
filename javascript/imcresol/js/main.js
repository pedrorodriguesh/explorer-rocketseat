import { Modal } from './modal.js' // importando o Modal do outro arquivo.

// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')  // aqui estou pegando o input do HTML, porém sem o valor inserido.

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value // aqui embaixo eu estou pegando o valor da variável declarada acima, o conteúdo do input. (!!Usa o .value!!)

    const result = IMC(weight,height)
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open()
}

function IMC (weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
