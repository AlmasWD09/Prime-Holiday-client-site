import Sidebar from "@/app/components/dashboard/sidebar/Sidebar";

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard layout for the application',
};

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-8">
    {/* Sidebar */}
    <div className="bg-red-300 h-screen overflow-y-hidden">
      <Sidebar />
    </div>

    {/* Outlet */}
    <div className="col-span-7 bg-green-400">
    {children}
    </div>
  </div>
  );
}
