//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

//import package
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

//import component
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap'
import { Card } from 'reactstrap';

//socket io
import socket from '../../WebSocket/socket_event';

function Home() {
    const navigate = useNavigate();

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