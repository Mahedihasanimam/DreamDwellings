import { createBrowserRouter } from "react-router-dom";


import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Home/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";




export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/profile',
                element:<Profile></Profile>
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
            
        ]
       
    },
   
])