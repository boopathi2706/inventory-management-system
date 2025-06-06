import React from "react";
import "../css/Report.css";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sampledata from "../data/sampledata.json";
import month_wise from "../data/month_wise.json";
import { scales } from "chart.js";

const Report = () => {
  return (
    <div>
      <div className="report_conntainer">
        <div>
          <Doughnut
            data={{
              labels: sampledata.map((item) => item.label),
              datasets: [
                {
                  label: "revenue",
                  data: sampledata.map((item) => item.revunue),
                  backgroundColor: [
                    "rgba(37, 133, 248, 1)",
                    "rgb(16, 229, 115)",
                    "rgba(235, 2, 219, 1)",
                    "rgba(245, 15, 57, 1)",
                    "rgba(245, 241, 15, 1)",
                  ],
                  borderRadius: 5,
                  hoverOffset: 4,
                },
              ],
              options: {
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              },
            }}
          />
        </div>

        <div>
          <Line
            data={{
              
              labels: month_wise.map((item) => item.label),
              datasets: [
                {
                  label: "revenue",
                  data: month_wise.map((item) => item.revenue),
                  backgroundColor: "rgb(16, 229, 115)",
                  borderRadius: 5,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                  borderWidth:2
                },
              ],
              options: {
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                }
              },
            }}
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Report;
