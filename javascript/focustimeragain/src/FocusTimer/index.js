import state from './state.js' // estado da aplicação.

export function start (minutes, seconds){ // exportando a função start. 
    state.minutes = minutes
    state.seconds = seconds
}
