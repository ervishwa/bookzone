import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCin21Uml9QLmvxYcMVhMQJ-dEuu4cAP5M",
  authDomain: "bookzone-87671.firebaseapp.com",
  projectId: "bookzone-87671",
  storageBucket: "bookzone-87671.appspot.com",
  messagingSenderId: "611083156216",
  appId: "1:611083156216:web:0b960eb6c25a8e0b21990d",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const firebaseContext = createContext();

export const useFirebase = () => useContext(firebaseContext);

const googleProvider = new GoogleAuthProvider();
export const FirebaseProvider = (props) => {
   const[user,setUser] = useState(null);

    useEffect(()=>{
     onAuthStateChanged(auth,(user)=>{
      if(user){
        //console.log(user);
        setUser(user);
      }else{
        setUser(null);
      }
     })
    },[])

  const signupUserWithEmailPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signInWithEmailPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signInWithGoogle = ()=>signInWithPopup(auth,googleProvider);

  const islogedIn = user ? true : false;

  return (
    <firebaseContext.Provider
      value={{ signupUserWithEmailPassword, signInWithEmailPassword ,signInWithGoogle ,islogedIn}}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};
