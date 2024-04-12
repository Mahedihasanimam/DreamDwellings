import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Footer";


const Root = () => {
    return (
        <div className="max-w-[1440px] mx-auto font-openSans">
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Footer></Footer>           
        </div>
    );
};

export default Root;