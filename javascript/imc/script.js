const popup = document.querySelector('.modal-wrapper') // aqui eu to trasnformando em variável só pra facilitar ali na frente, não é necessário 
const error = document.querySelector('.alert-error')

function calculate(event){
    event.preventDefault() // aqui é pra previnir que o form do HTML recarregue a página

    let weight = document.querySelector('#weight') // pegando o peso do input
    let cm = document.querySelector('#cm') // pegando a altura em cm do input
    let height = Number(cm.value / 100).toFixed(2) // transformando a altura em cm em altura em metros.
    let imc = Number(weight.value / (height*height)).toFixed(2) // cálculo do IMC, sempre usando o .value pra pegar o valor do input.

    if(isNaN(imc)){ // função isNaN vai checar se é o número ou não.
        error.classList.add('open')
    } else{

        error.classList.remove('open')
        
        popup.classList.add("open") // adicionando a class open ao popup
    
        document.querySelector(".modal-wrapper h2").innerText = `Seu IMC é de ${imc}` // mudando o conteúdo do h2 do popup.
    }

}

function back(){
    popup.classList.remove("open")
}







