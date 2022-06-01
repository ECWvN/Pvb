import React from 'react'
import "./Chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export default function Chart({title,data, dataKey, grid}) {
    return (
        <div className="Chart">

            <h3 className="ChartTitle"> {title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data} >
                   <XAxis dataKey= "name"/>
                    <Line type="monotone" dataKey= {dataKey} stroke="#E8231A" />
                    <Tooltip storke="#E8231A"/>
                    {grid && <CartesianGrid stroke=" #f4f2ef" strokeDasharray="4 4"/>}
                </LineChart>
                
            </ResponsiveContainer>
        </div>
    )
}
