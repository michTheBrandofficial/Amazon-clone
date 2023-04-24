// import { render } from 'nixix';
import App from './App';
import { makeRoot } from '@utils/functions';
import patch from 'patch';
import './index.css';

async function doBgWork(root) {
  await Promise.resolve();
  window.history.pushState({}, "", '/');
  window['$$__routeProvider'] = root;
}

function render(element, root) {
  if (!Array.isArray(element)) {
    // @ts-ignore
    root.append(element);
  } else {
    element.forEach(el => {
      render(el, root)
    })
  }
  console.log('Ready');
  doBgWork(root);
}

render(<App />, document.querySelector('div#root'));


// (async function () {
//   await Promise.resolve()
//   localStorage.setItem('hot', JSON.stringify(toJSON(window['$$__routeProvider'])));
// })()