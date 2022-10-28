import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

const Layout = () => {
  return (
    <div className="w-full h-[100vh] font-poppins">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
