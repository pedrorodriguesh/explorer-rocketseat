import state from './state.js' // estado da aplicação.
import * as events from './events.js' 

export function start (minutes, seconds){ // exportando a função start. 
    state.minutes = minutes
    state.seconds = seconds

    events.registerControls()
}
