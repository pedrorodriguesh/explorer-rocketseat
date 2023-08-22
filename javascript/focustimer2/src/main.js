import * as sounds from './focustimer/sounds.js'
import * as el from './focustimer/elements.js'

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



let minutes = Number(el.minutes.textContent)
const plus = document.getElementById('plus')

plus.addEventListener('click', () => {
    minutes = minutes + 5
    console.log(minutes)
})

updateDisplay()

function updateDisplay(minutes, seconds){
    minutes = 10
    seconds = 0

    el.minutes.textContent = minutes
    el.seconds.textContent = String(seconds).padStart(2, "0")
}


