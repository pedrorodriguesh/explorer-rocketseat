import { controls } from "./elements.js"; // estou recebendo a section controls como uma variável, vinda do elements.js.

export function registerControls (){
    controls.addEventListener('click', (event) =>{ // evento de click, mesma coisa que la no HTML.
        const action = event.target.dataset.action
        if(action === undefined ) {
            return
        }

        console.log(action)
    })
}