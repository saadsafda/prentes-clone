import React, { createContext, useState } from "react";
import { auth } from "../firebase";
export const ContextProvider = createContext();

function Context(props) {
        const [model, setModel] = React.useState(false);
        const [user, setUser] = React.useState(null);
        const [loader, setLoader] = React.useState(true);

    const openModel = () => {
        setModel(true);
    };
    const closeModel = () => {
        setModel(false);
    };

    const register = async (user) => {
        const { username, email, password } = user;
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            res.user.updateProfile({ displayName: username });
            setModel(false);
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (user) => {
        const { email, password } = user;
        const res = await auth.signInWithEmailAndPassword(email, password);
        setModel(false);
    };
    const logout = () => {
        auth
            .signOut()
            .then(() => {
            setUser(null);
        })
            .catch((err) => {
            console.log(err);
        });
    };

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoader(false);
        });
        console.log("lodef", user);
        
    }, [user])

    return (
        <ContextProvider.Provider  value={{ model, openModel, closeModel, register, login, user, loader, logout }} >
            {props.children}
        </ContextProvider.Provider>
    )
}

export default Context
