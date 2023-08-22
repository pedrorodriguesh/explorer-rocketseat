import { controls } from "./elements.js"; // estou recebendo a section controls como uma variável, vinda do elements.js.
import * as actions from "./actions.js"

export function registerControls (){
    controls.addEventListener('click', (event) =>{ // evento de click, mesma coisa que la no HTML.
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
}