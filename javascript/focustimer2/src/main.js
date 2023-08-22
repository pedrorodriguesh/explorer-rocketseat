import * as sounds from './focustimer/sounds.js'
import * as el from './focustimer/elements.js'
import * as actions from './focustimer/actions.js'
import state from './focustimer/state.js'
import * as timer from './focustimer/timer.js'

//buttons.
const forestBtn = document.getElementById('tree')
forestBtn.addEventListener('click', () => {
    sounds.forestSound.play()
    sounds.forestSound.loop = true
})

const rainBtn = document.getElementById('rain')
rainBtn.addEventListener('click', () => {
    sounds.rainSound.play()

})

updateDisplay()

function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}


