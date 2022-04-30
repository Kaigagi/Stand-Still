//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

//import package
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {io} from 'socket.io-client';

//import component
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap'
import { Card } from 'reactstrap';

//socket io
const socket = io(`${process.env.REACT_APP_SERVICE_SERVER_HOST}`,{
	// withCredentials: true,
});


function Home() {
    const navigate = useNavigate();

    useEffect(()=>{
		const accountKey = sessionStorage.getItem('accountKey')!;
		fetch(`${process.env.REACT_APP_SERVICE_SERVER_HOST}${process.env.REACT_APP_API_VERSION}verify/account-key`,{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				'apiKey': `${process.env.REACT_APP_API_KEY}`,
				'accountKey': accountKey,
			},
		}).then((res)=>{
			// check if verify success
			if (res.status === 200) {
				return; 
			}
            navigate('/login');
			return;
		}).catch(()=>{
			navigate('/login');
		})
		// disable warning
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])
    return (
        <div className="Home">
            <div className="row">
				<div className="col-10 p-0">
					<div className="menu-bar-container">
						<Navbar
							className='menu-bar'
							expand="md"
						>
							<NavbarBrand href="/">
							Stand Still
							</NavbarBrand>
							<NavbarToggler onClick={function noRefCheck(){console.log('nav')}} />
							<Collapse navbar>
								<Nav
									className="me-auto"
									navbar
								>
									<NavItem>
									<NavLink href="/components/">
										Home
									</NavLink>
									</NavItem>
									<NavItem>
									<NavLink href="https://github.com/reactstrap/reactstrap">
										Inventory
									</NavLink>
									</NavItem>
									<NavItem>
									<NavLink href="https://github.com/reactstrap/reactstrap">
										Shop
									</NavLink>
									</NavItem>
								</Nav>
							</Collapse>
						</Navbar>
					</div>
					<div className="main-content">
						<div className="button" onClick={()=>{navigate('join-room')}}>
							Join
						</div>
						<div className="button" onClick={()=>{navigate('create-room')}}>
							Create
						</div>
					</div>
				</div>
				<div className="col-2 side-bar">
					<Card>

					</Card>
				</div>
			</div>
        </div>
    );
}

export default Home;