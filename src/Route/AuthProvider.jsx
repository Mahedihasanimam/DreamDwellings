import { createContext, useEffect, useState } from "react";
import auth from "../firbase/firbase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setuser]=useState([])
    const googleProvider=new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    //registraation 
    const createUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }
    //login
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google login 
    const googleLogin=()=>{
       return signInWithPopup(auth,googleProvider)
    }
    // Github login 
    const githubLogin=()=>{
       return signInWithPopup(auth,githubProvider)
    }
    // logout
    const logout=()=>{
        signOut(auth)
    }
    // ovjarvar 
    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,user=>{
            setuser(user)
        })
        return()=>{
            unsubcribe()
        }
    },[])
    const authinfo={createUser,login,user,logout,googleLogin,githubLogin,setuser}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;