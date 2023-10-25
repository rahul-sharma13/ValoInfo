import { createContext, useEffect, useState, useContext } from "react";
import { auth, db, gooogleProvider } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, gooogleProvider);
    }

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
        return setDoc(doc(db, 'users', email), {
            watchList: [],
        })
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            const docRef = doc(db, "users", currentUser?.email);
            const docSnap = getDoc(docRef);

            docSnap.then(docSnap => {
                if (docSnap?.exists()) {
                    console.log("exists")
                } else {
                    if (currentUser) {
                        // console.log(currentUser)
                        setDoc(doc(db, 'users', currentUser?.email), {
                            watchList: [],
                        })
                    }
                }
            })
        })
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ signUp, signIn, logOut, signInWithGoogle, user }} >
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}
