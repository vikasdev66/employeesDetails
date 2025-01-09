import React, { useState } from "react";
import { Card, Layout } from "antd";
import InfoChips from "../../Components/InfoCards/InfoCard";
import RecentActivity from "../../Components/RecentActivity/RecentActivity";
import {
  ActiveUsersColumnChart,
  ActiveUsersLineChart,
} from "../../Components/HighCharts/index";
import { StatsData } from "../../Content";


const { Content } = Layout;
export default function Dashboard() {
 const [statsData, setStatsData] = useState(StatsData)
  return (
    <Content className="dashboard-content">
      <div className="dashboard-header">
        {/* InfoChips will display the statistics data. */}
        {statsData.map((item) => (
          <InfoChips
            title={item.title}
            stat={item.stats}
            percentage={item.percentage}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="dashboard-charts">
        
        {/* Column Chart Component */}
        <Card className="chart-card">
          <ActiveUsersColumnChart />
        </Card>

        {/* Line Chart Component */}
        <Card className="chart-card">
          <ActiveUsersLineChart />
        </Card>
      </div>
      
      {/* This section will show the recent activity of users. */}
      <div className="dashboard-stats">
        <Card className="stats-panel">
          <RecentActivity />
        </Card>
      </div>
    </Content>
  );
}
