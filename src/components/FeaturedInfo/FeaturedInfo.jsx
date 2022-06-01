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
          <span className="FeaturedTitle">Sales</span>
          <div className="FeaturedMoneyContainer">
              <span className="FeaturedMoney">$3,50</span>
            </div>
           <div className="FeaturedSub">last month $3,30</div>
        </div>

        <div className="FeaturedItem">
          <span className="FeaturedTitle">Sales</span>
          <div className="FeaturedMoneyContainer">
              <span className="FeaturedMoney">$3,50</span>
            </div>
           <div className="FeaturedSub">last month $3,30</div>
        </div>

        <div className="FeaturedItem">
          <span className="FeaturedTitle">Sales</span>
          <div className="FeaturedMoneyContainer">
              <span className="FeaturedMoney">$3,50</span>
            </div>
           <div className="FeaturedSub">last month $3,30</div>
        </div>
    </div>
  )
}
