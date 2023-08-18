let randomNumber = Math.round(Math.random() * 10)  // função para gerar o número aleatório. O Math.round arredondo o número e o Math.random gera número aleatório entre 0 e 1, por isso o * 10 ali, para aumentar para  entre 0 e 10. 

let xAttempts = 1 // variável de controle de número de tentativas.

const tryy = document.querySelector("#tryy")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")  // aqui foi a criação de 2 variáveis para guardar a seleção do html pois usaria várias vezes.

//callback function
function handleTryClick(event){  // função tranquila, vai executar o bloco de código abaixo quando for chamada com o click no html.

    event.preventDefault() // aqui é pra evitar que o formulário recarregue a página "preventDefault()"

    const inputNumber = document.querySelector("#inputNumber") // aqui estou pegando o input do html.

    if(Number(inputNumber.value) == randomNumber) { // além de pegar o input, preciso usar o .value para acessar o valor dele.
        screen1.classList.add("hide")
        screen2.classList.remove("hide") // aqui com o .classList eu acesso as classes de uma determinada tag HTML, então adiciono ou removo a classe quando a função é ativada.

        document.querySelector(".screen2 h2").innerText = `Guessed in ${xAttempts} attempts` // aqui o .innerText = altera o conteúdo do <h2> do HTML.
    }

    if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0){
        alert('Insira um número váido!')
    }

    inputNumber.value = ""
    xAttempts++
}

function again(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

// Events


tryy.addEventListener('click', handleTryClick) // Essa linha de código é EXATAMENTE a mesma coisa que colocar o "onclick" lá no HTML, que por sinal, é bem mais fácil de enxergar e entender.


