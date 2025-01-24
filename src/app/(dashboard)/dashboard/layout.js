"use client";

import React from "react";
import { Layout } from "antd";
import Sidebar from "@/app/components/dashboard/sidebar/Sidebar";
import AuthProvider from "@/services/AuthProvider";

const { Content, Sider } = Layout;

const DashboardLayout = ({ children }) => {
  return (
    <AuthProvider>
      <Layout>
        <Sider
          className=""
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          {/* Sidebar component */}
          <Sidebar />
        </Sider>

        <Layout>
          <Content>
            <div>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </AuthProvider>
  );
};

export default DashboardLayout;
