import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Route/AuthProvider";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineUpdate } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
const Navbar = () => {
  const {user,logout}=useContext(AuthContext)
  const [open,setopen]=useState(false)

    const navbar=<>
    <li className="font-semibold ">
        <NavLink to={'/'} className={({ isActive}) =>
   isActive ? "text-[#FF5A3D] bg-gray-300 no-underline" : " text-black no-underline"
  } > <FaHome className="lg:hidden md:hidden"></FaHome> Home</NavLink>
    </li>
    <li className="font-semibold">
        <NavLink  to={'/user'} className={({ isActive}) =>
   isActive ? "text-[#FF5A3D] bg-gray-300 no-underline" : " text-black no-underline"
  }><CgProfile className="lg:hidden md:hidden"></CgProfile> User profile</NavLink>
    </li>
    <li className="font-semibold">
        <NavLink  to={'/profile'} className={({ isActive}) =>
   isActive ? "text-[#FF5A3D] bg-gray-300 no-underline" : " text-black no-underline"
  }><MdOutlineUpdate className="lg:hidden md:hidden"></MdOutlineUpdate> Update profile</NavLink>
    </li>
    <li className="font-semibold">
        <NavLink  to={'/contact'} className={({ isActive}) =>
   isActive ? "text-[#FF5A3D] bg-gray-300 no-underline" : " text-black no-underline"
  }><BiSolidContact className="lg:hidden md:hidden"></BiSolidContact> Contact Us</NavLink>
    </li>
    </>
  return (
    <div className="navbar px-0 fixed  z-50 max-w-[1440px]  top-0 shadow-sm  bg-white opacity-90">
      <div className="navbar-start">
        <div className="dropdown">
       
         <div className="md:hidden pr-2" onClick={()=>setopen(!open)}>
          
         {
          open === true?<MdOutlineClose className="text-2xl "></MdOutlineClose> : <LuMenu className="text-2xl"></LuMenu>
         }
          <ul
            className={`menu absolute duration-1000
            ${open?'-right-48':'right-10'}
            mt-3 z-[2] p-2 shadow bg-[#F2F6F7] h-lvh w-52`}
          >
          {
            navbar
          }
          </ul>
         </div>
        </div>
        <Link to={'/'} className="lg:text-4xl no-underline text-black text-xl font-bold"><span className="text-[#FF5A3D]">D</span>ream Dwellings</Link>
      </div>
      <div className="navbar-center md:flex hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navbar
          }
        </ul>
      </div>

      <div className="navbar-end">
      <div className=" px-4">
  {
    user? <div className="flex items-center gap-4">
      <div className="avatar">
    <div className="w-12 rounded-full">
      <img title={user?.displayName || "name not found"} src={user?.photoURL || "https://source.unsplash.com/30x30/?random"} />
    </div>
  </div>
      <button onClick={logout} className="relative px-5 py-3 overflow-hidden font-bold no-underline cursor-pointer text-white bg-[#FF5A3D] border border-gray-100 rounded-lg shadow-inner group">
    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
    <span className="relative transition-colors duration-200 delay-200   group-hover:text-white ease">Logout</span>
    </button>
    </div> : <Link to={'/login'} className="relative px-5 py-3 overflow-hidden font-bold no-underline  text-white bg-[#FF5A3D] border border-gray-100 rounded-lg shadow-inner group">
    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
    <span className="relative transition-colors duration-200 delay-200   group-hover:text-white ease">Login</span>
    </Link>
  }
  </div>
      </div>
    </div>
  );
};

export default Navbar;
