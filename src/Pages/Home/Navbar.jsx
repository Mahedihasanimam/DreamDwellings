import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Route/AuthProvider";

const Navbar = () => {
  const {user,logout}=useContext(AuthContext)

    const navbar=<>
    <li className="font-semibold ">
        <NavLink to={'/'} className={({ isActive}) =>
   isActive ? "text-[#FF5A3D] no-underline" : " no-underline"
  } >Home</NavLink>
    </li>
    <li className="font-semibold">
        <NavLink  to={'/profile'} className={({ isActive}) =>
   isActive ? "text-[#FF5A3D] no-underline" : " no-underline"
  }>Update profile</NavLink>
    </li>
    <li className="font-semibold">
        <NavLink  to={'/user'} className={({ isActive}) =>
   isActive ? "text-[#FF5A3D] no-underline" : " no-underline"
  }>User profile</NavLink>
    </li>
    <li className="font-semibold">
        <NavLink  to={'/contact'} className={({ isActive}) =>
   isActive ? "text-[#FF5A3D] no-underline" : " no-underline"
  }>Contact Us</NavLink>
    </li>
    </>
  return (
    <div className="navbar px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-[#F2F6F7] h-lvh w-52"
          >
          {
            navbar
          }
          </ul>
        </div>
        <Link to={'/'} className="lg:text-4xl no-underline text-xl font-bold"><span className="text-[#FF5A3D]">D</span>ream Dwellings</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navbar
          }
        </ul>
      </div>

      <div className="navbar-end">
      <div className="">
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
