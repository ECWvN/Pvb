import { useContext, useState } from "react"
import React from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
import { initializeApp } from "firebase/app";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./Login.css"


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
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email" onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} />
        <button type="submit">login</button>
        { error && <span>wrong email or password!</span>}
      </form>
    </div>
  )
}

export default Login