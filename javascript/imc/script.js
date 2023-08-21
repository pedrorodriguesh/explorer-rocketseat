const popup = document.querySelector('.modal-wrapper')

function calculate(event){

    event.preventDefault()

    let weight = document.querySelector('#weight')
    let cm = document.querySelector('#cm')
    let height = Number(cm.value / 100).toFixed(2)
    let imc = Number(weight.value / (height*height)).toFixed(2)

    popup.classList.add("open")

    document.querySelector(".modal-wrapper h2").innerText = `Seu IMC é de ${imc}`
}

function back(){
    popup.classList.remove("open")
}





