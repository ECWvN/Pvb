import React from 'react'
import "./NeedLogin.css"
import { Link } from 'react-router-dom'

export default function NeedLogin() {
    return (
        <div class="NeedLoginCont">
            <div className="NeddLoginMes">
                Dit is een systeem <br />voor bewoners van
                <div className="NeddLoginMesRed">
                    Enkeltje Zelfstandig
                </div>
            </div>

            <Link to="/login">
                <button className="NeedLoginBtnLogin">Login</button>
            </Link>

            <div className="of">- of -</div>
            <Link to="/registreren"> <button className="NeedLoginbtnReg">Registreren</button></Link>
        </div>
    )
}