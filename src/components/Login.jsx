
import { useState, useContext } from "react"
import {Link, useNavigate} from "react-router-dom"
import {UserContext} from "../Context/UserContext"
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"

const Login = () => {
    const navigate = useNavigate();
    const {handleGetUserDataFromDb} = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                handleGetUserDataFromDb(user.uid)
                navigate("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`error code: ${errorCode}\n error message: ${errorMessage}`)
            });
    }

    return ( 
        <>       
            <section className="vh-100" >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                <form className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="email" className="form-control"  value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                                    <label className="form-label">Your Email</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="password" className="form-control"  value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                                    <label className="form-label">Password</label>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => {
                                        handleLogin()
                                    }}>Login</button>
                                </div>
                                
                                </form>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <Link to="/signup">Sign Up</Link>
                                </div>

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Login;