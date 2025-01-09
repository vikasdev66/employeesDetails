// RecentActivity.js
import React, { useState } from "react";
import "./RecentActivity.scss"
import { List, Avatar, Typography } from "antd";
import {ActivityData} from "../../Content"
const { Title, Text } = Typography;

export default function RecentActivity() {
  const [activityData, setActivityData] = useState(ActivityData)
 

  return (
    <div className="recent-activity-section">
      <Title level={4} style={{ marginBottom: 16 }}>
        Recent activity
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={activityData}
        renderItem={(item) => (
          <List.Item className="activity-item">
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.name}
              description={item.activity}
            />
            <Text className="timestamp">{item.timestamp}</Text> 
          </List.Item>
        )}
      />
    </div>
  );
}
