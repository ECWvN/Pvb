import React from 'react'
import "./WidgetLarge.css"


export default function WidgetLarge() {
    const Button = ({ type }) => {
        return <button className={"widgetLargeButton " + type}>{type}</button>
    };
    return (
        <div className="widgetLarge">
            <h3 className="widgetLargeTitle">Laatste reserveringen</h3>
            <table className="widgeLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">Bewoner</th>
                    <th className="widgetLargeTh">Datum</th>
                    <th className="widgetLargeTh">Kosten</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <span className="widgetLargeName">Amber</span>
                    </td>
                    <td className="widgetLargeDate">1 jan 2022</td>
                    <td className="widgetLargeAmount">$15</td>
                    <td className="widgetLargeDagen"><Button type="Dagen" /></td>

                </tr>

                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <span className="widgetLargeName">Amber</span>
                    </td>
                    <td className="widgetLargeDate">1 jan 2022</td>
                    <td className="widgetLargeAmount">$15</td>
                    <td className="widgetLargeDagen">
                        <Button type="Week" />
                    </td>

                </tr>

            </table>

        </div>
    )
}
