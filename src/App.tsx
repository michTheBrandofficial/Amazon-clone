import { Route, Routes } from 'nixix/router';
import Home from 'pages/home';
import Checkout from 'pages/checkout';
import Success from 'pages/success';
import Orders from 'pages/orders';
import { Sidebar, Header } from '@components';
import init from 'apis/init';
import patch from 'patch';
import { makeRoot } from '@utils/functions';

init();

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Routes>
        <Route element={<Home />} common />
        <Route element={<Checkout />} path="/checkout"  />
        <Route element={<Success />} path="/success" />
        <Route element={<Orders />} path="/orders" />
      </Routes>
    </>
  );
}

if (import.meta.hot) {
  import.meta.hot.accept(async (newModule) => {
    await Promise.resolve();
    if (window['promiseState'] !== 'running') {
      if (newModule) {
        if (!window['$$__NixixStore']['$$__commonRouteProvider']) {
          const mod = makeRoot(newModule.default());
          patch(window['$$__NixixStore']['$$__routeProvider'], mod);
          console.log('box');
        } else {
          newModule.default();
          let route =
            window['$$__NixixStore']['$$__routeStore'][
              window.location.pathname
            ];
          let span = window['$$__NixixStore'][
            '$$__commonRouteProvider'
          ] as HTMLSpanElement;
          let div = (
            window['$$__NixixStore']['$$__routeProvider'] as HTMLDivElement
          ).querySelector('');
          span.replaceChildren(...[route]);
          console.log(route, span.children);
        }
      }
      window['promiseState'] = 'running';
    }
  });
  import.meta.hot.dispose(async () => {
    await Promise.resolve();

    window['promiseState'] = '';
  });
}

export default App;
