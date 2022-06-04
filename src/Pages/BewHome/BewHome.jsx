import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import './BewHome.css'
import HomeImage from "./HomeImage.jpg"

export default function BewHome() {
    return (
        <div className='containerHome'>
            <div className='HomeBanner'>
                <div className="introductieHome">
                    Enkeltje Zelfstandig
                </div>
            </div>
            <div className="EnkeltjeIntro">
                <div className="ImageBannerHome">
                <img id= "homeimg"src={HomeImage} />
                </div>
                <h2 className='HomeBewTitle'> Wie zijn wij?</h2>
            <div className="HomeIntroduction">
                Enkeltje Zelfstandig biedt plek aan 19 jongeren. Deze jongeren worden intensief begeleid naar zelfstandigheid. Binnen Enkeltje Zelfstandig wordt met de jongeren gewerkt aan zelfsturingsvaardigheden. Hiervoor is inzicht in eigen gedrag nodig en motivatie om hierin samen te werken.
                De interventie bestaat uit verschillende fasen, met een opbouw waarbij in toenemende mate naar zelfstandigheid en bijbehorende verantwoordelijkheden wordt toegewerkt. Ook is er bij Enkeltje Zelfstandig de mogelijkheid om door te stromen naar een vervolgfase waarbij geen 24-uurs opvang meer nodig is, namelijk de Riouwstraat. Hier kunnen 2 jongeren wonen.
            </div>
       
    
          
            </div>
        </div>
    )
}
