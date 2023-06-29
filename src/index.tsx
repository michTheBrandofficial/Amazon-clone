import { render } from 'nixix/dom';
import './index.css';
import { Suspense, asyncComponent } from 'nixix/hoc';
import ScreenSpinner from 'components/ScreenSpinner';


const Component = asyncComponent(async () => {
  const App = await import('./App');
  return App.default()
});

render(
  <Suspense fallback={<ScreenSpinner />} className='w-screen h-screen grid place-content-center' >
    <Component />
  </Suspense>, document.querySelector('div#root'));


// (async function () {
//   await Promise.resolve()
//   localStorage.setItem('hot', JSON.stringify(toJSON(window['$$__routeProvider'])));
// })()