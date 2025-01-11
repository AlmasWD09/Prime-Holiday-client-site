"use client"
import React from 'react';
import { Layout, Menu, } from 'antd';
import { FaHouseMedical } from 'react-icons/fa6';
const { Header, Content, Footer, Sider } = Layout;


const items = [...Array(4)].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: <FaHouseMedical />,
    label: `nav ${index + 1}`,
  }),
);


const DashboardLayout = () => {

  return (
    <Layout>
      <Sider
      className="w-[354px] h-screen !bg-red-800"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: "white",
          }}
        /> */}
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "gray",
              borderRadius: 45,
            }}
          >
            content
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;