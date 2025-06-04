import React from 'react'
import "../training/chart.css";
import {Chart as ChartJS} from "chart.js/auto";
import {Bar,Doughnut,Line} from "react-chartjs-2";

const Charts = () => {
  return (
    <div className='charts_container'>
        <div className='chart1'></div>
        <div className='chart2'>
            <Bar
                 data={{
                    //  this is used for x axis for our bar chart
                    labels:["A","B","C"],
                    datasets:[
                        {
                        label:"Revenue",
                        data:[200,300,400],
                       },
                        {
                        label:"Loss",
                        data:[30,50,60],
                       },
                ], 
                 }}

            />
        </div>
        <div className='chart3'></div>
    </div>
  )
}

export default Charts