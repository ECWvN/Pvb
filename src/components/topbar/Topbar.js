import React from 'react'
import "./Topbar.css"
import Schild from './Schild.png'
import NavbarBurger from "../NavbarBurger/NavbarBurger"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Topbar() {
  return (
   <div className='container'>
         <div className="topbar">
      <div className="topbarWrapper">
        <div className='topLeft'>
          <div className='topbarIcons'>
          </div>
        </div>
        <div className='topRight'><img alt="logo"src={Schild} />
       </div>
      </div>
      <div className='TopbarBand'><NavbarBurger/></div>
    </div>
     </div>

  )
}


