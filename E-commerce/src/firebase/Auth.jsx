// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut , getAuth , updateProfile } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkmAU5pz-oP-2cel48ywNCh4o7dm0Rt30",
  authDomain: "e-commerce-97196.firebaseapp.com",
  projectId: "e-commerce-97196",
  storageBucket: "e-commerce-97196.appspot.com",
  messagingSenderId: "383038418944",
  appId: "1:383038418944:web:3da19d6994af273aa928e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const AuthContext = createContext(null);


const AuthProvider = ({children})=>{
    const auth = userProvideAuth();
    return <AuthContext.Provider value={auth}>
    {children}
</AuthContext.Provider>;
};
export const useAuth = ()=> useContext(AuthContext);

function userProvideAuth(){
    const[user , setUser] = useState();

    const signUp = (email , password, displayName)=> createUserWithEmailAndPassword(auth,email,password).then(({user})=>{
        updateProfile(user,{displayName});
        setUser(user);
        return user;
    });
    const signIn = (email,password)=>signInWithEmailAndPassword(auth,email,password).then(({user})=>{setUser(user);
    return user;
});
const signOutUser = ()=> signOut(auth).then(()=> setUser(null));

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
        user ? setUser(user) : setUser(null)
    });

    return()=> unsubscribe();
})

return{
    signIn, signUp , signOut : signOutUser ,user,
};
}

export default AuthProvider;