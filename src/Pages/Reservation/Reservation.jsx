import React from 'react';
import "./Reservation.css";
import { Link } from 'react-router-dom';
import ReservationBanner from "./ReservationBanner.png"

export default function Login() {
  return (
    <div>
            <div className='SignupForm'>
            <div className="SignUpBanner"><img src={ReservationBanner}/></div>
       <div className="SignupRow"> 
       <div className="SignUpTitle"><h2>Reserveren</h2></div>
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
            <label className="formLabel" for="birthDate">Datum </label>
            <input  type="date" name="" id="birthDate"  className="SignUpInput"/>
       </div>
       <div className="HeleWeekMee">
            <input  type="checkbox" name="" id="HeleWeekMee"  className="SignUpInput"/>
            <label className="formLabelCeck" for="birthDate">Hele week mee-eten</label>
       </div>
       <div className="SignupRow">
            <label className="formLabel" for="Name" >Opmerkingen</label>
            <input type="text" name="" id="name" className="SignUpInput" />
       </div>
       <div className="ReservationOutcome">
       <div className="ReservationCalculation">Totaal : €15 </div>
       <button type="submit" class="ReservationButton">Reserveren</button>
      </div>
      </div>
    </div>
  )
}