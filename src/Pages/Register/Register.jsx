import React from 'react'
import "./Register.css"
import BannerReg from "./bannerReg.png"
import { Link } from 'react-router-dom';
import { useState, setState, setData } from 'react';
import { BrushTwoTone } from '@mui/icons-material';

// const [Name, setName] = useState();
// const [email, setEmail] = useState();
// const [password,setPassword] = useState();
// const [confirmPassword,setConfirmPassword] = useState();
// const [birthDate, setBrithDate] = useState();
// const [phonenumber, setPhonenumber] = useState();

// const handleInputChange = (e) => {
//   const {id , value} = e.target;
//   if(id === "Name"){
//       setName(value);
//   }
//   if(id === "email"){
//       setEmail(value);
//   }
//   if(id === "password"){
//       setPassword(value);
//   }
//   if(id === "confirmPassword"){
//       setConfirmPassword(value);
//   }
//   if(id === "birtDate"){
//     setBrithDate(value);
// }
// if(id === "phonenumber"){
//   setPhonenumber(value);
// }

// }

// const handleSubmit  = () => {
//   console.log(Name,email,password,confirmPassword,birthDate,phonenumber);
// }

export default function Signup() {
//   const [data, setData] = useState({
//     name:"",
//   })

// //   const handleChange=(e)=>{
// // setData
//   }
  return (
    <div className='SignupForm'>
      <div className="SignUpBanner"><img src={BannerReg}/></div>
       <div className="SignupRow"> 
       <div className="SignUpTitle"><h2>Registreren</h2></div>
       <div className="verpleichtVeld">*verplichte velden</div>
       </div>
       <div className="SignupRow">
            <label className="formLabel" for="Name" >Naam</label>
            <input type="text" name="" id="name" className="SignUpInput" />
       </div>
       <div className="SignupRow">
            <label className="formLabel" for="email">E-mailadres </label>
            <input  type="email" name="" id="email"  className="SignUpInput"/>
       </div>
       <div className="SignupRow">
            <label className="formLabel" for="password">Wachtwoord </label>
            <input  type="password" name="" id="password"  className="SignUpInput"/>
       </div>
       <div className="SignupRow">
            <label className="formLabel" for="confirmPassword">Wachtwoord bevestigen </label>
            <input  type="password" name="" id="confirmPassword"  className="SignUpInput"/>
       </div>
       <div className="SignupRow">
            <label className="formLabel" for="birthDate">Geboortedatum </label>
            <input  type="date" name="" id="birthDate"  className="SignUpInput"/>
       </div>
       <div className="SignupRow">
            <label className="formLabel" for="phonenumber">Telefoonnummer </label>
            <input  type="tel" name="" id="phonenumber" className="SignUpInput"/>
       </div>
       <button type="submit" class="SignupButton">Registreren</button>

       <div>
     <Link to="/login" >Heb je al een account? Klik hier om in te loggen.</Link>
    </div>
      </div>
  )
}
