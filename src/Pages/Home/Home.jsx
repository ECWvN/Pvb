import React from 'react'
import "./Home.css"
import "../../components/Sidebar/Sidebar.css"
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo"
import Chart from "../../components/Chart/Chart"
import{userData} from "../../DummyData"
import WidgetLarge from "../../components/widgetLarge/WidgetLarge"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import Sidebar from '../../components/Sidebar/Sidebar';



export default function Home() {
  return (
    <div className="container">
      <Sidebar/>
    <div className="Home">
      <FeaturedInfo/>
      <Chart data={userData} title= "Opbrengst" grid dataKey="uv"/>
      <div className="homewidgets">
        <WidgetSmall/>
        <WidgetLarge/> 
      </div>
    </div>
    </div>
  )
}
