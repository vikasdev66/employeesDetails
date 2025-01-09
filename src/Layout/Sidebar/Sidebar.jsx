import React, { useState } from "react";
import {
  UserOutlined,
  PieChartOutlined,
  BarChartOutlined,
  DollarCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";

const { Sider } = Layout;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const handleSidebarCollapse = () => setCollapsed(!collapsed);
  const location = useLocation();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className="sidebar">
      <Button
        type="primary"
        onClick={handleSidebarCollapse}
        className="collapse-button"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      {!collapsed ? (
        <div className="logo">Employees Details</div>
      ) : (
        <div className="logo">CC</div>
      )}
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultSelectedKeys={["/"]}
      >
        <Menu.Item key="/" icon={<PieChartOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/UserManagement" icon={<BarChartOutlined />}>
          <Link to="/Users">Users</Link>
        </Menu.Item>
        <Menu.Item key="/Reports" icon={<DollarCircleOutlined />}>
          <Link to="/Reports">Reports</Link>
        </Menu.Item>
        <Menu.Item key="/Settings" icon={<UserOutlined />}>
          <Link to="/Settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
