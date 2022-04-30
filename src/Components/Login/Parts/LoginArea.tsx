//import lib
import sign from 'jwt-encode';
import { FormEvent, useState } from "react";

//import component
import {Card, CardBody} from "reactstrap"
import {FormGroup,Label, Input, Button, Form, FormFeedback} from 'reactstrap'
import {useNavigate } from 'react-router-dom';

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginArea.css'

interface UserData{
	email:string,
	password: string,
}

//data receive from server after successfully verify
interface FetchData{
	msg:string,
	body:{
		accountKey:string,
	}
}

function LoginArea() {
	//user info
	const [email,setUserName] = useState<string>("");
	const [password,setPassword] = useState<string>("");

	//email and password valid flag
	const [isValid, setIsValid] = useState<boolean>(true)

	//navigate to next page
	const navigate = useNavigate();

	function submitForm(e:FormEvent) {
		e.preventDefault();
		window.history.back();
		const user: UserData = {
			email: email,
			password: password,
		}
		const jwt = sign(user, "Quan dep trai");
		fetch(`${process.env.REACT_APP_SERVICE_SERVER_HOST}${process.env.REACT_APP_API_VERSION}verify`,{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				'apiKey': `${process.env.REACT_APP_API_KEY}`,
			},
			body: JSON.stringify({
				jwt: jwt,
			})
		}).then(async (res)=>{
			// check if verify success
			if (res.status === 200) {
				const fetchData: FetchData = JSON.parse(await res.text().then((data)=>data));
				sessionStorage.setItem('accountKey',fetchData.body.accountKey);
				return navigate('/');
			}
			
			return setIsValid(false);
		}).catch((err)=>{
			alert("somethings went wrong on the server")
		})
	}

    return(
        <div className="LoginArea">
            <Card className='login-container'>
                <CardBody>
					<Form className="login-form" onSubmit={(e)=>{submitForm(e)}} >
						<h2>Login</h2>
						<br />
						<FormGroup className="form-group">
							<Label for="Email">
							Email
							</Label>
							<Input
							id="Email"
							name="email"
							placeholder="Enter Your Email"
							type="email"
							onChange={(e)=>{setUserName(e.target.value)}}
							invalid = {!isValid}
							/>
						</FormGroup>
						<FormGroup className="form-group">
							<Label for="Password">
							Password
							</Label>
							<Input
							id="Password"
							name="password"
							placeholder="Enter Your Password"
							type="password"
							onChange={(e)=>{setPassword(e.target.value)}}
							invalid = {!isValid}
							/>
							<FormFeedback>
								Incorrect email or password
							</FormFeedback>
						</FormGroup>
						<br />
						<Button className="login-button">
							Login
						</Button>
					</Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default LoginArea;