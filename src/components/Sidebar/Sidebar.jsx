import React from 'react'
import "./Sidebar.css"
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import HomeIcon from '@mui/icons-material/Home';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { Link } from 'react-router-dom';



export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="SidebarWrapper">
        <div className="sidebarMenu">
          <Link to="/admin" className='link'>
            <div className="sidebarListItem">
              <HomeIcon className="sidebarIcon" />
            </div>
          </Link>
          <Link to="/producten" className='link'>
            <div className="sidebarListItem">
              <FoodBankIcon className="sidebarIcon" />
            </div>
          </Link>
          <Link to="/bekijkreserveringen" className='link'>
            <div className="sidebarListItem">
              <ConfirmationNumberIcon className="sidebarIcon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
