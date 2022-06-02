import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import loginBanner from "./loginBanner.png"

export default function Login() {
  return (
    <div>
            <div className='SignupForm'>
            <div className="SignUpBanner"><img src={loginBanner}/></div>
       <div className="SignupRow"> 
       <div className="SignUpTitle"><h2>Inloggen</h2></div>
       </div>
       <div className="SignupRow">
            <label className="formLabel" for="email">E-mailadres </label>
            <input  type="email" name="" id="email"  className="SignUpInput"/>
       </div>
       <div className="SignupRow">
            <label className="formLabel" for="password">Wachtwoord </label>
            <input  type="password" name="" id="password"  className="SignUpInput"/>
       </div>
       <button type="submit" class="SignupButton">Log in</button>
      </div>
     <Link to="/registreren" >Geen account? Klik hier om te registraren.</Link>
    </div>
  )
}
