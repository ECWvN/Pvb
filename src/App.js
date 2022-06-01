import React from 'react'
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import UserList from "./Pages/Users/Users";
import User from "./Pages/User/User";
import NewUser from './Pages/NewUser/NewUser';
import ProductList from './Pages/ProducList/ProductList';
import WeekMenu from "./Pages/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css"
import Signup from './Pages/Register/Signup';

function App() {
    return (
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Routes>
          <Route exact path="/" element={<WeekMenu/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/users" element={<UserList/>} />
          <Route exact path="/user/:userid" element={<User />} />
          <Route exact path="/newuser" element={<NewUser />} />
          <Route exact path="/reserveringen" element={<Home />} />
          <Route exact path="/producten" element={<ProductList />} />
          <Route exact path="/product/:productId" element={<ProductList />} />
          <Route exact path="/nieuwproduct" element={<ProductList />} />
          <Route exact path="/signup" element={<Signup />} />
          
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;

