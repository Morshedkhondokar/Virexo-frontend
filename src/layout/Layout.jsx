// components/layout/Layout.jsx
import { Outlet } from "react-router";
import Navbar from "../components/shared/nav/Navbar";


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Add Footer here if you have one */}
    </div>
  );
};

export default Layout;