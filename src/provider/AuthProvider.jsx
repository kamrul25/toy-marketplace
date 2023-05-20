import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            // console.log("currentUser",currentUser)
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    },[])


    const authInfo ={
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        googleSignIn,
        logout,

    }
    return (
        <AuthContext.Provider value={authInfo} >
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;