//import component
import LoginArea from "./Parts/LoginArea";
import News from './Parts/News'

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

//interface
interface Props{
	setIsAuth: (isAuth: boolean) => void
}

function Login({setIsAuth}: Props) {
    return(
        <div className="Login container-fluid">
            <div className="row">
                <div className="col-4 p-0">
                    <LoginArea  setIsAuth={setIsAuth}/>
                </div>
                <div className="col-8 d-flex justify-content-center mt-5">
                    <News />
                </div>
            </div>
        </div>
    );
}

export default Login;