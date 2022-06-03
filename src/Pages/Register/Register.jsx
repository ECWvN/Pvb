import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar';
import BannerReg from "./bannerReg.png";


function Register() {
     const [userName, setUserName] = useState('');
     const [email, setEmail] = useState('');
     const [password,setPassword] = useState('');
     const [confirmPassword,setConfirmPassword] = useState('');
     const [birthDate, setBrithDate] = useState('');
     const [phonenumber, setPhonenumber] = useState('');

     const register = () => {
          Axios.post("http://localhost:3001/register", {
               username: userName, 
               password: password,
               email: email,
               birthdate: birthDate,
               phonenumber: phonenumber
          }).then((response)=> {
               console.log(response)
          });
     };
  return (
    <div>
  <div className="container">
          <div className='SignupForm'>
           <div className="SignUpBanner"><img src={BannerReg}/></div>
            <div className="SignupRow"> 
            <div className="SignUpTitle"><h2>Registreren</h2></div>
            <div className="verpleichtVeld">*verplichte velden</div>
            </div>
            <div className="SignupRow">
                 <label className="formLabel" for="Name" >Naam</label>
                 <input type="text" onChange={(e) => {
                      setUserName(e.target.value);}}/>
            </div>
            <div className="SignupRow">
                 <label className="formLabel" for="email">E-mailadres </label>
                 <input  type="email" onChange={(e)=>{setEmail(e.target.value);}} name="" id="email"  className="SignUpInput"/>
            </div>
            <div className="SignupRow">
                 <label className="formLabel" for="password">Wachtwoord </label>
                 <input  type="password" onChange={(e)=>{this.setPassword(e.target.value);}} name="" id="password"  className="SignUpInput"/>
            </div>
            <div className="SignupRow">
                 <label className="formLabel" for="confirmPassword">Wachtwoord bevestigen </label>
                 <input  type="password" onChange={(e)=>{setPassword(e.target.value);}} name="" id="confirmPassword"  className="SignUpInput"/>
            </div>
            <div className="SignupRow">
                 <label className="formLabel" for="birthDate">Geboortedatum </label>
                 <input  type="date" onChange={(e)=>{setBrithDate(e.target.value);}} name="" id="birthDate"  className="SignUpInput"/>
            </div>
            <div className="SignupRow">
                 <label className="formLabel" for="phonenumber">Telefoonnummer </label>
                 <input  type="tel" onChange={(e)=>{setPhonenumber(e.target.value);}} name="" id="phonenumber" className="SignUpInput"/>
            </div>
            <button onClick={register} type="submit"  class="SignupButton">Registreren</button>
     
            <div>
          <Link to="/login" >Heb je al een account? Klik hier om in te loggen.</Link>
         </div>
           </div> 
           
     </div>
    </div>
  );
};

export default Register;


// import React, {Component} from 'react'
// import "./Register.css"
// import BannerReg from "./bannerReg.png"
// import { Link } from 'react-router-dom';
// import Axios from 'axios';
// import { useState } from 'react';
// import Topbar from '../../components/topbar/Topbar';


// function register(){
     // const {userName, setUserName} = useState;
     // const {email, setEmail} = useState;
     // const {password,setPassword} = useState;
     // const {confirmPassword,setConfirmPassword} = useState;
     // const {birthDate, setBrithDate} = useState;
     // const {phonenumber, setPhonenumber} = useState;

     // const register = () => {
     //      Axios.post("http://localhost3001/registreren", {
     //           username: userName, 
     //           password: password,
     //           email: email,
     //           birthdate: birthDate,
     //           phonenumber: phonenumber
     //      }).then((response)=> {
     //           console.log(response)
     //      });
     // }
     
     //   return (
          
     // <div className="container">
     //             <Topbar/>
     //      <div className='SignupForm'>
     //       <div className="SignUpBanner"><img src={BannerReg}/></div>
     //        <div className="SignupRow"> 
     //        <div className="SignUpTitle"><h2>Registreren</h2></div>
     //        <div className="verpleichtVeld">*verplichte velden</div>
     //        </div>
     //        <div className="SignupRow">
     //             <label className="formLabel" for="Name" >Naam</label>
     //             <input type="text" onChange={(e)=>{setUserName(e.target.value)}}  name="" id="name" className="SignUpInput" />
     //        </div>
     //        <div className="SignupRow">
     //             <label className="formLabel" for="email">E-mailadres </label>
     //             <input  type="email" onChange={(e)=>{setEmail(e.target.value)}} name="" id="email"  className="SignUpInput"/>
     //        </div>
     //        <div className="SignupRow">
     //             <label className="formLabel" for="password">Wachtwoord </label>
     //             <input  type="password" onChange={(e)=>{setPassword(e.target.value)}} name="" id="password"  className="SignUpInput"/>
     //        </div>
     //        <div className="SignupRow">
     //             <label className="formLabel" for="confirmPassword">Wachtwoord bevestigen </label>
     //             <input  type="password" onChange={(e)=>{setPassword(e.target.value)}} name="" id="confirmPassword"  className="SignUpInput"/>
     //        </div>
     //        <div className="SignupRow">
     //             <label className="formLabel" for="birthDate">Geboortedatum </label>
     //             <input  type="date" onChange={(e)=>{setBrithDate(e.target.value)}} name="" id="birthDate"  className="SignUpInput"/>
     //        </div>
     //        <div className="SignupRow">
     //             <label className="formLabel" for="phonenumber">Telefoonnummer </label>
     //             <input  type="tel" onChange={(e)=>{setPhonenumber(e.target.value)}} name="" id="phonenumber" className="SignUpInput"/>
     //        </div>
     //        <button onClick={register} type="submit"  class="SignupButton">Registreren</button>
     
     //        <div>
     //      <Link to="/login" >Heb je al een account? Klik hier om in te loggen.</Link>
     //     </div>
     //       </div> 
           
     // </div>

//        );
// }

// export default register();


//   <div className="container">
//                  <Topbar/>
//           <div className='SignupForm'>
//            {/* <div className="SignUpBanner"><img src={BannerReg}/></div> */}
//             <div className="SignupRow"> 
//             <div className="SignUpTitle"><h2>Registreren</h2></div>
//             <div className="verpleichtVeld">*verplichte velden</div>
//             </div>
//             <div className="SignupRow">
//                  <label className="formLabel" for="Name" >Naam</label>
//                  <input type="text"  name="" id="name" className="SignUpInput" />
//             </div>
//             <div className="SignupRow">
//                  <label className="formLabel" for="email">E-mailadres </label>
//                  <input  type="email" name="" id="email"  className="SignUpInput"/>
//             </div>
//             <div className="SignupRow">
//                  <label className="formLabel" for="password">Wachtwoord </label>
//                  <input  type="password"  name="" id="password"  className="SignUpInput"/>
//             </div>
//             <div className="SignupRow">
//                  <label className="formLabel" for="confirmPassword">Wachtwoord bevestigen </label>
//                  <input  type="password"  name="" id="confirmPassword"  className="SignUpInput"/>
//             </div>
//             <div className="SignupRow">
//                  <label className="formLabel" for="birthDate">Geboortedatum </label>
//                  <input  type="date"  name="" id="birthDate"  className="SignUpInput"/>
//             </div>
//             <div className="SignupRow">
//                  <label className="formLabel" for="phonenumber">Telefoonnummer </label>
//                  <input  type="tel"  name="" id="phonenumber" className="SignUpInput"/>
//             </div>
//             <button onClick={register} type="submit"  class="SignupButton">Registreren</button>
     
//             <div>
//           <Link to="/login" >Heb je al een account? Klik hier om in te loggen.</Link>
//          </div>
//            </div> 
           
//      </div>