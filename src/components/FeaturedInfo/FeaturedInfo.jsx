import "./FeaturedInfo.css"
import React from 'react'


export default function FeaturedInfo() {
  return (
    <div className="FeaturedInfo">
      <div className="FeaturedItem">
          <span className="FeaturedTitle">Leden</span>
          <div className="FeaturedMoneyContainer">
              <span className="FeaturedMoney">19</span>
            </div>
           <div className="FeaturedSub">vorgie maan 18</div>
        </div>

        <div className="FeaturedItem">
          <span className="FeaturedTitle">Opbrengst deze week</span>
          <div className="FeaturedMoneyContainer">
              <span className="FeaturedMoney">€90</span>
            </div>
           <div className="FeaturedSub">Vorige week €120</div>
        </div>
        <div className="FeaturedItem">
          <span className="FeaturedTitle">Vandaag op het menu</span>
          <div className="FeaturedMoneyContainer">
              <span className="FeaturedMoney">Pasta</span>
            </div>
        </div>
    </div>
  )
}
