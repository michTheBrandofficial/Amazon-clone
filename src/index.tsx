import { render } from 'nixix';
import App from './App';
import './index.css';

render(<App />, document.querySelector('div#root'));

// (async function () {
//   await Promise.resolve()
//   localStorage.setItem('hot', JSON.stringify(toJSON(window['$$__routeProvider'])));
// })()