import React, {useState} from 'react'
import "./Topbar.css"
import Schild from './Schild.png'
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import NavbarBurger from "../NavbarBurger/NavbarBurger"
import CloseIcon from '@mui/icons-material/Close';
import "bootstrap/dist/css/bootstrap.min.css";






export default function Topbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className='topLeft'>
          <div className='topbarIcons'>
          </div>
        </div>
        <div className='topRight'><img src={Schild} /></div>
      </div>
      <div className='TopbarBand'><NavbarBurger/></div>
    </div>
  )
}