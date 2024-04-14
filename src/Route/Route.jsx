import { createBrowserRouter } from "react-router-dom";


import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Home/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Details from "../Pages/Home/Details";
import ErrPage from "./ErrPage";
import UserProfile from "../Pages/Home/UserProfile";
import PrivateRoute from "./PrivateRoute";




export const router=createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrPage></ErrPage>,
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/user',
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            }
            ,
            {
                path:'/login',
                element:<Login></Login>
            }
            
            ,
            {
                path:'/register',
                element:<Register></Register>
            }
            ,
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:()=>fetch('/realstate.json')
            }
            
            
        ]
       
    },
   
])