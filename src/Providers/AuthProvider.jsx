import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';




const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const creatUser = (email, password,name,url) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Update profile with name and photo URL
            return updateProfile(userCredential.user, {
                displayName: name,
                photoURL: url
            }).then(() => userCredential.user);
        });
    }
    const loginUser = (email, password) => {
setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSuscribe
        }
    }, [])
    const authInfo = {
        creatUser,
        user,
        loginUser,
        userSignOut ,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;