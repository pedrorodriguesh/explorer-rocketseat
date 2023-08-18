const randomNumber = Math.round(Math.random() * 10)  // função para gerar o número aleatório. O Math.round arredondo o número e o Math.random gera número aleatório entre 0 e 1, por isso o * 10 ali, para aumentar para  entre 0 e 10.
let xAttempts = 1 // variável de controle de número de tentativas.

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")  // aqui foi a criação de 2 variáveis para guardar a seleção do html pois usaria várias vezes.

//callback function
function handleTryClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts} tentativas`

    }
    inputNumber.value = ""
    xAttempts++
}

// Events

const tryy = document.querySelector("#tryy")
const again = document.querySelector("#again")



tryy.addEventListener('click', handleTryClick)
again.addEventListener('click', function(){

    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 1

})