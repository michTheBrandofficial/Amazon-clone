import { render } from 'nixix/dom';
import './index.css';
import ScreenSpinner from 'components/ScreenSpinner';
import { lazy, Suspense } from 'nixix/hoc';

const Component = lazy(async () => {
  const App = await import('./App');
  return App.default();
})

console.log(Component);

render(
  <Suspense
    fallback={<ScreenSpinner />}
    className="w-screen h-screen grid place-content-center"
  >
    <Component  />
  </Suspense>,
  document.querySelector('div#root')
);

// (async function () {
//   await Promise.resolve()
//   localStorage.setItem('hot', JSON.stringify(toJSON(window['$$__routeProvider'])));
// })()
