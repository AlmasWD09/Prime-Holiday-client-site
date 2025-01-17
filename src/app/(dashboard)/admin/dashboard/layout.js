"use client"

import Sidebar from "@/app/components/dashboard/sidebar/Sidebar";



const DashboardLayout = ({ children }) => {

    return (
        // <Layout>
        //   <Sider
        //     className="w-[354px] h-screen fixed"
        //     breakpoint="lg"
        //     collapsedWidth="0"
        //     onBreakpoint={(broken) => {
        //       console.log(broken);
        //     }}
        //     onCollapse={(collapsed, type) => {
        //       console.log(collapsed, type);
        //     }}
        //   >
        //     {/* sidebar component */}
        //     <Sidebar />
        //   </Sider>

        //   <Layout>


        //     <Content>
        //       <div className='bg-[#FFFFFF]'>
        //         {children}
        //       </div>
        //     </Content>

        //   </Layout>
        // </Layout>
        <div className="grid grid-cols-8">

            <div className="bg-gray-100 col-span-1 ">
                <Sidebar />
            </div>

            {/* <div className='bg-[#FFFFFF] col-span-7'> */}
            <div className='bg-red-300 col-span-7 m-8 p-4'>
                {children}
            </div>
        </div>
    );
};
export default DashboardLayout;