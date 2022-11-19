import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";

const Layout = () => {
  return (
    <div className="w-full h-[100vh] font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
