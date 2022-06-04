import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./NavbarBurger.css";



export default class Sidebar extends React.Component {

  state = {
    menuOpen: false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    
    return (
      <div className="1">
     <div className="1">
             <Menu className="menu"
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/">
          Home
        </Link>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/menu" >
          Menu
        </Link>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/reserveringen" >
          Reserveren
        </Link>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/login" >
          Login
        </Link>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/admin" >
          BeheerderPaneel
        </Link>
     
      </Menu>
     </div>
     </div>
    );
  }
}
