import litedom, { render } from './lite-dom';




const App = () => {
    return (
        <h1>Lite dom</h1>
    )
}

render(App(), document.querySelector('#root'))
