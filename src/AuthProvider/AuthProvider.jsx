import React, { useState, useContext, useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to register a new user
    const createUser = async (email, password) => {
        setLoading(true); // Set loading to true to indicate an ongoing operation
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const newUser = userCredential.user;
            setUser(newUser);
            return newUser;
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        } finally {
            setLoading(false); // Set loading to false upon operation completion
        }
    };

    // Function to sign in an existing user
    const signInUser = async (email, password) => {
        setLoading(true); // Set loading to true to indicate an ongoing operation
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const signedInUser = userCredential.user;
            setUser(signedInUser);
            return signedInUser;
        } catch (error) {
            console.error('Error signing in user:', error);
            throw error;
        } finally {
            setLoading(false); // Set loading to false upon operation completion
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false); // Set loading to false when authentication state changes
        });
        return () => {
            unsubscribe(); // Unsubscribe from the onAuthStateChanged listener when the component unmounts
        };
    }, []);

    const authinfo = {
        user,
        loading,
        createUser,
        signInUser, // Rename the function to avoid naming conflict
    };

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
