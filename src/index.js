// import { render } from 'lit-html'
import { render } from '../lib/vdom.js';
import r from '../lib/sintaxe'

import App from './App'




render(r(App), document.querySelector('#root'))