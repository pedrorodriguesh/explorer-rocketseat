/* 

    Capturar 2 números e fazer as operações matemáticas de: soma, subtração, multiplicação, divisão e resto da divisão.
*/

alert('Vamos fazer algumas operações!')
let numberOne = prompt('Digite o primeiro número')
let numberTwo = prompt('Digite o segundo número')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)   // aqui eu transformei a string em Number.

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let divi = numberOne / numberTwo
let rest = numberOne % numberTwo


alert('A soma dos 2 números é ' + sum)
alert('A subtração dos 2 números é ' + sub)
alert('A multiplicação entre os 2 números é ' + multi)
alert('A divisão entre os 2 números é ' + divi)
alert('O resto da divisão entre os 2 números é ' + rest)
