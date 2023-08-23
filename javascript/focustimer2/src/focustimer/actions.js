import * as el from "./elements.js"
import state from "./state.js"
import * as timer from './timer.js'
import * as sound from './sounds.js'

//adicionando 5 minutos.
export let minutes = Number(el.minutes.textContent)

const plus = document.getElementById('plus')
plus.addEventListener('click', () => {
    minutes = minutes + 5
    
    if(minutes > 60){
        minutes = 60
    }

    if(state.isRunning === true){
        return
    }

    sound.buttonPressAudio.play()
    timer.updateDisplay(minutes)
})

//removendo 5 minutos.
const minus = document.getElementById('minus')
minus.addEventListener('click', () => {
    minutes = minutes - 5

    if(minutes < 0){
        minutes = 0
    }

    if(state.isRunning === true){
        return
    }

    sound.buttonPressAudio.play()
    timer.updateDisplay(minutes)
})

//start
const start = document.getElementById('start')
start.addEventListener('click', () => {
    if(minutes === 0){
        return
    }
    
    state.isRunning = true
    timer.countdown()
    sound.buttonPressAudio.play()
})

//stop
const stop = document.getElementById('stop')
stop.addEventListener('click', () => {
    state.isRunning = false
    minutes = 0

    timer.updateDisplay(0, 0)
    sound.buttonPressAudio.play()

})