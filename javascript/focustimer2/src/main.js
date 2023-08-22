import * as sounds from './focustimer/sounds.js'

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



let minutes = document.getElementById('minutes')
const plus = document.getElementById('plus')

plus.addEventListener('click', () => {
    minutes.textContent = + 5
})


