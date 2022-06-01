import React from 'react'
import "./User.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className="User">
        <div className="userTitleContainer">
          <h2 className='userTitle'>Gebruiker Bijwerken</h2>
          <Link to= "/NewUser">
          <button className="userAddButton">Nieuwe gebruiker</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTopTitle">
              <span className="userShowUsername"> Amber</span>
              <span className="userShowUserSurname">  van Dam</span>


            </div>
            <div className="userShowBottom">
              <span className="userShowTitle"> Gebruikers gegevens </span>
              <div className="userShowInfo">
              <PermIdentityIcon className='usershowIcon'/>
            <span className="UserShowInfoTitle">Amber van Dam</span>
            </div>
            <div className="userShowInfo">
              <BadgeIcon className='usershowIcon'/>
            <span className="UserShowInfoTitle">Bewoner</span>
            </div>
            <div className="userShowInfo">
              <CakeIcon className='usershowIcon'/>
            <span className="UserShowInfoTitle">01-01-2001</span>
            </div>
            </div>
            <span className="userShowTitle"> Contact gegevens </span>
            <div className="userShowInfo">
              <EmailIcon className='usershowIcon'/>
            <span className="UserShowInfoTitle">Ambervandan@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocalPhoneIcon className='usershowIcon'/>
            <span className="UserShowInfoTitle">06 12345678</span>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Bijwerken</span>
            <form  className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Naam</label>
                  <input type="text" placeholder='Naam' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>E-mail</label>
                  <input type="text" placeholder='E-mail' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Telefoon-nummer</label>
                  <input type="tel" pattern='/^+31(7\d|8\d|9\d)\d{9}$/' placeholder='Telefoon-nummer' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Verjaardag</label>
                  <input type="date" placeholder='Naam' className='userUpdateInput' />
                </div>
                <button className="userUpdateButton">Bijwerken</button>
              </div>
            </form>
          </div>
        </div>
      
    </div>
  )
}
