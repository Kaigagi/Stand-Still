//import component
import LoginArea from "./Parts/LoginArea";
import News from './Parts/News'

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

function Login() {
    return(
        <div className="Login container-fluid">
            <div className="row">
                <div className="col-4 p-0">
                    <LoginArea />
                </div>
                <div className="col-8 d-flex justify-content-center mt-5">
                    <News />
                </div>
            </div>
        </div>
    );
}

export default Login;