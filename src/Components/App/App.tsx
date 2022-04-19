import React from 'react';

//import component
import Login from '../Login/Login'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
