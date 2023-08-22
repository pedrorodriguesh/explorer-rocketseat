import * as el from "./elements.js"
import state from "./state.js"
import * as timer from './timer.js'

//adicionando 5 minutos.
export let minutes = Number(el.minutes.textContent)
const plus = document.getElementById('plus')
plus.addEventListener('click', () => {
    minutes = minutes + 5
    
    if(minutes > 60){
        minutes = 60
    }

    
    timer.updateDisplay(minutes)
})

//removendo 5 minutos.
const minus = document.getElementById('minus')
minus.addEventListener('click', () => {
    minutes = minutes - 5

    if(minutes < 0){
        minutes = 0
    }


    timer.updateDisplay(minutes)
})


const start = document.getElementById('start')
start.addEventListener('click', () => {
    state.isRunning = true
})