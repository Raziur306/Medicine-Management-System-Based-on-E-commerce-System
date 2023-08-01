'use client'

import { createContext, useState } from "react";


export const LoginContext = createContext({});


interface ChildrenType {
    children: React.ReactNode
}

export const LoginContextProvider = ({ children }: ChildrenType) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);



    return <LoginContext.Provider value={{
        showLogin,
        setShowLogin,
        isLoading
    }}>
        {children}
    </LoginContext.Provider>

}