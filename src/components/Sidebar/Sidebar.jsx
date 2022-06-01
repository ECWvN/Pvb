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
         <h3 className="sidebarTitle">Dashboard</h3>
         <ul className="sidebarList">
           <h4 className="sidebarPar">Beheren</h4>
          <Link to="/home" className='link'>
           <li className="sidebarListItem">
              <HomeIcon className="sidebarIcon"/> Home
              </li>
           </Link>
           <Link to="/users" className='link'>
              <li className="sidebarListItem">
              <ManageAccountsIcon className="sidebarIcon"/> Beheer Accounts
              </li>
            </Link>
            <Link to="/producten" className='link'>
           <li className="sidebarListItem">
              <FoodBankIcon className="sidebarIcon"/> Menu-Items
              </li>
           </Link>
            <h4 className="sidebarPar">Data</h4>
            <Link to="/reserveringen" className='link'>
               <li className="sidebarListItem">
               <ConfirmationNumberIcon className="sidebarIcon"/> reserveringen
               </li>
             </Link>
             <li className="sidebarListItem">
             <PaidIcon className="sidebarIcon"/> betalingsoverzichten
             </li>
         </ul>
       </div>
     </div>
    </div>
  )
}
