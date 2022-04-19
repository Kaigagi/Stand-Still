//import component
import {Card, CardBody} from "reactstrap"
import {FormGroup,Label, Input, Button} from 'reactstrap'

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginArea.css'

function LoginArea() {
    return(
        <div className="LoginArea">
            <Card className='login-container'>
                <CardBody>
					<div className="login-form">
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
							/>
						</FormGroup>
						<br />
						<Button className="login-button">
							Login
						</Button>
					</div>
                </CardBody>
            </Card>
        </div>
    );
}

export default LoginArea;