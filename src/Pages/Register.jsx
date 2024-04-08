import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="bg-bgimg bg-bottom  h-full p-4 bg-no-repeat bg-cover" >
        <div className=" max-w-md my-4 mx-auto p-8 space-y-3 rounded-xl  bg-white opacity-70 text-black">
         <h1 className="text-2xl font-bold text-center">Register</h1>
         <form  className="space-y-6">
           <div className="space-y-1 text-sm">
             <label htmlFor="username" className="block font-bold">
               Username
             </label>
             <input
               type="text"
               name="username"
               id="username"
               placeholder="Username"
               className="w-full lg:px-2  py-3 rounded-md  border-gray-700 border-opacity-30 bg-white opacity-90  focus:border-violet-400"
             />
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
             />
           </div>
           <div className="space-y-1 text-sm">
             <label htmlFor="photo" className="block font-bold">
             photoURL
             </label>
             <input
               type="text"
               name="photo"
               id="photo"
               placeholder="pest your photoURL"
               className="w-full lg:px-2  py-3 rounded-md  border-gray-700 border-opacity-30 bg-white opacity-90  focus:border-violet-400"
             />
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
             />
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
             className="underline text-blue-600"
           >
             Login
           </Link>
         </p>
       </div>
      </div>
    );
};

export default Register;