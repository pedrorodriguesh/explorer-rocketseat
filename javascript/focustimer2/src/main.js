//sounds.
const forestSound = new Audio('./assets/Floresta.wav')
const rainSound = new Audio('./assets/Chuva.wav')
const fireSound = new Audio('./assets/Lareira.wav')
const marketSound = new Audio('./assets/Cafeteria.wav')

//buttons.
const forestBtn = document.getElementById('tree')
forestBtn.addEventListener('click', () => {
    forestSound.play()
    forestSound.loop = true
})

const rainBtn = document.getElementById('rain')
rainBtn.addEventListener('click', () => {
    rainSound.play()

})


