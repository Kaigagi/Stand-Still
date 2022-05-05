//import package

//import component
import Login from '../Login/Login'
import Home from '../Home/Home'
import JoinRoom from '../JoinRoom/JoinRoom';
import Room from '../Room/Room';
import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';

//interface
interface ProtectRouteProp{
	isAuth: boolean,
	Element: JSX.Element,
}

function ProtectedRoute({isAuth, Element}: ProtectRouteProp) {
	if (isAuth) {
		return Element;
	}

	return <Navigate replace to='/login' />;
}

function App() {
	const [isAuth, setIsAuth] = useState<boolean>(false);

	function setIsAuthWrapper(isAuth: boolean) {
		setIsAuth(isAuth);
	}
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<ProtectedRoute isAuth={isAuth} Element={<Home />}/>}></Route>
					<Route path='/login' element={<Login setIsAuth={setIsAuthWrapper} />}></Route>
					<Route path='/join-room' element={<ProtectedRoute isAuth={isAuth} Element={<JoinRoom />}/>}></Route>
					<Route path='/room/:roomName' element={<ProtectedRoute isAuth={isAuth} Element={<Room />}/>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
