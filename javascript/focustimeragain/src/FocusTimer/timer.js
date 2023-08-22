// Aqui é a lógica que vai mudar os segundos e minutos da página. 

import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"

export function countdown(){
    if(!state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)  // aqui estou criando a variável minutos e segundos e transformando em Number.
    let seconds = Number(el.seconds.textContent)

    seconds-- // decrementando os segundos

    if(seconds < 0){ // se os segundos chegarem a zero, volta pra 59 e diminui 1 minuto.
        seconds = 59
        minutes--
    }

    if(minutes < 0){ // zerou o timer a aplicação para de rodar
        reset()
        return
    }

    updateDisplay(minutes, seconds)
    
    setTimeout(() => countdown(), 1000) // 1000ms > 1s.
} // função que recebe outra função pra ser executada depois de um tempo é a callback function.

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}