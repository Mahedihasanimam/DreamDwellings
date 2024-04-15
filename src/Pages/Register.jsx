import { Link, useNavigate } from "react-router-dom";
import 'animate.css';
import { useForm } from "react-hook-form"
import { AuthContext } from "../Route/AuthProvider";

import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../firbase/firbase.config";

const Register = () => {
    const {createUser,logout}=useContext(AuthContext)
    const photoRegex = /^https?:\/\/(?:www\.)?[^\s/$.?#].[^\s]*$/;
    const navigate=useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      Username: ""
    }
  })

  
  const onSubmit = (data) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const password=data.password
    const name=data.Username
    const photoUrl=data.photo
   
    if(!photoRegex.test(photoUrl)){
		return toast.error("Provide a valid URL");
	}

    console.log(password,name,photoUrl)
    if(!regex.test(password)){
      return toast.error('password shouldbe an uppercase,a Lowercase and must be at least 6 character')
    }
    createUser(data.mail,data.password)
    .then(result=>{
      navigate('/login')
      logout()
      toast.success('registared succesfully')

      updateProfile(auth.currentUser, {
        displayName: name,
         photoURL: photoUrl
      }).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      });
    })
    .catch(err=>{
      return toast.error('Invalid email or password')
      
    })
  }
    return (
        <div className="bg-bgimg bg-bottom  h-full p-4 bg-no-repeat bg-cover" >
        <div className=" animate__animated animate__fadeInUp max-w-md my-4 mx-auto p-8 space-y-3 rounded-xl  bg-white opacity-70 text-black">
         <h1 className="text-2xl font-bold text-center">Register</h1>
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
           <div className="space-y-1 text-sm">
             <label htmlFor="username" className="block font-bold">
               Name
             </label>
             <input
               type="text"
               name="username"
               id="username"
               placeholder="Username"
               className="w-full lg:px-2  py-3 rounded-md  border-gray-700 border-opacity-30 bg-white opacity-90  focus:border-violet-400"
               {...register("Username", { required: true })}
               aria-invalid={errors.Username ? "true" : "false"}
            
            />
             {errors.Username?.type === "required" && (
        <p className="text-red-500" role="alert">User name is required</p>
      )}
           </div>
           <div className="space-y-1 text-sm">
             <label htmlFor="email" className=" block font-bold">
               Your Email
             </label>
             <input
               type="email"
               name="email"
               id="email"
               placeholder="Your Email"
               className="w-full lg:px-2  py-3 rounded-md  border-gray-700 border-opacity-30 bg-white opacity-90  focus:border-violet-400"
               {...register("mail", { required: "Email Address is required" })}
               aria-invalid={errors.mail ? "true" : "false"}
             
             />
             {errors.mail && <p className="text-red-500" role="alert">{errors.mail.message}</p>}
           </div>
           <div className="space-y-1 text-sm">
             <label htmlFor="photo" className="block font-bold">
             photoURL
             </label>
             <input
               type="text"
               name="photo"
               id="photo"
               placeholder="https://"
               className="w-full lg:px-2  py-3 rounded-md  border-gray-700 border-opacity-30 bg-white opacity-90  focus:border-violet-400"
             
               {...register("photo", { required: "photo url is required" })}
               aria-invalid={errors.photo ? "true" : "false"}
             />
              {errors.photo && <p className="text-red-500" role="alert">{errors.photo.message}</p>}
           </div>
           <div className="space-y-1 text-sm">
             <label htmlFor="password" className="block font-bold">
               Password
             </label>
             <input
               type="password"
               name="password"
               id="password"
               placeholder="Password"
               className="w-full lg:px-2 py-3 rounded-md  border-blue-600 border-opacity-30  focus:border-violet-400"
             
               {...register("password", { required: "password is required" })}
               aria-invalid={errors.password ? "true" : "false"}
             />
              {errors.password && <p className="text-red-500" role="alert">{errors.password.message}</p>}
             <div className="flex justify-end text-xs text-gray-400">
               <a className="text-blue-600" rel="noopener noreferrer" href="#">
                 Forgot Password?
               </a>
             </div>
           </div>
           <button className="block w-full p-3 text-center rounded-sm bg-blue-600 border-none text-white">
             Register
           </button>
         </form>
       
      
         <p className="text-xs text-center sm:px-6 text-gray-400">
           Already have an account?
           <Link to={'/login'}
             rel="noopener noreferrer"
             href="#"
             className="underline text-blue-600 font-bold"
           >
             Login
           </Link>
         </p>
       </div>
      </div>
    );
};

export default Register;