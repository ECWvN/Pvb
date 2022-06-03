import React from 'react'
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import UserList from "./Pages/Users/Users";
import User from "./Pages/User/User";
import NewUser from './Pages/NewUser/NewUser';
import ProductList from './Pages/ProducList/ProductList';
import WeekMenu from "./Pages/Menu/Menu";
import Login from './Pages/Login/Login';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import "./app.css"
import Register from "././Pages/Register/Register";
import Reservation from "././Pages/Reservation/Reservation";
import BewHome from './Pages/BewHome/BewHome';
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";



function App() {

  const {currentUser} = useContext(AuthContext);

  //user page yes or no see
  
  
  const RequireAuth = ({children}) =>{
    return currentUser ? (children) : <Navigate to="/login"/>;
  };
  
  console.log(currentUser);

    return (
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Routes>
          <Route exact path="/" element={<BewHome/>} />
          <Route exact path="/home" element={<RequireAuth><Home /></RequireAuth>} />
          <Route exact path="/menu" element={<WeekMenu/>} />
          <Route exact path="/users" element={<UserList/>} />
          <Route exact path="/user/:userid" element={<User />} />
          <Route exact path="/newuser" element={<NewUser />} />
          <Route exact path="/reserveringen" element={<Reservation />} />
          <Route exact path="/producten" element={<ProductList />} />
          <Route exact path="/product/:productId" element={<ProductList />} />
          <Route exact path="/nieuwproduct" element={<ProductList />} />
          <Route exact path="/registreren" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
  
          
          
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;

