"use client";

import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Sidebar from "@/app/components/dashboard/sidebar/Sidebar";
import AuthProvider from "@/services/AuthProvider";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";


const { Content, Sider } = Layout;

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    const tokenGet = Cookies.get("token"); 
  
    if (!tokenGet) {
      router.push('/login'); 
    } else {
      setIsAuth(true);
    }
    
    setLoading(false); 
  }, [router]);
  
  

  return (
    <AuthProvider>
      <Layout>
        <Sider
          //  style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0, backgroundColor: "#fffff0", }}
          style={{ width: '260px' }}
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

          <div className="bg-[#135029] py-3 text-white">
            <h1 className="text-[36px] font-Roboto font-semibold pl-20">Welcome to Dashboard </h1>
          </div>
          <Content style={{marginLeft:16}}>

            {/* Header goes here */}


            {/* Content goes here */}
            <div>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </AuthProvider>
  );
};

export default DashboardLayout;
