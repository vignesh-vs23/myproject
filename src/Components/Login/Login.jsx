import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
  return (
    <>
     <Header />
    <div className="login-container">
        <div className="form-container sign-up ">
            <form action="">
                <h1>Create Account</h1>
                <input type="text" placeholder="Name"required/>
                <input type="email" placeholder="Email"required/>
                <input type="password" placeholder="Password"required/>
                <button>Register</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <Link className='link'>Forget Your Password?</Link>
                <button>Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button className="hidden" id="login">Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button className="hidden" id="register">Register</button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Login