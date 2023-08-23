import { useState } from "react";
import "./register.scss"
import { Link } from "react-router-dom";
import axios from "axios"
const Register = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
    });
    const [err, setErr] = useState(null);
    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };
    const handleClick = async e => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:8080/api/auth/register", inputs)
        } catch (err) {
            setErr(err.response.data);
        }
    };

    console.log(err)

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
                        <input type="text" placeholder="Username" name="username" onChange={handleChange} />
                        <input type="email" name="email" id="" placeholder="Email" onChange={handleChange} />
                        <input type="password" name="password" id="" placeholder="Password" onChange={handleChange} />
                        <input type="text" name="name" id="" placeholder="Name" onChange={handleChange} />
                        {err && err }
                        <button onClick={handleClick}>register</button>
                    </form>

                </div>
            </div>

        </div>
    )
}
export default Register;