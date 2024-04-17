import { createContext, useEffect, useState } from "react";
import auth from "../firbase/firbase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setuser]=useState([])
    const googleProvider=new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    const [loder,setLoder]=useState(true)

    //registraation 
    const createUser=(email,password)=>{
        setLoder(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
    //login
    const login=(email,password)=>{
        setLoder(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google login 
    const googleLogin=()=>{
        setLoder(true)
       return signInWithPopup(auth,googleProvider)
    }
    // Github login 
    const githubLogin=()=>{
        setLoder(true)
       return signInWithPopup(auth,githubProvider)
    }
    // logout
    const logout=()=>{
        setLoder(true)
        signOut(auth)
    }
    // ovjarvar 
    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,user=>{
            setuser(user)
            setLoder(false)
        })
        return()=>{
            unsubcribe()
        }
    },[])
    const authinfo={createUser,login,user,logout,googleLogin,githubLogin,setuser,loder}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;