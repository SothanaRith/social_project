import "./register.scss"
import { Link } from "react-router-dom";
const Register = ()=>{
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>MANOREA Social.</h1>
                    <p>សូមស្វាគមន៏​មកកាន់មណូរា</p>
                    <span>Do you have an account</span>
                    <Link to='/login'><button>Login</button></Link>
                </div>
                <div className="right">
                    <h1>register</h1>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="email" name="" id="" placeholder="Email"/>
                        <input type="password" name="" id="" placeholder="Password"/>
                        <input type="text" name="" id="" placeholder="Name"/>
                        <button>register</button>
                    </form>

                </div>
            </div>

        </div>
    )
}
export default Register;