import React from 'react'
import "./NewUser.css"

export default function NewUser() {
  return (
    <div className='NewUser'>
      <h2 className="NewUserTitle">Nieuwe Gebruiker</h2>
      <form className="newUserForm">
          <div className="newuserItem">
              <label>Naam</label>
              <input type="text" placeholder='Naam' className='newUserInput' />
          </div>
          <div className="newuserItem">
              <label>E-mailadres</label>
              <input type="email" placeholder='E-mailadres' className='newUserInput' />
          </div>
          <div className="newuserItem">
              <label>Wachtwoord</label>
              <input type="password" placeholder='Wachtwoord' className='newUserInput' />
          </div>
          <div className="newuserItem">
              <label>Wachtwoord bevestigen</label>
              <input type="password" placeholder='Wachtwoord bevestigen' required className='newUserInput'/>
          </div>
          <div className="newuserItem">
              <label>geboortedatum</label>
              <input type="date" placeholder='Geboortedatum' className='newUserInput'/>
          </div>
          <div className="newuserItem">
              <label>Telefoonnummer</label>
              <input type="tel" placeholder='Telefoonnummer' className='newUserInput'/>
          </div>
          <button className="newUserAdd">Registreren</button>
      </form>


    </div>
  )
}
