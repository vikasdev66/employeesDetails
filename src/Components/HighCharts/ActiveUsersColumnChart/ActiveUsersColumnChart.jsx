import React from "react";
import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts";

import "./ActiveUsersColumnChart.scss";
import { useActiveUsersColumnChart } from "../../../CustomHooks/useActiveUsersColumnChart.jsx";

export const ActiveUsersColumnChart = () => {
  const { chartOptions } = useActiveUsersColumnChart();
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div>
        <div className="column-charts-title-cont">
          <h2>Active Users</h2>
          <p>
            than last week <span>+30%</span>
          </p>
        </div>
        <p style={{ color: "gray", fontSize: "12px" }}>
          You previously had 100,000 active users last week.
        </p>
      </div>
    </div>
  );
};
