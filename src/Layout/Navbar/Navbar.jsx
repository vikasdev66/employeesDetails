import React, { useState, useContext } from "react";
import { Badge, Layout, Menu, Dropdown, Input, Button } from "antd";
import {
  UserOutlined,
  SettingFilled,
  LogoutOutlined,
  MenuOutlined,
  BellOutlined,
  MoonFilled,
  SunFilled,
} from "@ant-design/icons";
import MobileDrawer from "../../Components/MobileDrawer/MobileDrawer.jsx";
import "./Navbar.scss";
import { GlobalSettingsContext } from "../../App.js";

const { Header } = Layout;

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(GlobalSettingsContext);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleToggleTheme = (flag) => {
    setDarkMode(flag);
  };

  const handleToggleMenu = () => {
    setDrawerVisible(!drawerVisible);
  };

  {/* Menu Items for profile button */}
  const menu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingFilled />}>
        Settings
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Header className="site-layout-background navbar">
        {/* Ham menu for mobile devices (Navigation Sidebar) */}
        <Button
          icon={<MenuOutlined />}
          className="mobile-menu-button"
          onClick={handleToggleMenu}
        />

        {/* Left side with search bar */}
        <div className="navbar-left">
          <Input
            placeholder="Search..."
            className="search-input"
            style={{ width: "100%" }}
          />
        </div>

        {/* Right side with icons and menu */}
        <div className="navbar-right">
          <Dropdown overlay={menu} trigger={["click"]}>
            <MenuOutlined
              className="user-icon"
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </Dropdown>

          {/* Notification Icon */}
          <Badge count={5} className="icon-badge">
            <BellOutlined className="user-icon" />
          </Badge>

          {/* Dark Mode toggle button */}
          {darkMode ? (
            <MoonFilled
              onClick={() => handleToggleTheme(false)}
              className="user-icon"
            />
          ) : (
            <SunFilled
              onClick={() => handleToggleTheme(true)}
              className="user-icon"
            />
          )}
        </div>
      </Header>

      {/* Mobile drawer component for mobile screen*/}
      <MobileDrawer visible={drawerVisible} onClose={handleToggleMenu} />
    </>
  );
}
