

//import component
import Login from '../Login/Login'
import Home from '../Home/Home'
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
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
