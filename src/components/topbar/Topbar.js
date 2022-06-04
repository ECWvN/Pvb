import React, {useState} from 'react'
import "./Topbar.css"
import Schild from './Schild.png'
import { Link } from 'react-router-dom';
import NavbarBurger from "../NavbarBurger/NavbarBurger"
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from '../../firebase';
import { signOut, getAuth } from 'firebase/auth';



export default function Topbar() {
  const [sidebar, setSidebar] = useState(false)

  // const logout = async ()=>{
  //   await signOut(auth);
  // }


  const showSidebar = () => setSidebar(!sidebar)
  return (
   <div className='container'>
         <div className="topbar">
      <div className="topbarWrapper">
        <div className='topLeft'>
          <div className='topbarIcons'>
          </div>
        </div>
        <div className='topRight'><img src={Schild} />
       </div>
      </div>
      <div className='TopbarBand'><NavbarBurger/></div>
    </div>
     </div>

  )
}


{/* <button onClick={logout}>signout</button> */}