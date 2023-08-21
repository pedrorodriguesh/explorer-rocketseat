let weight = document.querySelector('#weight')
var cm = document.querySelector('#height')

cm = Number(cm)
weight = Number(weight)

let height = Number(cm / 100).toFixed(2)
height = Number(height)

function calculate(){
    alert(`Seu IMC é ${cm.value}`)
}





