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
    forestBtn.classList.toggle('selected')
    sounds.forestSound.play()
    sounds.rainSound.pause()
    sounds.fireSound.pause()
    sounds.forestSound.loop = true
})

const rainBtn = document.getElementById('rain')
rainBtn.addEventListener('click', () => {
    rainBtn.classList.toggle('selected')
    sounds.rainSound.play()
    sounds.forestSound.pause()
    sounds.fireSound.pause()
    sounds.rainSound.loop = true

})

const fireBtn = document.getElementById('fire')
fireBtn.addEventListener('click', () => {
    fireBtn.classList.toggle('selected')
    sounds.fireSound.play()
    sounds.fireSound.loop = true
    sounds.rainSound.pause()
    sounds.forestSound.pause()
})



