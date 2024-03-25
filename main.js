import './style.css'
import { setupCounter } from './handler.js'

document.querySelector('#app').innerHTML = `
  <div>
    <button id="target" type="button">Click me</button>
  </div>
`

setupCounter(document.querySelector('#target'))
