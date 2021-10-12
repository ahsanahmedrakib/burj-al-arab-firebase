import initializeAuthentication from "../Firebase/Firebase.init";
import { GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, FacebookAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [user, setUser] = useState({})
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [useremail, setuserEmail] = useState("");
    const [userpassword, setuserPassword] = useState("");

    const getName = e =>{
        setName(e.target.value);
    }
    const getImage = e =>{
        setImage(e.target.value);
    }

    const getEmail = e =>{
        setEmail(e.target.value);
    }

    const getPassword = e =>{
        setPassword(e.target.value);
    }

    const userEmail = e => {
        setuserEmail(e.target.value)
    }

    const userPassword = e => {
        setuserPassword(e.target.value)
    }

    const setUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          }).then(() => {
            
          }).catch((error) => {
            setError(error.message)
          });
    }

    const userRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError("Password should be at least 6 charecters");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError("");
            setUserInfo();
        })
        .catch((error) => {
            setError(error.message);
        })
    }

    const signInWithEmail = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, useremail, userpassword)
        .then(result => {
            const user = result.user;
            setUser(result.user)
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        })
    }

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch((error)=> {
            setError(error.message)
        })
    }

    const facebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch((error)=> {
            setError(error.message)
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
        .catch((error)=> {
            setError(error.message)
        })
    }

    return { user, error, userRegistration, getName, getImage, getEmail, getPassword, userEmail, userPassword, signInWithEmail, googleSignIn, facebookSignIn, logOut }

}

export default useFirebase;