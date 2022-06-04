import React from 'react'
import Topbar from "./components/topbar/Topbar";
import Home from "./Pages/Home/Home";
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
import SeeReservations from './Pages/SeeReservations/SeeReservations';
import NeedLogin from './Pages/NeedLogin/NeedLogin';



function App() {

  const {currentUser} = useContext(AuthContext);

  //user page yes or no see
  
  
  const RequireAuth = ({children}) =>{
    return currentUser ? (children) : <Navigate to="/loginorregister"/>;
  };
  
  console.log(currentUser);

    return (
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Routes>
          <Route exact path="/" element={<BewHome/>} />
          <Route exact path="/admin" element={<RequireAuth><Home /></RequireAuth>} />
          <Route exact path="/menu" element={<RequireAuth><WeekMenu/></RequireAuth>} />
          <Route exact path="/loginorregister" element={<NeedLogin />} />
          <Route exact path="/reserveringen" element={<RequireAuth><Reservation /></RequireAuth>} />
          <Route exact path="/producten" element={<RequireAuth><ProductList /></RequireAuth>} />
          <Route exact path="/r" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/bekijkreserveringen" element={ <RequireAuth><SeeReservations /></RequireAuth>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;

