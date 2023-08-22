import { useContext } from "react";
import "./login.scss"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authcontext";
const Login = ()=>{
  const {login} = useContext(AuthContext);

  const handleLogin =()=>{
    login();
  }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello.</h1>
                    <p> Cambodia is full of breathtaking landscapes that will make any visitor stop to admire its natural surroundings</p>
                    <span>Don't you have an account</span>
                    <Link to='/register'><button>Register</button></Link>

                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" name="" id="" placeholder="Password"/>
                        <button onClick={handleLogin}>Login</button>
                    </form>

                </div>
            </div>

        </div>
    )
}
export default Login;