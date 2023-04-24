import { Route, Routes } from 'nixix/router';
import Home from 'pages/Home';
import patch from 'patch'
import { Sidebar } from '@components';
import { isUserLoggedIn } from '@utils/auth';
import { makeRoot } from '@utils/functions';

function App() {

	return (
		<>
			<Sidebar userLogged={isUserLoggedIn()} />
			<Routes>
				<Route element={<Home />} />
			</Routes>
			{/* <div></div> */}
		</>
	)
};

if (import.meta.hot) {
  import.meta.hot.accept(async (newModule) => {
		await Promise.resolve();
	  if (newModule) {
	 		const mod = makeRoot(newModule.default());
	 		patch(window['$$__routeProvider'], mod);
	  }
  });
};

export default App;