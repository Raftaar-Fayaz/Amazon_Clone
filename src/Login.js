import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');
         })
        .catch((e) => alert(e.message)); 
    };

    const register = (event) => {
        event.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth){
                history.push('/');
            }
        })
        .catch((e) => alert(e.message));  
    };
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon Logo"/>
            </Link> 
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} type="email" onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input value={password} type="password" onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={login}  className="login__signInButton">Sign-In</button>
                </form>
                <p>
                By signing-in you agree to Amazon's <span>Conditions of Use & Sale</span>. Please see our <span>Privacy Notice</span>, our <span>Cookies Notice</span> and our <span>Interest-Based Ads Notice</span>.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
