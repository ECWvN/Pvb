import React from 'react'
import "./WidgetSmall.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSmall() {
  return (
    <div className="widgetSmall">
        <span className="widgetSmallTitle">Neiuwe Gebruikers</span>
        <ul className="widgetSmallList">
            <li className="widgetSmallItem">
                <div className="witdgetSmallUser">
                    <span className="WidgetSmallUsername">Amber</span>
                </div>
                <button className="widgetSmallButton">
                  <VisibilityIcon className="visibilityIcon"/>
                  Bekijk
                </button>
            </li>
            <li className="widgetSmallItem">
                <div className="witdgetSmallUser">
                    <span className="WidgetSmallUsername">Amber</span>
                </div>
                <button className="widgetSmallButton">
                  <VisibilityIcon className="visibilityIcon"/>
                  Bekijk
                </button>
            </li>
            <li className="widgetSmallItem">
                <div className="witdgetSmallUser">
                    <span className="WidgetSmallUsername">Amber</span>
                </div>
                <button className="widgetSmallButton">
                  <VisibilityIcon className="visibilityIcon"/>
                  Bekijk
                </button>
            </li>
            <li className="widgetSmallItem">
                <div className="witdgetSmallUser">
                    <span className="WidgetSmallUsername">Amber</span>
                </div>
                <button className="widgetSmallButton">
                  <VisibilityIcon className="visibilityIcon"/>
                  Bekijk
                </button>
            </li>
         
        </ul>
      
    </div>
  )
}
