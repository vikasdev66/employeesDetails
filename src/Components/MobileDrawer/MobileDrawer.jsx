import React from "react";
import { Drawer, Menu } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  BarChartOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./MobileDrawer.scss"; // Import custom SCSS for drawer styling

export default function MobileDrawer({ visible, onClose }) {
  return (
    <Drawer
      title={<div className="drawer-title">Employees Details</div>}
      placement="left"
      closable={true}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ padding: 0 }}
      headerStyle={{ backgroundColor: "var(--primary-color)", color: "#fff" }}
    >
      <Menu mode="inline" className="drawer-menu" style={{ height: "100%" }}>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<BarChartOutlined />}>
          <Link to="/Users">Users</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DollarCircleOutlined />}>
          <Link to="/Reports">Reports</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to="/Settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Drawer>
  );
}
