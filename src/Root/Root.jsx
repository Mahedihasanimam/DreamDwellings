import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";


const Root = () => {
    return (
        <div className="max-w-[1440px] mx-auto font-openSans">
            <Navbar></Navbar>
            <Outlet></Outlet>            
        </div>
    );
};

export default Root;