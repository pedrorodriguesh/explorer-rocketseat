let numberOne = prompt('Insira o primeiro valor:')
let numberTwo = prompt('Insira o segundo valor:')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
alert (`A soma dos dos valores é ${sum}`)

let sub = numberOne - numberTwo
alert (`A subtração dos valores é ${sub}`)

let multi = numberOne * numberTwo
alert (`A multiplicação entre os valores é ${multi}`)

let div = numberOne / numberTwo
alert (`A divisão entre os dois valores é ${div}`)

let rest = numberOne % numberTwo
alert (`O resto da divisão entre os dois valores é ${rest}`)


if(sum % 2 == 0){
    alert ('A soma dos valores é PAR')
} else {
    alert ('A soma dos valores é IMPAR')
}


if(numberOne == numberTwo){
    alert ('Os 2 números inseridos são iguais!')
} else{
    alert ('Os 2 valores inseridos são diferentes!')
}