//import package

//import component
import Login from '../Login/Login'
import Home from '../Home/Home'
import JoinRoom from '../JoinRoom/JoinRoom';
import Room from '../Room/Room';
import { Route, Routes, BrowserRouter} from 'react-router-dom';

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/join-room' element={<JoinRoom />}></Route>
					<Route path='/room/:room-name' element={<Room />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
