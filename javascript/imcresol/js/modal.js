export const Modal = {
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

Modal.buttonClose.onclick = function() {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
    
    if(event.key === 'Escape') {
        Modal.close()
    }
}