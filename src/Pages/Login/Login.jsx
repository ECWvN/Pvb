import { useContext, useState } from "react"
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./Login.css";
import LoginBanner from "./loginBanner.png"


const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    dispatch({type:"LOGIN", payload:user})
    navigate("/")
  })
  .catch((error) => {
    setError(true);
  });

  }
  return (
    <div className="login">
         <div className="SignUpBanner"><img alt='BANNER' className="loginimg"src={LoginBanner}/></div>
         <div className="loginTitle">Inloggen</div>
     <div className="loginForm">
     <form onSubmit={handleLogin}>
     <label className="formLabel" for="email">E-mailadres </label>
        <input type="email"  onChange={e=>setEmail(e.target.value)} />
        <label className="formLabel" for="password">Wachtwoord </label>
        <input type="password"  onChange={e=>setPassword(e.target.value)} />
        <Link to= "#"><div className="forgotpassword">wachtwoord vergeten?</div></Link>
        <button type="submit">login</button>
        { error && <span>Inlog gegevens onjuist!</span>}
      </form>
     </div>
     <Link to= "/register"><div className="noAccount">geen account? registreer hier! </div>
     </Link>
    </div>
  
  )
}

export default Login