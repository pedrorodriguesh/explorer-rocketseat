import * as sounds from './focustimer/sounds.js'
import * as el from './focustimer/elements.js'
import * as actions from './focustimer/actions.js'
import state from './focustimer/state.js'
import * as timer from './focustimer/timer.js'

timer.updateDisplay()
timer.countdown()

//buttons.
const forestBtn = document.getElementById('tree')
forestBtn.addEventListener('click', () => {
    sounds.forestSound.play()
    sounds.rainSound.pause()
    sounds.forestSound.loop = true
})

const rainBtn = document.getElementById('rain')
rainBtn.addEventListener('click', () => {
    sounds.rainSound.play()
    sounds.forestSound.pause()
    sounds.rainSound.loop = true

})



