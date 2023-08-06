'use client'

import axios from "axios";
import { Faster_One } from "next/font/google";
import React, { createContext, useState, useEffect } from "react";


export const UserApiContext = createContext({});


interface ChildrenType {
    children: React.ReactNode
}

export const UserApiContextProvider = ({ children }: ChildrenType) => {
    const BASE_URL = "http://localhost:4000/api/user"
    const [showLogin, setShowLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


    //checking is user already logged in


    //user registration call using POST method.
    const registerUserCall = async (_data: Object) => {
        const { pharmacyName, name, email, phone, licenseNumber, password } = _data;
        setIsLoading(true);
        await axios.post(BASE_URL + '/register', {
            "pharmacyName": pharmacyName,
            "name": name,
            "email": email,
            "phone": phone,
            "licenseNumber": licenseNumber,
            "password": password
        }).then((response) => {
            setShowLogin(response.data.response);
        })
            .catch((error) => {
                console.log(error);
            });
    }


    //make POST request for user login
    const loginCall = async (_data) => {
        const { email, password } = _data;
        setIsLoading(true);
        await axios.post(BASE_URL + '/login', {
            "email": email,
            "password": password
        })
            .then((response) => {
                console.log(response.data);
                if (response.data.response) {

                    const data = JSON.stringify({
                        token: response.data.token,
                        id: response.data.user_id
                    })
                    localStorage.setItem("userData", data);
                }
            }).catch((error) => {
                setIsLoading(false);
                console.log(error);
            })
    }



    return <UserApiContext.Provider value={{
        showLogin,
        setShowLogin,
        isLoading,
        registerUserCall,
        loginCall
    }}>
        {children}
    </UserApiContext.Provider>

}