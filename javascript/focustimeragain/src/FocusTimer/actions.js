//aqui estão separados as ações que aconteceram ao clicar nos botões.

import state from "./state.js"
import * as timer from "./timer.js"
import * as el from './elements.js'

export function toggleRunning(){ // função para colocar o "running" no <html>
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function set(){ // função para conseguir editar o valor dos minutos que o usuário deseja.
    el.minutes.setAttribute('contenteditable', true) // adicionando o atributo "contenteditable" no 
    el.minutes.focus()
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')
}