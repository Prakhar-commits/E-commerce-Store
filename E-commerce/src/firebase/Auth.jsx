import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkmAU5pz-oP-2cel48ywNCh4o7dm0Rt30",
  authDomain: "e-commerce-97196.firebaseapp.com",
  projectId: "e-commerce-97196",
  storageBucket: "e-commerce-97196.appspot.com",
  messagingSenderId: "383038418944",
  appId: "1:383038418944:web:3da19d6994af273aa928e5",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const authData = useProvideAuth();
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signUp = async (email, password, displayName) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, { displayName });
    setUser(user);
    return user;
  };

  const signIn = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
      return user;
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        throw new Error("User does not exist");
      } else {
        throw error;
      }
    }
  };

  const signOutUser = async () => {
    await signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signUp,
    signIn,
    signOut: signOutUser,
  };
}
