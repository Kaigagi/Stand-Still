//import component
import LoginForm from "../Parts/LoginForm";

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

function Login() {
    return(
        <div className="Login">
            <LoginForm />
        </div>
    );
}

export default Login;