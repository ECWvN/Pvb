import React from 'react'
import "./Sidebar.css"
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className ="Sidebar">
     <div className="SidebarWrapper">
       <div className="sidebarMenu">
         <h3 className="sidebarTitle"></h3>
          <Link to="/admin" className='link'>
           <div className="sidebarListItem">
              <HomeIcon className="sidebarIcon"/> 
              </div>
           </Link>
           <Link to="/users" className='link'>
              <div className="sidebarListItem">
              <ManageAccountsIcon className="sidebarIcon"/> 
            </div>
            </Link>
            <Link to="/producten" className='link'>
           <div className="sidebarListItem">
              <FoodBankIcon className="sidebarIcon"/> 
              </div>
           </Link>
         
            <Link to="/reserveringen" className='link'>
               <div className="sidebarListItem">
               <ConfirmationNumberIcon className="sidebarIcon"/> 
              </div>
             </Link>
             <div className="sidebarListItem">
             <PaidIcon className="sidebarIcon"/> 
            </div>
         
       </div>
     </div>
    </div>
  )
}
