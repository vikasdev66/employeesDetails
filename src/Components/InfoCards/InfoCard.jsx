import React from "react";
import { Card } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";
import "./InfoCard.scss";

const InfoCard = ({ title = "", stat = "", percentage = "", icon }) => {
  return (
    <Card className="info-card" bordered={false}>
      <div className="card-content">
        <div className="text-content">
          <p className="title">{title}</p>
          <p className="amount">
            <span>{stat}</span> <span className="percentage">{percentage}</span>
          </p>
        </div>
        <div className="icon-container">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default InfoCard;
