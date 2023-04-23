import { Route, Routes } from 'nixix/router';
import { Home } from '@pages';
import { Sidebar } from '@components';
import { isUserLoggedIn } from '@utils/auth';

function App() {

	return (
		<>
			<Routes>
				<Route element={<Home />} />
			</Routes>
		</>
	)
};

export default App;