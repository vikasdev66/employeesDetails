import React from "react";
import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts";
import { useActiveUsersLineChart } from "../../../CustomHooks/useActiveUsersLineChart.jsx";
import "./ActiveUsersLineChart.scss";

export const ActiveUsersLineChart = () => {
  const { chartOptions } = useActiveUsersLineChart();
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div>
        <div className="column-charts-title-cont">
          <h2>Active Sales</h2>
          <p>
            than last week <span>+20%</span>
          </p>
        </div>
        <p style={{ color: "gray", fontSize: "12px" }}>
          Last week you had 100,000 active sales.
        </p>
      </div>
    </div>
  );
};
