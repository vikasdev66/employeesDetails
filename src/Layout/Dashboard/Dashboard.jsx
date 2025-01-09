import React from "react";
import { Layout} from "antd";
import "./DashboardContent.scss";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import UserManagement from "../../Pages/UserManagement/UserManagement";
import Report from  "../../Pages/Reports/Reports";
import Settings from  "../../Pages/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const DashboardLayout = () => {
  
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
        <Sidebar/>

      <Layout className="site-layout">
        {/* Navbar */}
        <Navbar/>      

        {/* Routes for Dashboard Content */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Users" element={<UserManagement />} />
          <Route path="/Reports" element={<Report />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>

      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
