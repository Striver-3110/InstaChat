import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase";

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
        signInWithPopup(auth, provider).then((user)=>{
            // localStorage.setItem("user", user)
            setCurrentUser(user.user)
        })
    }
    // manual signOut
    // const signOut = () =>{
    //     setCurrentUser(null)
    //     localStorage.clear()
    // }
    // googleSignOut

    const logout = () => {
        signOut(auth);
    }

    const value = {
        currentUser,
        setCurrentUser,
        signInWithGoogle,
        signOut,
        logout
    }
    useEffect(()=>{
        
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            console.log("printing user\n")
            localStorage.setItem("user",user)
            console.log(localStorage.getItem('user'))
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