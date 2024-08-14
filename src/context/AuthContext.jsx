import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import {auth} from "../Firebase"

// create context
const AuthContext = createContext();

// provider context
export const AuthProvider = ({children}) =>{
    console.log("auth provider is running")
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // signIn with google
    const signInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    const value = {
        currentUser,
        setCurrentUser,
        signInWithGoogle
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            console.log("printing user\n")
            console.log(user)
            setCurrentUser(user)
            setLoading(false)
        })
        return () => unsubscribe();
    },[])
    
    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}