"use client"
import React from 'react';
import { Layout, } from 'antd';
import Sidebar from '@/app/components/dashboard/sidebar/Sidebar';
const { Content, Sider } = Layout;

const DashboardLayout = ({ children }) => {

  return (
    <Layout>
      <Sider
        className="w-[354px] h-screen fixed"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        {/* sidebar component */}
        <Sidebar />
      </Sider>

      <Layout>


        <Content>
          <div className='min-h-screen bg-[#FFFFFF]'>
            {children}
          </div>
        </Content>

      </Layout>
    </Layout>
  );
};
export default DashboardLayout;