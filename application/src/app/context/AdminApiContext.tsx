'use client'
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";



export const AdminApiContext = createContext({});
const BASE_URL = "http://localhost:4000/api/admin"

export const AdminApiContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [allOrders, setAllOrders] = useState([]);



    //admin login call
    const loginCall = async (data: Object) => {
        const { userName, password } = data;
        await axios.post(BASE_URL + '/login', {
            "userName": userName,
            "password": password,
        }).then((response) => {
            localStorage.setItem("adminToken", response.data.token);
            setIsLoggedIn(true);
        }).catch((error) => {
            console.log(error)
        })
    }


    //Add new product call
    const addNewProductCall = async (data: Object) => {
        const { name, price, quantity, url } = data;
        await axios.post(BASE_URL + '/add-product', {
            "name": name,
            "price": price,
            "quantity": quantity,
            "url": url
        }).then((response) => {
            console.log("Added Successfully")
        }).catch((error) => {
            console.log(error)
        })
    }

    //update order status call

    const updateOrderStatusCall = async (serverId, orderState) => {
        await axios.put(BASE_URL + '/update-order', {
            "id": serverId,
            "orderStatus": orderState
        }).then(() => {
            console.log("Success")
        }).catch((error) => {
            console.log(error);
        })
    }

    const allOrderCall = async () => {
        await axios.get(BASE_URL + '/all-order')
            .then((response) => {
                setAllOrders(response.data.orders);
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        allOrderCall();
    })



    return <AdminApiContext.Provider value={{
        isLoggedIn,
        loginCall,
        addNewProductCall,
        updateOrderStatusCall,
        allOrders,
        setIsLoggedIn
    }}>
        {children}
    </AdminApiContext.Provider>
}