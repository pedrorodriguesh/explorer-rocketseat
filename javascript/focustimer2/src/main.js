import * as sounds from './focustimer/sounds.js'
import * as timer from './focustimer/timer.js'

timer.updateDisplay()
timer.countdown()

// aqui é a parte dos sons, criando o evento com addEventListener. 

//buttons.
const forestBtn = document.getElementById('tree')
forestBtn.addEventListener('click', () => {
    forestBtn.classList.toggle('selected')
    forestBtn.classList.contains('selected') ? sounds.forestSound.play() : sounds.forestSound.pause() // lógica para tocar só se tiver a classe 'selected'
    sounds.forestSound.loop = true
})

const rainBtn = document.getElementById('rain')
rainBtn.addEventListener('click', () => {
    rainBtn.classList.toggle('selected')
    rainBtn.classList.contains('selected') ? sounds.rainSound.play() : sounds.rainSound.pause()
    sounds.rainSound.loop = true // loop é pro aúdio ficar tocando infinito.

})

const fireBtn = document.getElementById('fire')
fireBtn.addEventListener('click', () => {
    fireBtn.classList.toggle('selected')
    fireBtn.classList.contains('selected') ? sounds.fireSound.play() : sounds.fireSound.pause()
    sounds.fireSound.loop = true
})

const marketBtn = document.getElementById('market')
marketBtn.addEventListener('click', () => {
    marketBtn.classList.toggle('selected')
    marketBtn.classList.contains('selected') ? sounds.marketSound.play() : sounds.marketSound.pause()
    sounds.marketSound.loop = true
})



