
import h from '../lib/sintaxe'
import People from './components/People'
import Component from '../lib/component'

class App extends Component {
    render() {
      return h('div', { class: 'app' },
        h('h1', null, 'Simple vDOM'),
        h(People)
      )
    }
  };

export default App;