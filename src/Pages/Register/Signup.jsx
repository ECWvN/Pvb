import React from 'react'
import Register from '../../components/Register/Register'
import "./Signup.css"
import BannerReg from "./bannerReg.png"
import { AuthProvider } from '../../contexts/AuthContext'


export default function Signup() {
  return (
    <AuthProvider>
    
      <div className="SignUpBanner"><img src={BannerReg}/></div>

      <Register/>
   
    </AuthProvider>
  )
}
