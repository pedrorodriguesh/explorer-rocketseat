import * as sounds from './focustimer/sounds.js'
import * as timer from './focustimer/timer.js'

timer.updateDisplay()
timer.countdown()

//buttons.
const forestBtn = document.getElementById('tree')
forestBtn.addEventListener('click', () => {
    forestBtn.classList.toggle('selected')
    forestBtn.classList.contains('selected') ? sounds.forestSound.play() : sounds.forestSound.pause()
})

const rainBtn = document.getElementById('rain')
rainBtn.addEventListener('click', () => {
    rainBtn.classList.toggle('selected')
    rainBtn.classList.contains('selected') ? sounds.rainSound.play() : sounds.rainSound.pause()
})

const fireBtn = document.getElementById('fire')
fireBtn.addEventListener('click', () => {
    fireBtn.classList.toggle('selected')
    fireBtn.classList.contains('selected') ? sounds.fireSound.play() : sounds.fireSound.pause()
})

const marketBtn = document.getElementById('market')
marketBtn.addEventListener('click', () => {
    marketBtn.classList.toggle('selected')
    marketBtn.classList.contains('selected') ? sounds.marketSound.play() : sounds.marketSound.pause()
})



