import initializeAuthentication from "../Firebase/Firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({})

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
    }

    const facebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
        .then(result => {
            setUser(result.user);
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    },[])

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    return { user, googleSignIn, facebookSignIn, logOut }

}

export default useFirebase;