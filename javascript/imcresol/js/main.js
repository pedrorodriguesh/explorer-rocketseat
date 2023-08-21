// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')  // aqui estou pegando o input do HTML, porém sem o valor inserido.

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'), 
    message: document.querySelector('.modal .title'),    // aqui eu transformei as variáveis que estavam definidas e coloquei elas como propriedades dentro de um objeto. Object Literal.
    buttonClose: document.querySelector('.modal .close'), 

    open: function() { // aqui é a mesma coisa que lá embaixo, lá embaixo no close é apenas um shorthand.
        Modal.wrapper.classList.add('open') // aqui estou definindo essa função open() para clarear as coisas = Modal(objeto).wrapper(propriedade).classList.add('open'). Ai eu chamo tudo isso lá embaixo só com: !!Modal.open()!!
    },
    close() { // aqui é a mesma coisa que eu colocar: close: function() {}. Apenas um shorthand presente no ES6.
        Modal.wrapper.classList.remove('open')
    },
}

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value // aqui embaixo eu estou pegando o valor da variável declarada acima, o conteúdo do input. (!!Usa o .value!!)

    const result = IMC(weight,height)
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open()
    
}

Modal.buttonClose.onclick = function() {
    Modal.close()
}

function IMC (weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
