import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Footer";

const Root = () => {
  return (
    <div className=" font-openSans">
      <div className="max-w-[1440px] mx-auto mb-16">
          <Navbar></Navbar>
       <div className="mt-[99px] mb-12">
       <Outlet></Outlet>
       </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
