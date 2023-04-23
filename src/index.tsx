import { render } from 'nixix';
import App from './App';
import './index.css';

render(<App />, document.querySelector('div#root'));

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    window.$$__routeProvider.childNodes.forEach(child => {
      child.remove()
    })
  })
};

// (async function () {
//   await Promise.resolve()
//   localStorage.setItem('hot', JSON.stringify(toJSON(window['$$__routeProvider'])));
// })()