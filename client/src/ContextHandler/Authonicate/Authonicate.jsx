import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import auth from '../../firebase.config'

export const authContext = createContext(null);

const Authonicate = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState("");

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // if (currentUser) {
            //     const user = { email: currentUser.email }
            //     axios.put("https://assignment-12-7zcy.onrender.com/crtJwt", user, { withCredentials: true })
            // }
            // else {
            //     const user = { email: userInfo.email };
            //     axios.put("https://assignment-12-7zcy.onrender.com/dltJwt", user, { withCredentials: true })
            // }
            setUserInfo(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const authInfo = {
        userInfo,
        creatUser,
        loginUser,
        googleLogin,
        loading,
        signOut
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authonicate;