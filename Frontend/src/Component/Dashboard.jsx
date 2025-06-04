import React from 'react'
import "../css/Dashboard.css";
import data_set from "../data/sampledata.json";
import {Chart as ChartJS, scales} from "chart.js/auto";
import {Bar,Doughnut} from "react-chartjs-2";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard_con">
          <div className="total_count_of_all">
            <div>
                <i className="fa-solid fa-cart-shopping"></i>
            <span>
              <h4 className='small_cart_name'>Total Shoping</h4>
              <h5 className='smart_cart_price'>450</h5>
            </span>
          </div>


          <div>
           <i className="fa-solid fa-basket-shopping"></i>
            <span>
                 <h4 className='small_cart_name'>Total Product</h4>
              <h5 className='smart_cart_price'>650</h5>
            </span>
          </div>
          <div>
             <i className="fa-solid fa-user"></i>
            <span>
                  <h4 className='small_cart_name'>Total Customer</h4>
              <h5 className='smart_cart_price'>120</h5>
            </span>
          </div>
          <div>
              <i className="fa-solid fa-hand-holding-dollar"></i>
          <span>
                  <h4 className='small_cart_name'>Total Revenue</h4>
              <h5 className='smart_cart_price'>34950</h5>
          </span>
          </div>
        </div>
        <div className="charts_areas">
          <div>
                <Doughnut 
                data={{
                  labels:data_set.map((item)=>item.label),
                  datasets:[
                    {
                      label:"Revenue",
                      data:data_set.map((value)=>value.revunue),
                       backgroundColor:['rgba(37, 133, 248, 1)',
                        'rgb(16, 229, 115)',
                        'rgba(235, 2, 219, 1)',
                        'rgba(245, 15, 57, 1)',
                        'rgba(245, 241, 15, 1)'
                       ],
                       borderRadius:5,
                       hoverOffset: 4
                    },
                  ],
                  options:{
                    scales:{
                      y:{
                        beginAtZero:true
                      }
                    }
                  },
                 
                }}
                />
          </div>
          <div>
            <Bar
                data={{
                  labels:data_set.map((item)=>item.label),
                  datasets:[
                    {
                      label:"Revenue",
                      data:data_set.map((value)=>value.revunue),
                       backgroundColor:'rgba(37, 133, 248, 1)',
                       borderRadius:5,
                    },
                    {
                      label:"Loss",
                      data:data_set.map((value)=>value.loss),
                       backgroundColor:'rgb(16, 229, 115)',
                       borderRadius:5,
                     }
                  ],
                  options:{
                    scales:{
                      y:{
                        beginAtZero:true
                      }
                    }
                  },
                 
                }}
            
            />

          </div>
        </div>
      </div>
       
    </div>
  )
}

export default Dashboard