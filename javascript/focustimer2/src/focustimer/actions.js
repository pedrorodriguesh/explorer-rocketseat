import * as el from "./elements.js"
import state from "./state.js"
import * as timer from './timer.js'

export let minutes = Number(el.minutes.textContent)
const plus = document.getElementById('plus')

plus.addEventListener('click', () => {
    minutes = minutes + 5
    
    if(minutes > 60){
        return
    }

    el.minutes.textContent = minutes
    timer.updateDisplay(minutes)
})


const start = document.getElementById('start')
start.addEventListener('click', () => {
    state.isRunning = true
})