//import lib
import sign from 'jwt-encode';

//import component
import {Card, CardBody} from "reactstrap"
import {FormGroup,Label, Input, Button, Form} from 'reactstrap'

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginArea.css'
import { FormEvent, useState } from "react";

interface UserData{
	email:string,
	password: string,
}

function LoginArea() {
	//user info
	const [email,setUserName] = useState<string>("");
	const [password,setPassword] = useState<string>("");

	function submitForm(e:FormEvent) {
		e.preventDefault();
		window.history.back();
		const user: UserData = {
			email: email,
			password: password,
		}
		const jwt = sign(user, "Quan dep trai");
		fetch('http://localhost:8080/api/v1/verify',{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				'accessKey': 'Quan dep zai'
			},
			body: JSON.stringify({
				jwt: jwt,
			})
		}).then((res)=>{
			console.log(res.text().then((data)=>console.log(data)));
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
							/>
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